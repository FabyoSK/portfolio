import Head from "next/head";
import React from "react";

import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FabyoSK</title>
        <meta name="title" content="Home | FabyoSK" />
        <meta name="description" content="The official website of FabyoSK" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fabyosk.vercel.app/" />
        <meta property="og:title" content="Home | FabyoSK" />
        <meta
          property="og:description"
          content="The official website of FabyoSK"
        />
        <meta
          property="og:image"
          content="https://avatars.githubusercontent.com/u/64048314?v=4"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://fabyosk.vercel.app/" />
        <meta property="twitter:title" content="Home | FabyoSK" />
        <meta
          property="twitter:description"
          content="The official website of FabyoSK"
        />
        <meta
          property="twitter:image"
          content="https://avatars.githubusercontent.com/u/64048314?v=4"
        />
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Contact /> */}
      <Footer />
    </>
  );
}
