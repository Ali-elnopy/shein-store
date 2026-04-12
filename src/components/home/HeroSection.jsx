import heroBg from'../../assets/hero-bg.png'
const HeroSection = () => {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

      {/* Background Image */}
      <img
        src={heroBg}
        alt="New Arrivals"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark overlay — gradient من الشمال للـ fade */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-10 md:px-20 max-w-2xl">

        {/* Badge */}
        <span className="inline-block w-fit mb-4 px-3 py-1 text-[10px] tracking-widest uppercase
          bg-[#E91E8C] text-white rounded-sm">
          AW/24 Drop One
        </span>

        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
          New Arrivals <br /> Just Dropped
        </h1>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button className="px-6 py-3 bg-blue-600 text-white text-xs tracking-widest
            uppercase hover:bg-blue-700 transition-colors">
            Shop Now
          </button>
          <button className="px-6 py-3 border border-white text-white text-xs tracking-widest
            uppercase hover:bg-white hover:text-black transition-colors">
            Explore Lookbook
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection