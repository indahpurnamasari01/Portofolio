import { motion } from "framer-motion";

function Home() {
  return (
    <section
      id="Home"
      className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-200 to-blue-800 text-white px-4"
    >
    
      <motion.div
        className="relative mb-15"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src="/image/IMG_8103-removebg-preview.png"
          alt="Profile"
          className="w-60 md:w-60 lg:w-120 rounded-full shadow-2xl border-4 border-white object-cover"
        />
      </motion.div>


      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-center mb-4"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        Hallo, I'm{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-500">
          Indah Purnama Sari
        </span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-center font-light mb-6"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        Seorang Mahasiswi Teknik Informatika
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-600 hover:text-white transition-transform transform hover:scale-105"
        >
          Hubungi Saya
        </a>
      </motion.div>
    </section>
  );
}

export default Home;
