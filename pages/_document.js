import Document, { Head, Main, NextScript, Html } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sansita+Swashed:wght@300;400;500&display=swap"
            rel="stylesheet"
          ></link>
          <meta name="description" content="A Site made for learning NEXT JS" />
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width" />
          <meta name="robots" content="noindex,nofollow" />
          <link rel="manifest" href="../static/manifest.json" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="next-news" />
          <meta name="apple-mobile-web-app-title" content="next-news" />
          <meta name="theme-color" content="#f90" />
          <meta name="msapplication-navbutton-color" content="#f90" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          <link rel="icon" type="png" sizes="192x192" href="/static/icon.png" />
          <link
            rel="apple-touch-icon"
            type="png"
            sizes="192x192"
            href="/static/icon.png"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>
          {`
            *,
            *::after,
            *::before {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }

            body {
              margin: 0;
              font-size: 110%;
              padding: 0;
              box-sizing: border-box;
              background-color: #f0f0f0;
              font-family: "Sansita Swashed", cursive;
            }
          `}
        </style>
      </Html>
    );
  }
}
