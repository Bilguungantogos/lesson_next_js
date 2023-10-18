import React from "react";
import Link from "next/link";
import { formatdate } from "@/utils/functions";
import Image from "next/image";

const Recentblogpost = ({ latestblogs }) => {
  console.log(latestblogs, "working");
  return (
    <div>
      {
        <div>
          <h2 className="text-[24px] max-lg:text-[20px] font-bold mx-8 mb-4 mt-[100px]">
            Recent blog posts
          </h2>
          <div className="flex flex-col ">
            <div className="lg:flex px-8 gap-8 w-full ">
              <Link href={"/blog/" + latestblogs[0].id} className="w-[50%]  ">
                <div>
                  <Image
                    width={1000}
                    height={1000}
                    className="w-full h-full"
                    src={
                      latestblogs[0].cover_image
                        ? latestblogs[0].cover_image
                        : "/default.avif"
                    }
                  />
                  <p className="mt-8 text-[#97989F]">
                    {formatdate(latestblogs[0].created_at)}
                  </p>
                  <h2 className="text-[24px] max-lg:text-[18px] font-semibold mt-3 ">
                    {latestblogs[0].title}
                  </h2>
                  <p className="text-[16px] max-lg:text-[14px] mt-3 text-[#667085]">
                    {latestblogs[0].description}
                  </p>
                </div>
              </Link>
              <div className="lg:w-[50%] max-lg:mt-5">
                <Link href={"/blog/" + latestblogs[1].id}>
                  <div className="lg:flex mb-8 gap-3  h-[50%]">
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        latestblogs[1].cover_image
                          ? latestblogs[1].cover_image
                          : "/default.avif"
                      }
                      className="object-cover lg:w-[50%]  "
                    />
                    <div className="lg:w-[48%]">
                      <p className="text-[#97989F]">
                        {formatdate(latestblogs[1].created_at)}
                      </p>
                      <h2 className="text-[18px]  font-semibold mt-3 truncate">
                        {latestblogs[1].title}
                      </h2>
                      <p className="text-[16px] max-lg:text-[14px] text-[#667085]">
                        {latestblogs[1].description}
                      </p>
                    </div>
                  </div>
                </Link>
                <Link href={"/blog/" + latestblogs[2].id}>
                  <div className="lg:flex gap-3 h-[50%]">
                    <Image
                      width={1000}
                      height={1000}
                      src={
                        latestblogs[2].cover_image
                          ? latestblogs[2].cover_image
                          : "/default.avif"
                      }
                      className="object-cover lg:w-[50%] "
                    />
                    <div>
                      <p className="text-[#97989F]">
                        {formatdate(latestblogs[2].created_at)}
                      </p>
                      <h2 className="text-[18px] font-semibold mt-3">
                        {latestblogs[2].title}
                      </h2>
                      <p className="text-[16px] max-lg:text-[14px] text-[#667085]">
                        {latestblogs[2].description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <Link href={"/blog/" + latestblogs[3].id}>
              <div className="lg:flex gap-8 px-8 my-[30px] mt-[100px] ">
                <Image
                  width={1000}
                  height={1000}
                  src={latestblogs[3].cover_image}
                  className="lg:h-[246px] lg:w-[592px]"
                />
                <div>
                  <p className="text-[#97989F]">
                    {formatdate(latestblogs[3].created_at)}
                  </p>
                  <h2 className="text-[24px] font-semibold mt-3">
                    {latestblogs[3].title}
                  </h2>
                  <p className="text-[16px] max-lg:text-[14px] mt-3 text-[#667085]">
                    {latestblogs[3].description}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      }
    </div>
  );
};

export default Recentblogpost;

export async function getServerSideProps() {
  const res = await fetch(`https://dev.to/api/articles/latest?per_page=4`);
  const latestblogs = await res.json();
  console.log(latestblogs, "working");
  return {
    props: { latestblogs },
  };
}
