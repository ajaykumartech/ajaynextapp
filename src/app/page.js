
import About from "@/pages/About";
import Navbar from "@/pages/Navbar";
import Footer from "../pages/Footer";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Intro from "@/pages/Intro";
import Head from "next/head";
import Intro1 from "@/pages/Intro1";

const Home = () => {
  return (
    <>
        <div id="home">
          {" "}
          <Navbar />
        </div>
         <Intro />
         {/* <Intro1 /> */}
        <div id="about">
          <About />
        </div>
        <div id="portfolio">
          <Portfolio />
        </div>
        <div id="resume">
          <Resume />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
    </>
  );
}
export default Home;
