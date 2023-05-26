import type { AppProps } from 'next/app'
import '../styles/global.css'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
