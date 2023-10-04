import { useEffect, useState } from "react";
import Card from "@/components/Card";
import Link from "next/link";
import { formatdate } from "@/utils/functions";

export default function Home() {
  const [allblogposts, setAllblogposts] = useState([]);
  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  const fetchData = async () => {
    const res = await fetch("https://dev.to/api/articles?per_page=9");
    const data = await res.json();
    setAllblogposts(data);
  };
  const [isLoading, setIsLoading] = useState(true);
  const [recentblogposts, setRecentblogposts] = useState([]);
  const fetchData1 = async () => {
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    setRecentblogposts(data1);
    setIsLoading(false);
  };
  console.log(recentblogposts, "recent");
  return (
    <main className={`container mx-auto`}>
      <section>
        {!isLoading && (
          <div>
            <h2 className="text-[24px] font-bold mx-8 mb-4 mt-[100px]">
              Recent blog posts
            </h2>
            <div className="flex flex-col ">
              <div className="flex px-8 gap-8 w-full overflow-hidden">
                <Link
                  href={"/blog/" + recentblogposts[0].id}
                  className="w-[50%]"
                >
                  <div>
                    <img
                      src={
                        recentblogposts[0].cover_image
                          ? recentblogposts[0].cover_image
                          : "/default.avif"
                      }
                    />
                    <p className="mt-8 text-[#97989F]">
                      {formatdate(recentblogposts[0].created_at)}
                    </p>
                    <h2 className="text-[24px] font-semibold mt-3 ">
                      {recentblogposts[0].title}
                    </h2>
                    <p className="text-[16px] mt-3 text-[#667085]">
                      {recentblogposts[0].description}
                    </p>
                  </div>
                </Link>
                <div className="w-[50%]">
                  <Link href={"/blog/" + recentblogposts[1].id}>
                    <div className="flex mb-8 gap-3 h-[50%] ">
                      <img
                        src={
                          recentblogposts[1].cover_image
                            ? recentblogposts[1].cover_image
                            : "/default.avif"
                        }
                        className="object-cover w-[50%] "
                      />
                      <div>
                        <p className="text-[#97989F]">
                          {formatdate(recentblogposts[1].created_at)}
                        </p>
                        <h2 className="text-[18px] font-semibold mt-3 truncate">
                          {recentblogposts[1].title}
                        </h2>
                        <p className="text-[16px] text-[#667085]">
                          {recentblogposts[1].description}
                        </p>
                      </div>
                    </div>
                  </Link>
                  <Link href={"/blog/" + recentblogposts[2].id}>
                    <div className="flex gap-3 h-[50%]">
                      <img
                        src={recentblogposts[2].cover_image}
                        className="object-cover w-[50%] "
                      />
                      <div>
                        <p className="text-[#97989F]">
                          {formatdate(recentblogposts[2].created_at)}
                        </p>
                        <h2 className="text-[18px] font-semibold mt-3">
                          {recentblogposts[2].title}
                        </h2>
                        <p className="text-[16px] text-[#667085]">
                          {recentblogposts[2].description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <Link href={"/blog/" + recentblogposts[3].id}>
                <div className="flex gap-8 px-8 my-[30px] mt-[100px] ">
                  <img
                    src={recentblogposts[3].cover_image}
                    className="h-[246px] w-[592px]"
                  />
                  <div>
                    <p className="text-[#97989F]">
                      {formatdate(recentblogposts[3].created_at)}
                    </p>
                    <h2 className="text-[24px] font-semibold mt-3">
                      {recentblogposts[3].title}
                    </h2>
                    <p className="text-[16px] mt-3 text-[#667085]">
                      {recentblogposts[3].description}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
        <div className="mt-[100px]">
          <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
          <div className="grid grid-cols-3 gap-3 mx-4">
            {allblogposts &&
              allblogposts.map((blogpost) => {
                return <Card blogpost={blogpost} />;
              })}
          </div>
          <button className="flex py-3 px-5 m-auto mt-8 border-1 rounded-md bg-[#e5e6eb]">
            Load More
          </button>
        </div>
      </section>
    </main>
  );
}
