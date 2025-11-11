export default function Hero() {
  return (
    <section className="relative flex flex-col sm:flex-row items-center justify-between bg-[#7a7777]">
      <div className="sm:w-1/2 mt-0 sm:mt-0">
        <img
          src="/banner/banner.jpg"
          alt="Fashion Hero Desktop"
          className="w-full max-h-[580px] sm:max-h-[800px] object-cover"
        />
      </div>
      <div className="absolute bottom-7 sm:static sm:w-1/2 space-y-4 px-6 sm:px-12">
        <p className="text-sm uppercase tracking-widest text-white sm:text-black">زیبایی در سادگی نهفته است</p>
        <h2 className="text-4xl sm:text-5xl font-bold text-yellow-800 leading-tight">
          ورود تازه‌ها به دنیای استایل
        </h2>
        <p className="text-white sm:text-black">
          لباس‌هایی با طراحی منحصربه‌فرد و دوخته‌شده با عشق، مخصوص شما که خاص هستید.
        </p>
        <button className="bg-yellow-800 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-all">
          الان ببین
        </button>
      </div>
    </section>
  );
}
