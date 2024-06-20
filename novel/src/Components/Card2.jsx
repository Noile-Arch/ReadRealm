import React from "react";

const Card2 = ({ novel }) => {
  return (
    <main className="md:h-[200px] lg:h-[220px] lg:w-[160px] md:w-[135px] h-[250px] w-[150px] pb-8 cursor-pointer shadow-md shadow-[#815eff]">
      <img src={novel.img} alt={novel.title} className="w-full h-[80%]" />
      <div className="py-2 flex flex-col justify-center items-center">
        <h1 className="text-[12px] lg:text-[14px] md:text-[12px]">{novel.title}</h1>
        <div
          className="mt-1 flex justify-center items-center pt-1 gap-3 md:gap-1 flex-wrap"
          key={novel.id}
        >
          {novel.genre.map((gen) => (
            <div className="px-2 py-1 bg-[#302a2a]  rounded-xl text-[9px] md:text-[9px]">
              {gen}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Card2;
