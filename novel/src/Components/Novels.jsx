import React from "react";
import Card from "./Card";
import Trending from "./Trending";
import { trending } from "../Data/data.jsx";
import Category from "./Category";
const Novels = ({ novels }) => {
  return (
    <main className="w-full h-auto">
      <div className="py-10 bg-gradient-to-b from-[#11011c] from-10% to-transparent">
        <div className=" flex flex-col md:flex-row md:justify-start justify-center items-start gap-10 mx-auto md:mx-10 ">
          <div className="flex flex-col justify-center items-start md:mx-auto mx-[20px] gap-5 md:w-[50%]">
            <h1 className="text-left py-2 border-b-2 w-full border-[#ff00c3]">
              Weekl Spotlight
            </h1>
            <div className="flex flex-row justify-center items-center mx-auto gap-5 lg:pb-[40px] flex-wrap">
              {novels.map((novel) => (
                <Card novel={novel} key={novel.id} />
              ))}
            </div>
          </div>
          <div className="flex flex-col md:justify-start justify-center items-start md:mx-auto px-[20px] md:w-[50%] gap-5 w-full">
            <h1 className="text-left py-2 border-b-2 w- border-[#ff00c3] w-full">
              New & Trending
            </h1>
            <div className="flex flex-col md:justify-center justify-center items-center gap-5  w-full">
              <div className='flex flex-col justify-center items-center w-[100%] gap-5 md:gap-[20px]'>
                {trending.map((novel) => (
                  <Trending novel={novel} key={novel.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Novels;
