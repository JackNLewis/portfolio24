"use-client"

import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Blog from "./sections/blog";
import Contact from "./sections/contact";
import Canvas from "./components/canvas";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
