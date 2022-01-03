import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import Head from 'next/head'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 



function MyApp({ Component, pageProps }) {
  return ( 
  <div>
    <Head>
    <title>Divzoon</title>

<link rel="shortcut icon" href="/divicobg.ico" />
    </Head>
  <Component {...pageProps} />
  </div>
  )
}

export default MyApp
