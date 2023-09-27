import { useEffect, useState } from "react";
import Card from "@/components/Card";

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
  const [recentblogposts, setRecentblogposts] = useState([]);
  useEffect(() => {
    fetchData1();
  }, []);
  const fetchData1 = async () => {
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    setRecentblogposts(data1);
  };
  console.log(recentblogposts);
  return (
    <main className={`container mx-auto`}>
      <section>
        <div>
          <h2 className="text-[24px] font-bold mx-8 mb-4 mt-[100px]">
            Recent blog posts
          </h2>
          <div className="flex flex-col">
            <div className="flex px-8 gap-8 item">
              <div>
                <img src={recentblogposts[0].cover_image} />
                <p className="mt-8 text-[#97989F]">
                  {recentblogposts[0].created_at}
                </p>
                <h2 className="text-[24px] font-semibold mt-3">
                  {recentblogposts[0].title}
                </h2>
                <p className="text-[16px] mt-3 text-[#667085]">
                  {recentblogposts[0].description}
                </p>
              </div>
              <div>
                <div className="flex mb-8 gap-3">
                  <img
                    src={recentblogposts[1].cover_image}
                    className="w-[320px] h-[200px]"
                  />
                  <div>
                    <p className="text-[#97989F]">
                      {recentblogposts[1].created_at}
                    </p>
                    <h2 className="text-[18px] font-semibold mt-3">
                      {recentblogposts[1].title}
                    </h2>
                    <p className="text-[16px] text-[#667085]">
                      {recentblogposts[1].description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <img
                    src={recentblogposts[2].cover_image}
                    className="w-[320px] h-[200px]"
                  />
                  <div>
                    <p className="text-[#97989F]">
                      {recentblogposts[2].created_at}
                    </p>
                    <h2 className="text-[18px] font-semibold mt-3">
                      {recentblogposts[2].title}
                    </h2>
                    <p className="text-[16px] text-[#667085]">
                      {recentblogposts[2].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-8 mx-8 my-[30px] mt-[100px] ">
              <img
                src={recentblogposts[2].cover_image}
                className="h-[246px] w-[592px]"
              />
              <div>
                <p className="text-[#97989F]">
                  {recentblogposts[3].created_at}
                </p>
                <h2 className="text-[24px] font-semibold mt-3">
                  {recentblogposts[3].title}
                </h2>
                <p className="text-[16px] mt-3 text-[#667085]">
                  {recentblogposts[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[100px]">
          <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
          <div className="grid grid-cols-3 gap-3 mx-4">
            {allblogposts &&
              allblogposts.map((allblogpost) => {
                return <Card allblogpost={allblogpost} />;
              })}
          </div>
        </div>
      </section>
    </main>
  );
}
