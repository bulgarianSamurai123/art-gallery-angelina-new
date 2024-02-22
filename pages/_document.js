import Document, { Html, Head, Main, NextScript } from "next/document";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notification" />
        </body>
      </Html>
    )
  }
}

export default MyDocument
