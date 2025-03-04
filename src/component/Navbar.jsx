import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-800 shadow-md py-2 px-5 z-50 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/image/11zon_cropped.png"
            alt="Logo"
            className="h-12 w-12 rounded-full shadow-md"
          />
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </div>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <ul
          className={`md:flex gap-8 ml-auto text-lg font-semibold transition-all duration-300 ${
            isOpen
              ? "flex flex-col items-center mt-4 bg-blue-700 w-full py-4 rounded-md shadow-md"
              : "hidden"
          } md:flex md:mt-0 md:bg-transparent md:shadow-none`}
        >
          <li>
            <Link
              to="Home"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Tentang
            </Link>
          </li>
          <li>
            <Link
              to="Skills"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Keahlian
            </Link>
          </li>
          <li>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Galeri
            </Link>
          </li>
          <li>
            <Link
              to="Achievements"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Prestasi
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-4 py-2 hover:text-teal-200 transition-colors cursor-pointer"
              activeClass="text-teal-400"
              onClick={() => setIsOpen(false)}
            >
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
