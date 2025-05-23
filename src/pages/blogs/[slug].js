import axios from 'axios';
import React from 'react'

export async function getStaticPaths() {
    let allSlugs = [];
  
    try {
      const slugsResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts`
      );
  
      allSlugs = slugsResponse.data.map((post) => post.slug);
    } catch (error) {
      console.error("Error fetching slugs:", error);
    }
  
    const paths = allSlugs.map((slug) => ({ params: { slug } }));
  
    return {
      paths,
      fallback: "blocking",
    };
  }
  
  export async function getStaticProps({ params }) {
    let slugBlogsData = [];
  
    try {

      const projectResponse = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/posts/?slug=${params.slug}`
      );
      slugBlogsData = projectResponse.data[0];

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  
    return {
      props: {
        slugBlogsData,
      },
    };
  }
  

const blogdetail = ({slugBlogsData}) => {
  return (
    <div>{slugBlogsData.title.rendered}
    <img className="w-10 h-10" src={slugBlogsData.fimg_url} />
    </div>
  )
}

export default blogdetail