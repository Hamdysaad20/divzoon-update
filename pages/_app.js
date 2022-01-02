import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 
import Head from 'next/head'
import React from 'react'


function MyApp({ Component, pageProps }) {
  return (
  <>
       <Head>
        <title>Divzoon</title>
      </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
