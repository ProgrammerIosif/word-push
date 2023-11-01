import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WordPush.com</title>
        <meta name='description' content='WordPush is a responsive website clone of wordpress.com.'></meta>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
