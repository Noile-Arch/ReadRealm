import React from "react";
import Card2 from "./Card2";

const Category = ({ novels }) => {
  return (
    <main className="w-[100%] min-h-screen bg-gradient-to-b from-transparent from-10% to-[#06041e] t0-20% pt-[100px] pb-10 px-20">
      <div className=" flex w-full justify-center items-center flex-col">
        <div className="flex w-full mx-auto justify-around items-center">
          <ul className="flex justify-center items-center gap-10">
            <li>Recommended for You</li>
            <li>Popular</li>
            <li>Originals</li>
            <li>What's New</li>
          </ul>
          <div className="flex justify-center items-center gap-5">
            <label>Sort By</label>
            <select className="w-[auto] bg-black/70 px-2 py-1" defaultValue={"recent"} id="">
              <option value="recent" >
                Recently Updated
              </option>
              <option value="new">Latest</option>
            </select>
          </div>
        </div>
        <div className=" w-[100%] h-[100%]">
          <div className=" w-[100%] h-[100%] flex flex-col justify-center items-center  ">
            <div className=" w-[100%] flex justify-start items-center flex-wrap gap-[20px] mt-[10px]">
            {novels.map((novel) => (
              <Card2 novel={novel} key={novel.id} />
            ))}
            </div>
            <div className=" w-[100%] flex justify-start items-center flex-wrap gap-[20px] mt-10">
            {novels.map((novel) => (
              <Card2 novel={novel} key={novel.id} />
            ))}
            </div>
            <div className=" w-[100%] flex justify-start items-center flex-wrap gap-[20px] mt-10">
            {novels.map((novel) => (
              <Card2 novel={novel} key={novel.id} />
            ))}
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Category;
