import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const Blogs = ({ blogsData, allblogsData }) => {

  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    "online blood bank project php",
    "android spy camera",
    "graphical password to avoid shoulder surfing",
  ];

  const filteredBlogs = selectedCategory
    ? allblogsData.filter(
        (blog) =>
          blog.acf.content?.blog_category === selectedCategory
      )
    : allblogsData; 

  return (
  
       <div>
      {/* Category Buttons */}
      <div className="flex gap-2 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded ${
              selectedCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blogs List */}
      <ul className="space-y-4">
        {filteredBlogs.map((blog, i) => (
          <Link href={`/blogs/${blog.slug}`} key={i}>
            <li className="text-black border p-4 rounded shadow-sm hover:shadow-md">
              <h5 className="text-lg font-semibold">
                {blog.title?.rendered}
              </h5>
              <p>{blog.acf.content?.blog_description}</p>
              <p className="font-bold">
                Category: {blog.acf.content?.blog_category}
              </p>
              <img className="w-10 h-10" src={blog.fimg_url} />
            </li>
          </Link>
        ))}
      </ul>
    </div>
    
  );
};

// Get Static Props
// New Structure
export async function getStaticProps() {
  let blogsData = {};
  let allblogsData = [];

  try {
    const projectsResponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/1022`
    );
    blogsData = projectsResponse.data;

    const allProjectsResponse =
      projectsResponse.acf?.all_posts_container.blog_posts || [];
    const allProjectsIds = allProjectsResponse.map((post) => post.ID).join(",");
    const allProjectsIdsRes = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts?include=${allProjectsIds}`
    );
    allblogsData = allProjectsIdsRes.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      blogsData,
      allblogsData,
    },
    revalidate: 3600,
  };
}

export default Blogs;
