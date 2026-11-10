import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale || "bg"}>
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
