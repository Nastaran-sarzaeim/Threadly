export default function Hero() {
  return (
    <section className="relative w-full">
      <div className="relative w-full hidden md:block max-h-[730px] overflow-hidden">
        <img
          src="/banner/banner.png"
          alt="Fashion Hero Desktop"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute bottom-40 left-6 sm:left-12 space-y-4 max-w-xl text-left">
          <p className="text-lg uppercase tracking-widest text-white">
            زیبایی در سادگی نهفته است
          </p>
          <h2 className="text-6xl sm:text-5xl font-bold text-yellow-700 leading-tight">
            ورود تازه‌ها به دنیای استایل
          </h2>
          <p className="text-white text-lg">
            لباس‌هایی با طراحی منحصربه‌فرد و دوخته‌شده با عشق، مخصوص شما که خاص هستید.
          </p>
          <button className="bg-yellow-700 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-all">
            الان ببین
          </button>
        </div>
      </div>

      <div className="relative w-full block md:hidden">
        <img
          src="/banner/banner-mobile.png"
          alt="Fashion Hero Mobile"
          className="w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25"></div>
        <div className="absolute bottom-4 left-6 right-6 space-y-2 text-center">
          <p className="text-sm uppercase tracking-widest text-white">
            زیبایی در سادگی نهفته است
          </p>
          <h2 className="text-2xl font-bold text-yellow-700 leading-tight">
            ورود تازه‌ها به دنیای استایل
          </h2>
          <p className="text-sm text-white">
            لباس‌هایی با طراحی منحصربه‌فرد و دوخته‌شده با عشق، مخصوص شما که خاص هستید.
          </p>
          <button className="bg-yellow-700 text-white px-4 py-1 rounded-md hover:bg-yellow-700 transition-all">
            الان ببین
          </button>
        </div>
      </div>
    </section>
  );
}
