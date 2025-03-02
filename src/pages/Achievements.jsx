function Achievements() {
    const achievements = [
      { tahun: "2025", prestasi: "Penulis Puisi Favorit Nasional", penyelenggara: "Event Menulis" },
      { tahun: "2024", prestasi: "Juara 3 Hadroh Provinsi", penyelenggara: "Milad Muhammadiyah" },
      { tahun: "2023", prestasi: "Juara 2 Hadroh Provinsi", penyelenggara: "Nahdatul Ulama" },
      { tahun: "2023", prestasi: "Peserta Raiumna Nasional", penyelenggara: "Pramuka" },
      { tahun: "2022", prestasi: "Juara 1 Lomba Puisi", penyelenggara: "Kecamatan Tanah Merah" },
      { tahun: "2022", prestasi: "Juara 1 Speech Contest", penyelenggara: "MAN 1 INHIL" },
    ];
  
    return (
      <div
      id="Achievements"
      className="flex flex-col items-center justify-center h-screen  py-20 px-10 bg-gradient-to-r from-blue-200 to-blue-800 text-white">
        <h2 className="text-3xl font-bold text-white mb-6">Prestasi Saya</h2>
        <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
          <table className="w-full border-collapse border border-gray-300 shadow-lg rounded-lg">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="border border-gray-600 p-3">Tahun</th>
                <th className="border border-gray-600 p-3">Prestasi</th>
                <th className="border border-gray-600 p-3">Penyelenggara</th>
              </tr>
            </thead>
            <tbody>
              {achievements.map((item, index) => (
                <tr key={index} className="text-center bg-white hover:bg-gray-100">
                  <td className="border border-gray-600 p-3 text-blue-700">{item.tahun}</td>
                  <td className="border border-gray-600 p-3 text-blue-700">{item.prestasi}</td>
                  <td className="border border-gray-600 p-3 text-blue-700">{item.penyelenggara}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  
  export default Achievements;
  