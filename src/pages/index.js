import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Footer from "../Components/Footer/Footer";

// Aos animate

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index({ blogsData, allblogsData, HomeData, HeaderfooterData }) {

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Head>
        <title>SOFT HUB</title>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      {/* Header */}
      <Header HeaderfooterData={HeaderfooterData}/>

      {/* Banner Section */}
      <section className="BannerSection overflow-hidden">
        <img className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover" src={HomeData.acf.banner_section.banner_background_image_url} alt="Banner Clouds" />
        <div className="container relative z-[9]">
          <div className="BannerContent relative" data-aos="fade-up" data-aos-duration="1500">
            <h1><span className="text-[#007DF5]">{HomeData.acf.banner_section.banner_title_blue_text}</span> {HomeData.acf.banner_section.banner_title}</h1>
            {/* <p className="text-lg font-semibold text-themeBlue mt-[20px] mb-[30px] lg:mb-[40px] xl:mb-[40px]">Founded in 2021, SoftHub is an innovative digital agency in Dubai, UAE. It excels in cutting-edge solutions and prioritizes client needs, leveraging creativity and tech expertise for diverse clients.</p> */}
            <div className="text-lg font-semibold text-themeBlue mt-[20px] mb-[30px] lg:mb-[40px] xl:mb-[40px]" dangerouslySetInnerHTML={{ __html: HomeData.acf.banner_section.banner_description }}></div>
            <Link className="btn" href={HomeData.acf.banner_section.banner_button_url}>{HomeData.acf.banner_section.banner_button_text}</Link>
          </div>
        </div>
        <div className="container absolute left-0 right-0 bottom-40 Badges">
          <div className="flex justify-between items-center">
            <div className="Tags LeftTags" data-aos="fade-up" data-aos-duration="1500">
              <ul>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_left_badges.left_badge_one}</Link>
                </li>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_left_badges.left_badge_two}</Link>
                </li>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_left_badges.left_badge_three}</Link>
                </li>
              </ul>
            </div>
            <div className="Tags RightTags" data-aos="fade-up" data-aos-duration="1500">
              <ul>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_right_badges.right_badge_one}</Link>
                </li>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_right_badges.right_badge_two}</Link>
                </li>
                <li>
                  <Link href="#.">{HomeData.acf.banner_section.banner_right_badges.right_badge_three}</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Partner's Section */}
        <section className="partnersLogosSection" data-aos="fade-up" data-aos-duration="1500">
          <div className="container">
            <div className="imagesWrapper">
              <Swiper
                spaceBetween={20}
                slidesPerView={4}
                breakpoints={{
                  0: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 4,
                  },
                }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src={HomeData.acf.banner_section.partners_slider.image_one_url} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src={HomeData.acf.banner_section.partners_slider.image_two_url} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src={HomeData.acf.banner_section.partners_slider.image_three_url} />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src={HomeData.acf.banner_section.partners_slider.image_four_url} />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </section>
      </section>

      {/* Services Section */}
      <div className="container">
        <section className="ServicesSection">
          <h6 className="text-themeBlue mb-[6px]">{HomeData.acf.services_section.section_subheading}</h6>
          <h2 className="text-[#007AFC]">{HomeData.acf.services_section.section_title}</h2>
          <div className="CardsWrapper">
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src={HomeData.acf.services_section.services_cards.service_card_one.card_icon_url} />
              </div>
              <div className="cardContent">
                <h5>{HomeData.acf.services_section.services_cards.service_card_one.card_title}</h5>
                <p>{HomeData.acf.services_section.services_cards.service_card_one.card_description}</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src={HomeData.acf.services_section.services_cards.service_card_two.card_icon_url} />
              </div>
              <div className="cardContent">
                <h5>{HomeData.acf.services_section.services_cards.service_card_two.card_title}</h5>
                <p>{HomeData.acf.services_section.services_cards.service_card_two.card_description}</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src={HomeData.acf.services_section.services_cards.service_card_three.card_icon_url} />
              </div>
              <div className="cardContent">
                <h5>{HomeData.acf.services_section.services_cards.service_card_three.card_title}</h5>
                <p>{HomeData.acf.services_section.services_cards.service_card_three.card_description}</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src={HomeData.acf.services_section.services_cards.service_card_four.card_icon_url} />
              </div>
              <div className="cardContent">
                <h5>{HomeData.acf.services_section.services_cards.service_card_four.card_title}</h5>
                <p>{HomeData.acf.services_section.services_cards.service_card_four.card_description}</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Quality Section */}
      <div className="container">
        <div className="qualitySection bg-themeBlue rounded-[20px]">
          <div className="outerlayer rounded_layer relative">
            <Link className="LayerTag Left_Bottom" href="#.">{HomeData.acf.layers_section.outer_layer.left_badge}</Link>
            <div className="centerlayer rounded_layer relative">
              <Link className="LayerTag Left_Top !bg-[#002B4A] !text-white" href="#.">{HomeData.acf.layers_section.center_layer.left_top_badge}</Link>
              <Link className="LayerTag Left_Bottom !bg-[#6DE4DF]" href="#.">{HomeData.acf.layers_section.center_layer.left_bottom_badge}</Link>
              <div className="frontlayer flex items-start justify-center rounded_layer relative">
                <Link className="LayerTag Left_Top" href="#.">{HomeData.acf.layers_section.inner_layer.left_top_badge}</Link>
                <div className="innercontent text-center">
                  <h6 className="text-white mb-[6px]">{HomeData.acf.layers_section.section_content.section_subheading}</h6>
                  <h2 className="text-themeSeaGreen">{HomeData.acf.layers_section.section_content.section_title}</h2>
                </div>
                <Link className="LayerTag Right_Top" href="#.">{HomeData.acf.layers_section.inner_layer.right_top_badge}</Link>
                <Link className="LayerTag Right_Bottom" href="#.">{HomeData.acf.layers_section.inner_layer.right_bottom_badge}</Link>
              </div>
              <Link className="LayerTag right_mid" href="#.">{HomeData.acf.layers_section.center_layer.right_center_badge}</Link>
            </div>
            <Link className="LayerTag Right_Top" href="#.">{HomeData.acf.layers_section.outer_layer.right_top_badge}</Link>
            <Link className="LayerTag Right_Bottom" href="#.">{HomeData.acf.layers_section.outer_layer.right_bottom_badge}</Link>
          </div>
        </div>
      </div>


      {/* Blogs Section */}
      <div className="container">
        <div className=" Blogs_Section">
          <h6 className="text-themeBlue mb-[6px] text-center">{HomeData.acf.blogs_section.section_subheading}</h6>
          <h2 className="text-[#007AFC] text-center">{HomeData.acf.blogs_section.section_title}</h2>
          <div className="ContentWrap">
            <ul className="BlogWrapper">
              {allblogsData.slice(0, 2).map((blog, i) => (
                <li key={i} className="text-black">
                  <Link className="Blog" href={`/blogs/${blog.slug}`}>
                    <div className="blogImage">
                      <img className="rounded-[10px]" src={blog.fimg_url} alt={blog.title?.rendered} />
                    </div>
                    <div className="BlogContent">
                      <h5 className="text-themeBlue font-semibold">{blog.title?.rendered}</h5>
                      <p className="text-[#535353] text-base">{blog.acf.content?.blog_description}</p>
                      <span className="text-themeBlue underline font-semibold">Read More</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Additional Blog Titles */}
            <div className="TopicBox">
              <h4 className="">{HomeData.acf.blogs_section.topic_heading}</h4>
              <ul className="">
                {allblogsData.slice(2).map((blog, i) => (
                  <li
                    key={i}
                    className={`${(i % 2 === 1) ? '!bg-[#97BEFF] !text-themeBlue' : ''} px-4 py-2 rounded`}
                  >
                    <Link href={`/blogs/${blog.slug}`}>
                      {blog.title?.rendered}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>

          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="container">
        <section className="ServicesSection ClientsSection">
          <h6 className="text-themeBlue mb-[6px]">{HomeData.acf.clients_section.section_sub_heading}</h6>
          <h2 className="text-[#007AFC]">{HomeData.acf.clients_section.section_heading}</h2>
          <div className="CardsWrapper">
            <Swiper
              spaceBetween={60}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="ClientCard bg-themeBlue relative">
                  <div className="topImg">
                    <img src="topimg.png" />
                  </div>
                  <div className="Review text-left">
                    <div className="clientdetail flex items-center gap-2">
                      <img src={HomeData.acf.clients_section.review_one.client_image} />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">{HomeData.acf.clients_section.review_one.client_name}</h6>
                        <p className="text-[#737373] font-normal text-[14px]">{HomeData.acf.clients_section.review_one.client_designation}</p>
                      </div>
                    </div>
                  <div className="customerReview text-[14px] font-normal text-[#313131] mt-3" dangerouslySetInnerHTML={{ __html: HomeData.acf.clients_section.review_one.client_review }}></div>
                  </div>
                  <div className="bottomImg absolute bottom-4">
                    <img src="bottomlightblue.png" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ClientCard bg-themeBlue relative">
                  <div className="topImg">
                    <img src="topimg.png" />
                  </div>
                  <div className="Review text-left">
                    <div className="clientdetail flex items-center gap-2">
                      <img src={HomeData.acf.clients_section.review_two.client_image} />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">{HomeData.acf.clients_section.review_two.client_name}</h6>
                        <p className="text-[#737373] font-normal text-[14px]">{HomeData.acf.clients_section.review_two.client_designation}</p>
                      </div>
                    </div>
                  <div className="customerReview text-[14px] font-normal text-[#313131] mt-3" dangerouslySetInnerHTML={{ __html: HomeData.acf.clients_section.review_two.client_review }}></div>
                  </div>
                  <div className="bottomImg absolute bottom-4">
                    <img src="bottomBlue.png" />
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="ClientCard bg-themeBlue relative">
                  <div className="topImg">
                    <img src="topimg.png" />
                  </div>
                  <div className="Review text-left">
                    <div className="clientdetail flex items-center gap-2">
                      <img src={HomeData.acf.clients_section.review_three.client_image} />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">{HomeData.acf.clients_section.review_three.client_name}</h6>
                        <p className="text-[#737373] font-normal text-[14px]">{HomeData.acf.clients_section.review_three.client_designation}</p>
                      </div>
                    </div>
                  <div className="customerReview text-[14px] font-normal text-[#313131] mt-3" dangerouslySetInnerHTML={{ __html: HomeData.acf.clients_section.review_three.client_review }}></div>
                  </div>
                  <div className="bottomImg absolute bottom-4">
                    <img src="bottomlightblue.png" />
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </div>


      {/* Footer */}
      <Footer HeaderfooterData={HeaderfooterData} />
    </>
  );
}

// Get Static Props
export async function getStaticProps() {
  let blogsData = {};
  let allblogsData = [];
  let HomeData = {};
  let HeaderfooterData = {};

  try {
    const homeresponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/11`
    );
    HomeData = homeresponse.data;


    const headerfooterresponse = await axios.get(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/1668`
    );
    HeaderfooterData = headerfooterresponse.data;

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
      HeaderfooterData,
      HomeData
    },
    revalidate: 3600,
  };
}

