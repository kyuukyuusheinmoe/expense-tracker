import '../styles/globals.scss'
import 'primeicons/primeicons.css';
import { MainLayout } from '../containers/Layout';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
