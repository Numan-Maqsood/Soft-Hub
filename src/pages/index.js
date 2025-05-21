import axios from "axios";
import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../Components/Header/Header";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Footer from "../Components/Footer/Footer";

// Aos animate

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Index({ HomeData }) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  return (
    <>
      <Head>
        <title>Soft Hub</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Banner Section */}
      <section className="BannerSection">
        <img className="w-full h-full absolute left-0 right-0 top-0 bottom-0 object-cover" src="BannerBg.png" alt="Banner Clouds" />
        <div className="container relative z-[9]">
          <div className="BannerContent relative" data-aos="fade-up" data-aos-duration="1500">
            <h1><span className="text-[#007DF5]">Delivering Digital</span> Transformation & E-learning </h1>
            <p className="text-lg font-semibold text-themeBlue mt-[20px] mb-[30px] lg:mb-[40px] xl:mb-[40px]">Founded in 2021, SoftHub is an innovative digital agency in Dubai, UAE. It excels in cutting-edge solutions and prioritizes client needs, leveraging creativity and tech expertise for diverse clients.</p>
            <Link className="btn" href="#.">Schedule a Demo</Link>
          </div>
        </div>
        <div className="container absolute left-0 right-0 bottom-40 Badges">
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
        {/* Partner's Section */}
        <section className="partnersLogosSection">
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
                    <img src="Sabis.png" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src="rhu.png" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src="UNICEF.png" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="PartnerLogo">
                    <img src="World_Health_Organization.png" />
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
          <h6 className="text-themeBlue mb-[6px]">Learn more About</h6>
          <h2 className="text-[#007AFC]">Our Service</h2>
          <div className="CardsWrapper">
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src="e-service.png" />
              </div>
              <div className="cardContent">
                <h5>E-Service</h5>
                <p>Successful government needs technology, user-friendly interfaces, and strong cybersecurity for citizens to easily access online services and build trust.</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src="e-service.png" />
              </div>
              <div className="cardContent">
                <h5>E-Service</h5>
                <p>Successful government needs technology, user-friendly interfaces, and strong cybersecurity for citizens to easily access online services and build trust.</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src="e-service.png" />
              </div>
              <div className="cardContent">
                <h5>E-Service</h5>
                <p>Successful government needs technology, user-friendly interfaces, and strong cybersecurity for citizens to easily access online services and build trust.</p>
              </div>
            </div>
            <div className="ServiceCard">
              <div className="cardicon">
                <img className="CardBg" src="imgBg.png" />
                <img src="e-service.png" />
              </div>
              <div className="cardContent">
                <h5>E-Service</h5>
                <p>Successful government needs technology, user-friendly interfaces, and strong cybersecurity for citizens to easily access online services and build trust.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Quality Section */}
      <div className="container">
        <div className="qualitySection bg-themeBlue rounded-[20px]">
          <div className="outerlayer rounded_layer relative">
            <Link className="LayerTag Left_Bottom" href="#.">ERP</Link>
            <div className="centerlayer rounded_layer relative">
              <div className="frontlayer rounded_layer relative">

              </div>
            </div>
            <Link className="LayerTag Right_Top" href="#.">ERP</Link>
            <Link className="LayerTag Right_Bottom" href="#.">ERP</Link>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="container">
        <section className="ServicesSection ClientsSection">
          <h6 className="text-themeBlue mb-[6px]">We Proud With</h6>
          <h2 className="text-[#007AFC]">What our clients say</h2>
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
                      <img src="Name.png" />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">Mohamed Ali</h6>
                        <p className="text-[#737373] font-normal text-[14px]">Marketing Manger </p>
                      </div>
                    </div>
                    <p className="customerReview text-[14px] font-normal text-[#313131] mt-3">Give your team the ability to quickly create, send, and track docs within an approval system that works for everyone. And will be very easy to work with appilo that workflow will work only for your benefit. From to quickly create, send, and track docs within an approval.</p>
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
                      <img src="Name.png" />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">Mohamed Ali</h6>
                        <p className="text-[#737373] font-normal text-[14px]">Marketing Manger </p>
                      </div>
                    </div>
                    <p className="customerReview text-[14px] font-normal text-[#313131] mt-3">Give your team the ability to quickly create, send, and track docs within an approval system that works for everyone. And will be very easy to work with appilo that workflow will work only for your benefit. From to quickly create, send, and track docs within an approval.</p>
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
                      <img src="Name.png" />
                      <div className="aboutbox">
                        <h6 className="text-[#007AFC] font-semibold text-[16px]">Mohamed Ali</h6>
                        <p className="text-[#737373] font-normal text-[14px]">Marketing Manger </p>
                      </div>
                    </div>
                    <p className="customerReview text-[14px] font-normal text-[#313131] mt-3">Give your team the ability to quickly create, send, and track docs within an approval system that works for everyone. And will be very easy to work with appilo that workflow will work only for your benefit. From to quickly create, send, and track docs within an approval.</p>
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
      <Footer />
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
