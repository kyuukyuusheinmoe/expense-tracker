import '../styles/globals.scss'
import 'primeicons/primeicons.css';
import { MainLayout } from '../containers/Layout';

function MyApp({ Component, pageProps }) {
  return<MainLayout> <Component {...pageProps} /></MainLayout>
}

export default MyApp
