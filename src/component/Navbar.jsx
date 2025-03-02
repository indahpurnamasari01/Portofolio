import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-500 to-blue-800 shadow-md py-2 px-5 z-50 text-white">
      <div className="container mx-auto flex items-center justify-between">
      
        <div className="flex items-center gap-2">
          <img src="./src/assets/image/11zon_cropped.png" alt="Logo" className="h-12 w-12 rounded-full shadow-md" />
          <h1 className="text-xl font-bold">My Portfolio</h1>
        </div>

      
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      
        <ul
          className={`md:flex gap-8 ml-auto text-lg font-semibold transition-all duration-300 ${
            isOpen ? "flex flex-col items-center mt-4" : "hidden"
          } md:flex md:mt-0`}
        >
          {[
            { name: "Beranda", href: "#Home" },
            { name: "Tentang", href: "#about" },
            { name: "Keahlian", href: "#Skills" },
            { name: "Galeri", href: "#gallery" },
            { name: "Prestasi", href: "#Achievements" },
            { name: "Kontak", href: "#contact" },
          ].map((item, index) => (
            <li key={index} className="group relative">
              <a
                href={item.href}
                className="hover:text-yellow-300 transition relative z-10"
              >
                {item.name}
              </a>
              <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
