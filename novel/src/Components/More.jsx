import React from "react";

const More = () => {
  return (
    <main className="w-full h-auto py-10 bg-gradient-to-br from-[#000015] from-40% to-[#ad06aa] t0-50%">
      <div className="flex flex-col justify-center items-center gap-20">
        <section className="flex justify-between items-center gap-20 flex-wrap">
          <div className="w-[300px] rounded-lg h-[140px] p-2 shadow-lg shadow-[gold] bg-[#000000] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[40px]">42.5k</h1>
            <h2 className="font-bold text-[16px]">CREATORS</h2>
          </div>
          <div className="w-[300px] rounded-lg h-[140px] p-2 shadow-lg shadow-[gold] bg-[#000000] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[40px]">16.1k</h1>
            <h2 className="font-bold text-[16px]">STORIES SHARED</h2>
          </div>
          <div className="w-[300px] rounded-lg h-[140px] p-2 shadow-lg shadow-[gold] bg-[#000000] flex flex-col justify-center items-center">
            <h1 className="font-bold text-[40px]">8.9k</h1>
            <h2 className="font-bold text-[16px]">READERS</h2>
          </div>
        </section>
        <section className="flex justify-between items-center gap-20 flex-wrap ">
          <div className="w-[500px] h-[280px] bg-[black] rounded-3xl p-4 flex justify-between items-center gap-4 shadow-xl shadow-[#fa2258]">
            <div className="w-[60%] flex flex-col justify-center items-start gap-5 px-8 ">
              <h1 className="text-[20px] font-bold">
                Publish your stories and reach millions
              </h1>
              <button className="font-semibold bg-[#fa2258] px-5 py-2 rounded-3xl">
                Submit a story
              </button>
            </div>
            <img
              src="/control.jpg"
              alt=""
              className="w-[40%] h-[100%] rounded-[90px] bg-center bg-cover"
            />
          </div>
          <div className="w-[500px] h-[280px] bg-[#fa2258] rounded-3xl p-4 flex justify-between items-center gap-4 shadow-xl shadow-[#000000]">
            <div className="w-[60%] flex flex-col justify-center items-start gap-5 px-4">
              <h1 className="text-[20px] font-bold">
                Read stories on the go.
                <br />
                Download our app!
              </h1>
              <button className="font-semibold bg-[#000000] px-5 py-2 rounded-3xl">
                Get ReadRealm app
              </button>
            </div>
            <img
              src="/f1.jpg"
              alt=""
              className="w-[40%] h-[100%] rounded-[90px]"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default More;
