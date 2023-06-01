import type { AppProps } from 'next/app'
import '../styles/global.css'
import { ThemeProvider } from '@/components/theme-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div id="root">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}

export default MyApp
