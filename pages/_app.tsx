import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [isSSR, setIsSSR] = useState(true) ;

  useEffect(() => {
    setIsSSR(false)
  }, []) ;

  if(isSSR) return null ;

  return (
    <div>
        NavBar 
        
        <div className="flex gap-6 md:gap-20">

        </div>
        <Component {...pageProps} />

    </div>

  );
}
