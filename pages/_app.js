
import '../styles/globals.scss'
import Layout from "../components/Layout";
import {ThemeProvider} from "next-themes";


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
