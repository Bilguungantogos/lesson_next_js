import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

const BlogDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blogDetailData, setDetailData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const getBlogDetail = async () => {
    const res = await fetch(`https://dev.to/api/articles/${id}`);
    const data = await res.json();
    console.log(data);
    setDetailData(data);
    setIsLoading(false);
  };
  useEffect(() => {
    getBlogDetail();
  }, []);
  return (
    <div className="container max-w-4xl bg-slate-400 mx-auto ">
      {!isLoading && (
        <div>
          <>
            <div>
              <h1 className="text-4xl font-semibold text-[#181A2A] text-center">
                {blogDetailData?.title}
              </h1>
              <div className="flex items-center mt-5 gap-5">
                <div className="flex items-center">
                  <img
                    className="w-7 h-7 rounded-full"
                    src={blogDetailData?.user?.profile_image}
                    alt=""
                  />
                  <h4 className="text-lg text-gray-500">
                    {blogDetailData?.user?.name}
                  </h4>
                </div>
                <p className="text-lg text-gray-500">
                  {moment(blogDetailData?.created_at).format("LL")}
                </p>
              </div>
            </div>
            <div className="mt-8">
              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: blogDetailData.body_html }}
              ></div>
            </div>
          </>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
