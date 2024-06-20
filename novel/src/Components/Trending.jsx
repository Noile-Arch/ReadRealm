import React from "react";

const Trending = ({ novel }) => {
  return (
    <main className="md:h-[112px] lg:h-[115px] lg:w-[500px] md:w-[320px] h-[120px] sm:w-[500px] w-[340px]  min-w-[250px]  relative shadow-lg shadow-[#ff00c3] p-4">
      <div className="flex justify-start items-center gap-5 sm:gap-10 md:gap-[30px] pb-2 ">
        <h1 className="md:text-[12px]">{novel.id}</h1>
        <img
          src={novel.img}
          alt={novel.title}
          className="h-[90px] w-[80px] md:h-[80px] rounded-[4px] lg:h-[90px]"
        />
        <div className="fle flex-col justify-start items-start">
          <h1 className="md:text-[12px] lg:text-[14px] text-[12px]">{novel.title}</h1>
          <div
            className="mt-1 flex justify-start items-center gap-3 flex-wrap"
            key={novel.id}
          >
            {novel.genre.map((gen) => (
              <div
                className="px-2 py-1 bg-[#302a2a]  rounded-xl text-[12px] lg:text-[12px] md:text-[9px]"
                
              >
                {gen}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Trending;
