import Head from "next/head";
import Script from "next/script";
import { Provider } from "next-auth/client";
import { appWithTranslation } from "next-i18next";

import "/styles/globals.css";

import Layout from "../components/layout/Layout";
import { DataProvider } from "../context/DataCotext";

function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
        </Script>
        <Head>
          <title>Angelina's Art Gallery</title>
          <meta name="description" content="" />
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
    </Provider>
  );
}

export default appWithTranslation(App)
