import 'tailwindcss/tailwind.css'
import '../styles/style.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; 



function MyApp({ Component, pageProps }) {
  return  <Component {...pageProps} />
}

export default MyApp
