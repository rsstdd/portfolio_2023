import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute='class'>
      <Head>
        <link rel='shortcut icon' href='/public/apple-touch-icon.png' />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
