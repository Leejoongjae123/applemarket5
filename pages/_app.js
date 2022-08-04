import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../public/static/fonts/style.css";
import GNB from '../src/components/GNB'

function MyApp({ Component, pageProps }) {
  
  return (
  <>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
