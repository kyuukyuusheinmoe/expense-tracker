import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import '../styles/globals.scss'
import "../styles/theme.css";   

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
