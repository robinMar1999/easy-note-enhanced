import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Header from "@/components/header";
import Navbar from "@/components/navbar";

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Header />
    <Navbar />
    <Component {...pageProps} />
  </>
}
