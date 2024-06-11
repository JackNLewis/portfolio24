import Navbar from "../components/nabar";
import Snippet from "../components/snipppet";

export default function Hero() {
  return (
    <div className="relative w-screen h-screen flex flex-col mb-64 justify-center items-center">
      <Navbar />
      <div className="w-1/2 text-center">
        <h2 className="text-3xl font-medium text-primary">Hey, I'm</h2>
        <h1 className="text-5xl font-medium py-1">Jack Lewis</h1>
        <h2 className="text-black text-opacity-50 w-96 py-3 mx-auto">I'm a sofware developer who enjoys learning new tech and building scalable software</h2>
        <button className="transition duration-500 ease-in-out bg-primary hover:bg-primaryDark font-light text-white py-3 px-6 rounded-md my-12">
          Explore More!
        </button>
        <Snippet />
      </div>
    </div>
  );
}