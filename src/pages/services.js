import Head from 'next/head'
import React from 'react'
import Header from '../Components/Header/Header'
import axios from 'axios'
import Footer from '../Components/Footer/Footer'
import { SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Swiper from 'swiper'
import { FaArrowLeftLong } from "react-icons/fa6";

const services = ({ HeaderfooterData }) => {
    return (
        <>
            <Head>
                <title>Services</title>
                <link rel="icon" href="/Favicon.png" />
            </Head>

            {/* Header */}
            <Header HeaderfooterData={HeaderfooterData} />

            {/* Banner Section */}
            <section className="ServicesBanner h-screen pb-0 overflow-hidden">
                <div className="container text-center relative z-[9]">
                    <div className="BannerContent relative" data-aos="fade-up" data-aos-duration="1500">
                        <Link className='flex items-center mb-[10px] lg:mb-[20px] text-[16px] text-[#636363] gap-[10px] justify-center' href="/"><FaArrowLeftLong className='text-themeBlue' /> Back</Link>
                        <h1 className='text-themeBlue'>Our Services</h1>
                    </div>
                    <div className='ScreenImages flex items-end justify-center' data-aos="fade-up" data-aos-duration="1500">
                        <img className='UpperImage' src='/MainImage.png' />
                        <img className='underLayer' src='/RightImg.png' />
                    </div>
                </div>
            </section>


            {/* Services Sections */}
            <div className='container'>
                <section className='ServicesCards overflow-hidden'>
                    <div className='ServiceCard'>
                        <div className='iconBox' data-aos="fade-right" data-aos-duration="1500">
                            <img className='mb-[8px]' src='/headset.png' />
                            <h3 className='text-themeBlue'>E-Service</h3>
                        </div>
                        <div className='Desc' data-aos="fade-left" data-aos-duration="1500">Developing custom software tailored specifically for your business can significantly enhance your operational workflows and streamline processes, leading to increased efficiency. Additionally, by focusing on the unique needs of your customers, such software can facilitate improved interactions and overall experiences, fostering customer satisfaction and loyalty. This bespoke approach allows businesses to address specific challenges and capitalize on opportunities, ultimately driving growth and success in a competitive market. In this way, investing in custom software becomes not just a technical upgrade, but a strategic move toward achieving long-term business objectives.</div>
                    </div>
                    <div className='ServiceCard'>
                        <div className='iconBox' data-aos="fade-right" data-aos-duration="1500">
                            <img className='mb-[8px]' src='/headset.png' />
                            <h3 className='text-themeBlue'>E-Service</h3>
                        </div>
                        <div className='Desc' data-aos="fade-left" data-aos-duration="1500">Developing custom software tailored specifically for your business can significantly enhance your operational workflows and streamline processes, leading to increased efficiency. Additionally, by focusing on the unique needs of your customers, such software can facilitate improved interactions and overall experiences, fostering customer satisfaction and loyalty. This bespoke approach allows businesses to address specific challenges and capitalize on opportunities, ultimately driving growth and success in a competitive market. In this way, investing in custom software becomes not just a technical upgrade, but a strategic move toward achieving long-term business objectives.</div>
                    </div>
                    <div className='ServiceCard'>
                        <div className='iconBox' data-aos="fade-right" data-aos-duration="1500">
                            <img className='mb-[8px]' src='/headset.png' />
                            <h3 className='text-themeBlue'>E-Service</h3>
                        </div>
                        <div className='Desc' data-aos="fade-left" data-aos-duration="1500">Developing custom software tailored specifically for your business can significantly enhance your operational workflows and streamline processes, leading to increased efficiency. Additionally, by focusing on the unique needs of your customers, such software can facilitate improved interactions and overall experiences, fostering customer satisfaction and loyalty. This bespoke approach allows businesses to address specific challenges and capitalize on opportunities, ultimately driving growth and success in a competitive market. In this way, investing in custom software becomes not just a technical upgrade, but a strategic move toward achieving long-term business objectives.</div>
                    </div>
                    <div className='ServiceCard'>
                        <div className='iconBox' data-aos="fade-right" data-aos-duration="1500">
                            <img className='mb-[8px]' src='/headset.png' />
                            <h3 className='text-themeBlue'>E-Service</h3>
                        </div>
                        <div className='Desc' data-aos="fade-left" data-aos-duration="1500">Developing custom software tailored specifically for your business can significantly enhance your operational workflows and streamline processes, leading to increased efficiency. Additionally, by focusing on the unique needs of your customers, such software can facilitate improved interactions and overall experiences, fostering customer satisfaction and loyalty. This bespoke approach allows businesses to address specific challenges and capitalize on opportunities, ultimately driving growth and success in a competitive market. In this way, investing in custom software becomes not just a technical upgrade, but a strategic move toward achieving long-term business objectives.</div>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <Footer HeaderfooterData={HeaderfooterData} />
        </>
    )
}

export default services;

// Get Static Props
export async function getStaticProps() {
    let HeaderfooterData = {};

    try {
        const headerfooterresponse = await axios.get(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/wp/v2/pages/1668`
        );
        HeaderfooterData = headerfooterresponse.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    return {
        props: {
            HeaderfooterData
        },
        revalidate: 3600,
    };
}