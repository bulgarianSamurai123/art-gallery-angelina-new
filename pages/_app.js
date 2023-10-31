import "/styles/globals.css";

import Layout from "../components/layout/Layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Angelina's Art Gallery</title>
        <meta name="description" content="" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}
