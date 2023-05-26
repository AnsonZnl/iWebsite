import Document, { Head, Html, Main, NextScript } from 'next/document'
import { useEffect } from 'react'

class MyDocument extends Document {
  render() {
    let isDarkMode = false
    useEffect(() => {
      isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    }, [])
    return (
      <Html lang="" className={isDarkMode ? 'dark' : ''}>
        <Head>
          <meta charSet="UTF-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
