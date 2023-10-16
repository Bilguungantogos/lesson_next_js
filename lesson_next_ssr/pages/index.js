import Card from "@/components/Card";
import { useRouter } from "next/router";

export default function Home({ blogs, page }) {
  const router = useRouter();

  return (
    <main className={`container mx-auto`}>
      <section>
        <>
          <div className="mt-[100px]">
            <h2 className="text-[24px] font-bold mx-4 mb-8 ">All blog post</h2>
            <div className="lg:grid lg:grid-cols-3 gap-3 mx-4">
              {blogs.map((blogpost) => {
                return <Card blogpost={blogpost} />;
              })}
            </div>
            <button
              onClick={() => {
                const pg = Number(page) + 3;
                router.replace("?page=" + pg);
              }}
              className="flex py-3 px-5 m-auto mt-16 border-1 rounded-md bg-[#e5e6eb] hover:bg-[#f4f5ff]"
            >
              Load More
            </button>
          </div>
        </>
      </section>
    </main>
  );
}
export async function getServerSideProps(context) {
  const { page } = context.query;
  const res = await fetch(`https://dev.to/api/articles?per_page=${page || 9}`);
  const blogs = await res.json();
  console.log("SERVER SIDE WORKING");
  return {
    props: {
      blogs,
      page,
    },
  };
}
