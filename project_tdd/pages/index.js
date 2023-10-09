import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Recentblogpost from "@/components/Recentblogpost";
import { BsTypeH1 } from "react-icons/bs";
import Loader from "@/components/Loader";

export default function Home() {
  const [allblogposts, setAllblogposts] = useState([]);
  const [pages, setPages] = useState(9);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [pages]);
  const fetchData = async () => {
    try {
      const res = await fetch(`https://dev.to/api/articles?per_page=${pages}`);
      const data = await res.json();
      setAllblogposts(data);
    } catch (err) {
      setError("Алдаа гарлаа дахин оролдоно уу");
    } finally {
      setIsLoading(false);
    }
  };
  function handleNext() {
    setPages(pages + 6);
  }
  return (
    <main className={`container mx-auto`}>
      <section>
        {isLoading && <Loader />}
        {error && (
          <h1 className="text-red-700 text-3xl text-center my-10">{error}</h1>
        )}
        {!isLoading && !error && (
          <>
            <Recentblogpost />
            <div className="mt-[100px]">
              <h2 className="text-[24px] font-bold mx-4 mb-8 ">
                All blog post
              </h2>
              <div className="lg:grid lg:grid-cols-3 gap-3 mx-4">
                {allblogposts &&
                  allblogposts.map((blogpost) => {
                    return <Card blogpost={blogpost} />;
                  })}
              </div>
              <button
                onClick={handleNext}
                className="flex py-3 px-5 m-auto mt-16 border-1 rounded-md bg-[#e5e6eb] hover:bg-[#f4f5ff]"
              >
                Load More
              </button>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
