import '../styles/globals.css'
import Layout from "../components/Layout/Layout";
import LayoutSocials from "../components/Layout/LayoutSocials/LayoutSocials";
import App from "next/app";



const MyApp = ({ Component, pageProps, socials })=> {
    return (
        <Layout socials={socials}>
            <Component {...pageProps} />

        </Layout >
    )
}

MyApp.getInitialProps = async (appContext) => {
    console.log(`${process.env.API_HOST}/socials/`, process.env )
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/socials/`)
    const data = await response.json()
   const appProps = await App.getInitialProps(appContext);

   return { ...appProps, socials: data }
 }

export default MyApp
