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
      <section className="BannerSection relative h-[100vh] iPad:h-[90vh] lg:h-[70vh] xl:h-screen flex items-center pb-9">
        <img className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover" src="BannerBg.png" alt="Banner Clouds" />
        <div className="container relative z-[9]">
          <div className="BannerContent h-max-w-[960px] md:max-w-[860px] lg:max-w-[960px] mx-auto text-center relative">
            <h1><span className="text-[#007DF5]">Delivering Digital</span> Transformation & E-learning </h1>
            <p className="text-lg font-semibold text-themeBlue mt-[20px] mb-[30px] lg:mb-[40px] xl:mb-[40px]">Founded in 2021, SoftHub is an innovative digital agency in Dubai, UAE. It excels in cutting-edge solutions and prioritizes client needs, leveraging creativity and tech expertise for diverse clients.</p>
            <Link className="btn" href="#.">Schedule a Demo</Link>
          </div>
        </div>
        <div className="container absolute left-0 right-0 bottom-20">
          <div className="flex justify-between items-center">
            <div className="Tags LeftTags">
              <ul>
                <li>
                  <Link href="#.">Development</Link>
                </li>
                <li>
                  <Link href="#.">Web</Link>
                </li>
                <li>
                  <Link href="#.">Mobile</Link>
                </li>
              </ul>
            </div>
            <div className="Tags RightTags">
              <ul>
                <li>
                  <Link href="#.">Data</Link>
                </li>
                <li>
                  <Link href="#.">UI/UX</Link>
                </li>
                <li>
                  <Link href="#.">ERP</Link>
                </li>
              </ul>
            </div>
          </div>
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
