import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>EliteBizz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
