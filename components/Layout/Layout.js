import Head from "next/head";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>EliteBizz</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Roboto font*/}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
