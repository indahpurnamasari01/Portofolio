import { motion } from "framer-motion";
import React from "react";

function Skills() {
  return (
    <section 
      id="Skills"
      className="flex flex-col items-center justify-center min-h-screen py-20 px-10  bg-gradient-to-r from-blue-200 to-blue-800 text-white"
    >
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Keahlian Saya</h2>
        <p className="text-lg text-gray-100">
          Saya memiliki berbagai keterampilan dan keahlian. Berikut beberapa yang saya kuasai:
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {[
          "Master of Ceremony (MC)",
          "Moderator",
          "Make Up Artist",
          "Microsoft Office",
          "Membaca Puisi",
          "Menari"
          
        ].map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white text-blue-600 rounded-xl shadow-lg p-6 text-center transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <h3 className="text-xl font-semibold">{skill}</h3>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
       
      </motion.div>
    </section>
  );
}

export default Skills;
