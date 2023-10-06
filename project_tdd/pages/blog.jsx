import React from "react";
import Card from "@/components/Card";
import { useState } from "react";
import { useEffect } from "react";

const blog = () => {
  const [allblogposts, setAllblogposts] = useState([]);
  useEffect(() => {
    fetchData2();
  }, []);
  const fetchData2 = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=12");
    const data = await res.json();
    setAllblogposts(data);
  };
  return (
    <div className="container mx-auto ">
      <div className="mt-[100px]">
        <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
        <div className="lg:grid lg:grid-cols-3 gap-3 mx-4">
          {allblogposts &&
            allblogposts.map((blogpost) => {
              return <Card blogpost={blogpost} />;
            })}
        </div>
        <button className="flex py-3 px-5 m-auto mt-8 border-1 rounded-md bg-[#e5e6eb]">
          Load More
        </button>
      </div>
    </div>
  );
};

export default blog;
