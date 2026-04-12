import womenImg from "../../assets/women.png";
import menImg from "../../assets/men.png";
import kidsImg from "../../assets/kids.png";

// const categories = [
//   { label: "Women", sub: "Shop Collection", img: womenImg, span: "row-span-2" },
//   { label: null,    sub: null,              img: womenImg, span: "" },
//   { label: "Men",   sub: "Shop Collection", img: menImg,    span: "row-span-2 col-start-3" },
//   { label: "Kids",  sub: null,              img: kidsImg,   span: "" },
//   { label: "Sale",  sub: "Up to 60% off",   img: null,      span: "" },
// ];

const BrowseByIntent = () => {
  return (
    <section className="px-6 md:px-16 py-16">

      <h2 className="text-2xl font-bold tracking-tight mb-1">Browse by Intent</h2>
      <p className="text-sm text-gray-500 mb-8">Curated categories for every lifestyle.</p>

      <div className="flex gap-2 h-[520px]">

        {/* ===== عمود شمال: صورتين Women ===== */}
        <div className="flex gap-2 w-[48%]">

          {/* Women 1 */}
          <div className="relative flex-1 overflow-hidden group cursor-pointer">
            <img src={womenImg} alt="Women"
              className="w-full h-full object-cover object-top
                group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-xs tracking-widest uppercase font-bold">Women</p>
              <p className="text-white text-[10px] tracking-widest uppercase opacity-80">
                Shop Collection
              </p>
            </div>
          </div>

          {/* Women 2 — بدون label */}
          {/* <div className="relative flex-1 overflow-hidden group cursor-pointer">
            <img src={womenImg} alt="Women editorial"
              className="w-full h-full object-cover object-top
                group-hover:scale-105 transition-transform duration-500" />
          </div> */}

        </div>

        {/* ===== عمود يمين ===== */}
        <div className="flex flex-col gap-2 w-[52%]">

          {/* Men — نص الارتفاع فوق */}
          <div className="relative h-[50%] overflow-hidden group cursor-pointer">
            <img src={menImg} alt="Men"
              className="w-full h-full object-cover object-center
                group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-4 left-4">
              <p className="text-white text-xs tracking-widest uppercase font-bold">Men</p>
              <p className="text-white text-[10px] tracking-widest uppercase opacity-80">
                Shop Collection
              </p>
            </div>
          </div>

          {/* Row تحت: Kids + Sale */}
          <div className="flex gap-2 h-[50%]">

            {/* Kids */}
            <div className="relative flex-1 overflow-hidden group cursor-pointer">
              <img src={kidsImg} alt="Kids"
                className="w-full h-full object-cover object-top
                  group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute bottom-4 left-4">
                <p className="text-white text-xs tracking-widest uppercase font-bold">Kids</p>
                <p className="text-white text-[10px] tracking-widest uppercase opacity-80">
                  Explore
                </p>
              </div>
            </div>

            {/* Sale */}
            <div className="relative flex-1 bg-[#C2185B] flex flex-col items-center
              justify-center cursor-pointer hover:bg-[#ad1457] transition-colors gap-2">
              <p className="text-white text-[9px] tracking-[0.2em] uppercase">
                Archive Items
              </p>
              <p className="text-white text-4xl font-bold tracking-tight">
                SALE
              </p>
              <div className="mt-1 border border-white rounded-full px-4 py-1">
                <p className="text-white text-[9px] tracking-[0.15em] uppercase">
                  Up to 60% off
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

  )
}

export default BrowseByIntent