import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";

import "/styles/globals.css";

import Layout from "../components/layout/Layout";
import { DataProvider } from "../context/DataCotext";
import { pageview } from "../helpers/gtag";
import bg from "../messages/bg.json";
import en from "../messages/en.json";

const allMessages = { bg, en };

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const locale = router.locale || "bg";

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={allMessages[locale] || bg}
      timeZone="Europe/Sofia"
    >
      <Layout>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
          });
        `}
        </Script>
        <Head>
          <title>Angelina's Art Gallery</title>
          <meta
            name="description"
            content={(allMessages[locale] || bg).Meta.siteDescription}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#89939e" />
          <meta name="msapplication-TileColor" content="#89939e" />
          <meta name="theme-color" content="#ffffff" />
          <meta property="og:site_name" content="AngelinaArtGallery" />
        </Head>
        <main>
          <DataProvider>
            <Component {...pageProps} />
          </DataProvider>
        </main>
      </Layout>
    </NextIntlClientProvider>
  );
}
