import Image from "next/image";
import Link from "next/link";
import React from "react";
const Nav = () => {
  return (
    <main className="h-20 w-[100%] font-sans bg-black/70 backdrop-blur-sm text-white flex bac justify-center items-center fixed z-10 top-0">
      <div className="w-[100%] flex justify-around items-center gap-20 ">
        <div className="font-bold  text-[25px]">
          <Link href="/" className="flex justify-center items-center">
          <Image className="" src='/logo.png' width={50} height={40}/>
          ReadRealm
          </Link>
        </div>
        <div className="font-semibold hidden md:flex justify-center items-center gap-10">
          <Link href="/discover">Discover</Link>
          <Link href="/discover">Trending</Link>
          <Link href="/discover">About</Link>
          
        </div>
        <div className="flex justify-center items-center gap-10 ">
          <Link href="/discover">SignIn</Link>
        </div>
      </div>
    </main>
  );
};

export default Nav;
