import "../styles/globals.css";
import "../styles/navbar.css"
import "../styles/hero.css"
import "../styles/style.css"
import "../styles/card.css"
import "../styles/footer.css"
import "../styles/contact.css"
import "../styles/services.css"
import "../styles/experience.css"
import "../styles/blog.css"
import "../styles/slider.css"
import "../styles/work.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AnimateSharedLayout} from "framer-motion"
import Layout from "../components/Layout/layout";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </AnimateSharedLayout>
  );
}

export default MyApp;
