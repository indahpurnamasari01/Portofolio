function Gallery() {
  const images = [
    "src/assets/image/IMG_8072 (1).JPG",
    "src/assets/image/DSC06431 (1).JPG",
    "src/assets/image/WhatsApp Image 2025-01-07 at 19.58.35_8399da30.jpg",
    "src/assets/image/WhatsApp Image 2025-01-07 at 14.10.04_216fa541.jpg",
    "src/assets/PXL_20221222_113926910.PORTRAIT.jpg",
    "src/assets/image/WhatsApp Image 2024-11-15 at 13.22.51_4f33c65c.jpg",
    "src/assets/image/IMG20230928134628_00.jpg",
    "src/assets/image/Screenshot 2025-03-02 095029.png"
];

  
    return (
      <section 
      id="gallery" 
      className="py-20 px-10 flex flex-col items-center justify-center bg-gradient-to-r from-blue-200 to-blue-800 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-white-800 mb-6">Galeri</h2>
          <p className="text-lg text-white-600 mb-4">
            Berikut adalah beberapa momen yang telah saya abadikan dalam perjalanan saya.
          </p>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
  export default Gallery;