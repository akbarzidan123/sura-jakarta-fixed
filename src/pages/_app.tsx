import '@/styles/global.css' // Pastikan path-nya sesuai
import Head from 'next/head'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Sura(Ja)karta</title>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
