import React from "react";
import Head from "next/head";

import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | FabyoSK</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
