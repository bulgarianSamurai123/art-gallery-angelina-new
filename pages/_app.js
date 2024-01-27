import Head from "next/head";
import { Provider } from "next-auth/client";

import "/styles/globals.css";

import Layout from "../components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Layout>
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
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
