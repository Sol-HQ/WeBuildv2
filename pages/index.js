import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import {benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>StreamLines</title>
        <meta
          name="Building Blocks"
          content="built with next.js & Tailwind CSS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Getting Of The Grip"
        title=" Then The Gripping, of The Grasp!">
        Life, Soundness, Truth, Family, Philosophy, The Color's, The Canvas's...   Thee, 'Artist Pallet...
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Cta />
      <SectionTitle
        pretitle="Coming Soon, The Video Verse's"
        title="...Elements of Light & Flight...">
        So,
        Just like Mike, ~In the beginning. In Living Color. And Soon: With Custom Kite's, & Custom Art, Oh, The Stories they shall Tell, Custom as well...
      </SectionTitle>
      <Video /> 
      <SectionTitle
        pretitle="Testimonials"
        title="Your Stories Here">
        Stories, Art, Videos and Testimonies, The Mountain's and The Valley's
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        Questions Are Welcome...
      </SectionTitle>
      <Faq />
      <Footer />
      <PopupWidget />
    </>
  );
}

export default Home;


