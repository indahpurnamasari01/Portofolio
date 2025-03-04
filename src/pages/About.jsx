function About() {
  return (
    <section 
      id="about" 
      className="flex flex-col md:flex-row items-center justify-center py-20 px-10 bg-gradient-to-r from-blue-200 to-blue-800 text-white"
    >
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/image/IMG_1206-removebg-preview.png"
          alt="Profile"
          className="h- w- rounded shadow-xl object-cover"
        />
      </div>
      <div className="md:w-2/3 mt-10 md:mt-2 md:pl-10 text-center md:text-left">
        <h2 className="font-sans text-4xl font-bold text-white">Tentang Saya</h2>
        <p className="mt-6 text-lg text-white leading-relaxed">
                 Saya seorang <span className="font-semibold text-black">Mahasiswi Teknik Informatika</span> yang sangat suka eksplor hal baru dan
          memiliki ketertarikan dalam dunia organisasi, traveling, serta selalu bersemangat dalam mempelajari 
          hal-hal baru. Saya percaya bahwa pengalaman dari berbagai aspek kehidupan dapat memperkaya wawasan dan 
          membantu saya berkembang sebagai individu yang lebih baik.
        </p>
        <p className="mt-4 text-lg text-white leading-relaxed">
                Kegiatan organisasi telah mengajarkan saya tentang <span className="font-semibold text-black">kepemimpinan, kerja tim, dan komunikasi yang efektif</span>. 
          Sementara itu, traveling membuka perspektif baru dan membuat saya lebih adaptif dalam berbagai situasi. 
          Saya senang bertemu orang baru, mengeksplorasi budaya yang berbeda, dan selalu mencari tantangan yang dapat meningkatkan keterampilan saya.
        </p>
      </div>
    </section>
  );
}

export default About;
