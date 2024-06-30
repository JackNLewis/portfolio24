"use-client"

import Hero from "./sections/hero";
import About from "./sections/about";
import Skills from "./sections/skills";
import Blog from "./sections/blog";
import Contact from "./sections/contact";
import { DrawerComponent } from "./components/drawer";

export default function Home() {
  return (
    <>
      <DrawerComponent />
      <Hero />
      <About />
      <Skills />
      <Blog />
      <Contact />
    </>
  );
}
