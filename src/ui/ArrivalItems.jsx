import NewArrival from "./NewArrival";

function ArrivalItems() {
  return (
    <div className=" h-[50rem] md:h-[35rem] grid grid-cols-4 grid-rows-4 md:grid-rows-2  gap-2 md:gap-6 ">
      <div className=" group relative col-start-1 col-span-full md:col-span-2 row-start-1 row-span-2 overflow-hidden">
        <NewArrival
          title="playstation 5"
          description="Black and White version of the PS5 coming out on sale."
        />

        <img
          src="/ps5.jpg"
          alt="ps"
          loading="lazy"
          className="group-hover:blur-sm object-cover w-full hover:scale-110 transition-all  h-full grayscale"
        />
      </div>
      <div className="relative group col-start-1 col-span-full md:col-start-3 md:col-span-2 row-start-3  row-span-1 md:row-span-1 bg-slate-300 overflow-hidden">
        <NewArrival
          title="Women’s Collections"
          description="Featured woman collections that give you another vibe.."
        />
        <img
          loading="lazy"
          src="/clothes.jpg"
          alt="clothes"
          className="object-cover group-hover:blur-sm w-full hover:scale-110 transition-all  h-full  "
        />
      </div>
      <div className="relative group col-start-1 md:col-start-3 col-span-2 md:col-span-1 row-start-4 md:row-start-2 row-span-1 bg-slate-300 overflow-hidden">
        <NewArrival title="Speakers" description="Amazon wireless speakers" />
        <img
          loading="lazy"
          src="/speaker.jpg"
          alt="ps"
          className="group-hover:blur-sm object-cover hover:scale-110 transition-all w-full  h-full grayscale"
        />
      </div>
      <div className="relative group col-start-3 md:col-start-4 col-span-2 md:col-span-1 row-start-4 md:row-start-2 row-span-1 bg-slate-300 overflow-hidden">
        <NewArrival title="Perfume" description="gucci intense oud edp" />
        <img
          loading="lazy"
          src="/perfume.jpg"
          alt="perfume"
          className="group-hover:blur-sm object-cover hover:scale-110 transition-all w-full  h-full grayscale"
        />
      </div>
    </div>
  );
}

export default ArrivalItems;
