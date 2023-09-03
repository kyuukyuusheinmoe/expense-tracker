import { Provider } from 'react-redux';
import 'primeicons/primeicons.css';
import "primereact/resources/primereact.min.css";
import '../styles/globals.scss'
import "../styles/theme.css";   
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
 
  return getLayout(<Provider store={store}><Component {...pageProps} /></Provider>)
}

export default MyApp
