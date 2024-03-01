import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://media.nedigital.sg" />
          <link rel="dns-prefetch" href="https://media.nedigital.sg" />
          <meta
            property="og:description"
            content="Textured. Minimalistic. Art."
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="notification" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
