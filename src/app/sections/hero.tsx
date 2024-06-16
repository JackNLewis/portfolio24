"use client"
import Canvas from "../components/canvas";
import Navbar from "../components/nabar";
import Snippet from "../components/snipppet";

export default function Hero() {
  return (
    <div className="relative w-screen flex flex-col justify-center items-center m-b-16">
      <Navbar />
      <Canvas styles="absolute top-0 left-0"/>
      <div className="w-1/2 text-center pt-64">
        <h2 className="text-3xl font-medium text-primary">Hey, I'm</h2>
        <h1 className="text-5xl font-medium py-1">Jack Lewis</h1>
        <h2 className="text-black text-opacity-50 w-96 py-3 mx-auto">I'm a sofware developer who enjoys learning new tech and building scalable software</h2>
        <button className="transition duration-500 ease-in-out bg-primary hover:bg-primaryDark font-light text-white py-3 px-6 rounded-md my-12">
        Explore More
        </button>
      </div>
      <Snippet />
    </div>
  );
}