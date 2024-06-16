export default function Navbar() {
  return (
  <div className="fixed justify-evenly flex top-10 right-8 w-96 right-1 text-gray-500 font-light z-50">
        <a href="#" className="transition duration-400 ease-in-out text-primary hover:text-primary">Home</a>
        <a href="#about" className="transition duration-400 ease-in-out hover:text-primary">About</a>
        <a href="#skills" className="transition duration-400 ease-in-out hover:text-primary">Skills</a>
        <a href="#blog" className="transition duration-400 ease-in-out hover:text-primary">Blog</a>
        <a href="#contact" className="transition duration-400 ease-in-out hover:text-primary">Contact</a>
    </div>
  );
}
