import axios from "axios";
import Head from "next/head";
import React from "react";
import Header from "../Components/Header/Header";
import Link from "next/link";

export default function Index({ HomeData }) {
  console.log(HomeData, "HomeData");

  return (
    <>
      <Head>
        <title>Soft Hub</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Home Page */}
      <section className="relative h-screen flex items-center">
        <img className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover" src="BannerBg.png" alt="Banner Clouds" />
        <div className="BannerContent max-w-[960px] mx-auto text-center relative">
          <h1><span className="text-themeSky">Delivering Digital</span> Transformation & E-learning </h1>
          <p className="text-[18px] font-semibold text-themeBlue mt-[20px] mb-[40px]">Founded in 2021, SoftHub is an innovative digital agency in Dubai, UAE. It excels in cutting-edge solutions and prioritizes client needs, leveraging creativity and tech expertise for diverse clients.</p>
          <Link className="btn" href="#.">Schedule a Demo</Link>
        </div>
      </section>
    </>
  );
}

// Get Static Props
export async function getStaticProps() {
  let HomeData = {};

  try {
    const homeresponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/92`
    );
    HomeData = homeresponse.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      HomeData,
    },
    revalidate: 3600,
  };
}
