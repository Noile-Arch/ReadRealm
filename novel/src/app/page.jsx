import Hero from "@/Components/Hero";
import Link from "next/link";
import { novels } from "../Data/data.jsx";
import Novels from "@/Components/Novels.jsx";
import Category from "@/Components/Category.jsx";
import More from "@/Components/More.jsx";
export default function Home() {
  return (
    <main>
      <Hero />
      <Novels novels={novels} />
      <div className="">
        <Category novels={novels}/>
      </div>
      <div>
        <More/>
      </div>
    </main>
  );
}
