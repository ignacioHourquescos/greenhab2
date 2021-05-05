import '../styles/globals.css'
import Header from '../components/Header/Header'
import { AppWrapper }   from '../context/AppContext';
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    

   return (<>
         <Head>
          <link
            rel="preload"
            href="/fonts/Recoleta-medium.ttf"
            as="font"
            crossOrigin=""
          />
        </Head>
   <AppWrapper>


      {/* <Header/> */}
      <Component {...pageProps} />
   </AppWrapper>
 
  </>)
}

export default MyApp


