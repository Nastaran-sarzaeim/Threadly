export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-between bg-[#7a7777]">
      <div className="absolute bottom-7 sm:static sm:w-1/2 space-y-4 px-6 sm:px-12">
        <p className="text-sm uppercase tracking-widest text-white sm:text-black">New Arrival</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-800 leading-tight">
          Discover Our New Collection
        </h2>
        <p className="text-white sm:text-black">
          Explore the trendiest clothing pieces made with love and style.
        </p>
        <button className="bg-yellow-800 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-all">
          Buy Now
        </button>
      </div>
      <div className="sm:w-1/2 mt-0 sm:mt-0">
        <img
          src="/banner/banner.jpg"
          alt="Fashion Hero Desktop"
          className="w-full max-h-[580px] sm:max-h-[800px] object-cover"
        />
      </div>

    </section>
  );
}
