export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-green-50">
      {/* Inline styles for custom animations */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>

      {/* Background Animated Blobs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-2000 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 md:w-96 md:h-96 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob animation-delay-4000 pointer-events-none"></div>

      {/* Main Content with Glassmorphism */}
      <div className="relative z-10 text-center p-10 md:p-16 bg-white/40 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl max-w-xl mx-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-green-800 tracking-tight">
          GreenFarm Spices
        </h1>

        <div className="w-20 h-1.5 bg-green-500 mx-auto mt-6 rounded-full shadow-sm"></div>

        <p className="mt-8 text-2xl md:text-3xl font-semibold text-gray-800">
          Website Launching Soon
        </p>

        <p className="mt-3 text-lg text-gray-600 font-medium">
          Authentic Ayurvedic Products & Natural Spices
        </p>
      </div>
    </main>
  );
}