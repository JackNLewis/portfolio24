"use client"
import Canvas from "../components/canvas";
import Navbar from "../components/nabar";
import Snippet from "../components/snipppet";

export default function Hero() {
  return (
    <div id="hero-container" className="relative min-w-full min-h-screen flex flex-col items-center justify-between m-b-16">
      {/* <Navbar /> */}
      {/* <Canvas pointIndex={1} styles="absolute top-0 left-0"/> */}
      {/* <Canvas pointIndex={2} width={420} styles="absolute right-0 -bottom-64"/> */}
      <div></div>
      <div className="relative w-1/2 text-center top-24 md:top-64 flex flex-col items-center">
        <h2 className="text-2xl md:text-3xl font-medium text-primary">Hey, I'm</h2>
        <h1 className="text-4xl md:text-5xl font-medium py-1">Jack Lewis</h1>
        <h2 className="text-black text-opacity-50 w-64 md:w-96 py-3">I'm a sofware developer who enjoys learning new tech and building scalable software</h2>
        <button className="transition duration-500 text-sm md:text-base ease-in-out bg-primary hover:bg-primaryDark font-light text-white py-3 px-6 rounded-md my-6 md:my-12">
        Explore More
        </button>
      </div>
      <Snippet />
    </div>
  );
}