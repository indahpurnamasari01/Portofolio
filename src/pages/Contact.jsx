import { Mail, Instagram, Phone } from "lucide-react";

function Contact() {
    return (
        <div
            id="contact"
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-blue-800 text-white p-6"
        >
            <h2 className="text-4xl font-bold text-white mb-6 animate-fade-in">
                Kontak Saya 📩
            </h2>
            <div className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-2xl transition-transform transform hover:scale-105">
                <form className="space-y-4">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Nama
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Nama Lengkap"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="emailkamu@example.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 font-semibold mb-1">
                            Pesan
                        </label>
                        <textarea
                            className="w-full p-2 border border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            placeholder="Tulis pesanmu di sini..."
                            rows="3"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-lg hover:from-purple-500 hover:to-blue-500 transition duration-300 transform hover:scale-105 shadow-md"
                    >
                        Kirim Pesan 🚀
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Hubungi Saya di:</h3>
                    <div className="flex justify-center space-x-6">
                        <a
                            href="indahips409@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-blue-500 transition"
                        >
                            <Mail size={30} />
                        </a>
                        <a
                            href="https://wa.me/6283187952831"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-green-500 transition"
                        >
                            <Phone size={30} />
                        </a>
                        <a
                            href="https://instagram.com/Indhprnamasari01_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-pink-500 transition"
                        >
                            <Instagram size={30} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
