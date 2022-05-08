import '../styles/globals.css'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps & { Component: { getLayout?: (page: unknown) => unknown } }) {
    const getLayout = Component.getLayout || ((page: unknown) => page);
    return getLayout(<Component {...pageProps} />);
}

export default MyApp