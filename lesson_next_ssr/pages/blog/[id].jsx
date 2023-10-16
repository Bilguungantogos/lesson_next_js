import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import moment from "moment";

const BlogDetail = ({ article }) => {
  return (
    <div className="container max-w-4xl mx-auto ">
      <div>
        <div>
          <h1 className="text-4xl font-semibold text-[#181A2A]">
            {article?.title}
          </h1>
          <div className="flex items-center mt-5 gap-5 text-[#696A75]">
            <div className="flex items-center gap-2">
              <img
                className="w-7 h-7 rounded-full "
                src={article?.user?.profile_image}
                alt=""
              />
              <h4 className="text-lg text-gray-500">{article?.user?.name}</h4>
            </div>
            <p className="text-lg text-gray-500">
              {moment(article?.created_at).format("LL")}
            </p>
          </div>
        </div>
        <div className="mt-8">
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  const article = await res.json();
  return {
    props: { article },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`https://dev.to/api/articles?per_page=5`);
  const articles = await res.json();
  const ids = articles.map((article) => {
    return article.id;
  });

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: "blocking",
  };
}
