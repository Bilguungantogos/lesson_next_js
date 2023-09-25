import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([
    {
      title: "The impact of Technology",
      user: "Naraa",
      description: "",
      color: "blue",
    },
    {
      title: "How technology is Changing",
      user: "Saraa",
      description: "",
      color: "red",
    },
  ]);
  return (
    <main className={`flex min-h-screen flex-col items-center p-24 text-2xl`}>
      <h1 className="text-red-900 font-bold text-4xl mb-10">Use Effect</h1>
      <div className="flex gap-10">
        <Link href="/usestate" className="hover:scale-105 hover:text-gray-800">
          useState
        </Link>
        <Link href="/useeffect" className="hover:scale-105 hover:text-gray-800">
          useEffect
        </Link>
      </div>
      <div className="mt-20 ">
        {articles.map((articles) => {
          return <div className="border my-3 p-4">{articles.title}</div>;
        })}
      </div>
    </main>
  );
}
