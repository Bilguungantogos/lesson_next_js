import React from "react";
import Card from "@/components/Card";
import { useState } from "react";
import { useEffect } from "react";
import Loader from "@/components/Loader";

const blog = () => {
  const [allblogposts, setAllblogposts] = useState([]);
  const [pages, setPages] = useState(9);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData2();
  }, [pages]);

  function handleNext() {
    console.log("daraagiin huudas darlaa");
    setPages(pages + 6);
  }

  const fetchData2 = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
      const data = await res.json();
      setAllblogposts(data);
    } catch {
      setError("Алдаа гарлаа дахин оролдоно уу");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div>
      {isLoading && <Loader />}
      {error && (
        <h1 className="text-red-700 text-3xl text-center my-10">{error}</h1>
      )}
      {!isLoading && !error && (
        <div className="container mx-auto ">
          <div className="mt-[100px]">
            <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
            <div className="lg:grid lg:grid-cols-3 gap-3 mx-4">
              {allblogposts &&
                allblogposts.map((blogpost) => {
                  return <Card blogpost={blogpost} />;
                })}
            </div>
            <button
              onClick={handleNext}
              className="flex py-3 px-5 m-auto mt-8 border-1 rounded-md bg-[#e5e6eb]"
            >
              Load More
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default blog;
