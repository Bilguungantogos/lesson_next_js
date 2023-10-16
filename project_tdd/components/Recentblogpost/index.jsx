import React from "react";
import Link from "next/link";
import { formatdate } from "@/utils/functions";
import { useEffect, useState } from "react";
import Image from "next/image";

const Recentblogpost = () => {
  useEffect(() => {
    fetchData1();
  }, []);
  const [isLoading, setIsLoading] = useState(true);
  const [recentblogposts, setRecentblogposts] = useState([]);
  const fetchData1 = async () => {
    const res1 = await fetch("https://dev.to/api/articles/latest?per_page=4");
    const data1 = await res1.json();
    setRecentblogposts(data1);
    setIsLoading(false);
  };

  return (
    <div>
      {!isLoading && (
        <div>
          <h2 className="text-[24px] max-lg:text-[20px] font-bold mx-8 mb-4 mt-[100px]">
            Recent blog posts
          </h2>
          <div className="flex flex-col ">
            <div className="lg:flex px-8 gap-8 w-full ">
              <Link
                href={"/blog/" + recentblogposts[0].id}
                className="w-[50%]  "
              >
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                    src={
                      recentblogposts[0].cover_image
                        ? recentblogposts[0].cover_image
                        : "/default.avif"
                    }
                  />
                  <p className="mt-8 text-[#97989F]">
                    {formatdate(recentblogposts[0].created_at)}
                  </p>
                  <h2 className="text-[24px] max-lg:text-[18px] font-semibold mt-3 ">
                    {recentblogposts[0].title}
                  </h2>
                  <p className="text-[16px] max-lg:text-[14px] mt-3 text-[#667085]">
                    {recentblogposts[0].description}
                  </p>
                </div>
              </Link>
              <div className="lg:w-[50%] max-lg:mt-5">
                <Link href={"/blog/" + recentblogposts[1].id}>
                  <div className="lg:flex mb-8 gap-3  h-[50%]">
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        recentblogposts[1].cover_image
                          ? recentblogposts[1].cover_image
                          : "/default.avif"
                      }
                      className="object-cover lg:w-[50%]  "
                    />
                    <div className="lg:w-[48%]">
                      <p className="text-[#97989F]">
                        {formatdate(recentblogposts[1].created_at)}
                      </p>
                      <h2 className="text-[18px]  font-semibold mt-3 truncate">
                        {recentblogposts[1].title}
                      </h2>
                      <p className="text-[16px] max-lg:text-[14px] text-[#667085]">
                        {recentblogposts[1].description}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={"/blog/" + recentblogposts[2].id}>
                  <div className="lg:flex gap-3 h-[50%]">
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        recentblogposts[2].cover_image
                          ? recentblogposts[2].cover_image
                          : "/default.avif"
                      }
                      className="object-cover lg:w-[50%] "
                    />
                    <div>
                      <p className="text-[#97989F]">
                        {formatdate(recentblogposts[2].created_at)}
                      </p>
                      <h2 className="text-[18px] font-semibold mt-3">
                        {recentblogposts[2].title}
                      </h2>
                      <p className="text-[16px] max-lg:text-[14px] text-[#667085]">
                        {recentblogposts[2].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link href={"/blog/" + recentblogposts[3].id}>
              <div className="lg:flex gap-8 px-8 my-[30px] mt-[100px] ">
                <Image
                  width={1000}
                  height={1000}
                  src={recentblogposts[3].cover_image}
                  className="lg:h-[246px] lg:w-[592px]"
                />
                <div>
                  <p className="text-[#97989F]">
                    {formatdate(recentblogposts[3].created_at)}
                  </p>
                  <h2 className="text-[24px] font-semibold mt-3">
                    {recentblogposts[3].title}
                  </h2>
                  <p className="text-[16px] max-lg:text-[14px] mt-3 text-[#667085]">
                    {recentblogposts[3].description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recentblogpost;

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/latest?per_page=4`);
  const blogs = await res.json();
  console.log("SERVER SIDE WORKING");
  return {
    props: { blogs },
  };
}
