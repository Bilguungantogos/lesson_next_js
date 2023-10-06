import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Recentblogpost from "@/components/Recentblogpost";

export default function Home() {
  const [allblogposts, setAllblogposts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setAllblogposts(data);
  };
  return (
    <main className={`container mx-auto`}>
      <section>
        <Recentblogpost />
        <div className="mt-[100px]">
          <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
          <div className="lg:grid lg:grid-cols-3 gap-3 mx-4">
            {allblogposts &&
              allblogposts.map((blogpost) => {
                return <Card blogpost={blogpost} />;
              })}
          </div>
          <button className="flex py-3 px-5 m-auto mt-16 border-1 rounded-md bg-[#e5e6eb] hover:bg-[#f4f5ff]">
            Load More
          </button>
        </div>
      </section>
    </main>
  );
}
