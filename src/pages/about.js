import Head from 'next/head'
import React from 'react'
import Header from '../Components/Header/Header'
import axios from 'axios'
import Footer from '../Components/Footer/Footer'
import Link from 'next/link'
import { FaArrowLeftLong } from "react-icons/fa6";

const about = ({ HeaderfooterData }) => {
    return (
        <>
            <Head>
                <title>About Us</title>
                <link rel="icon" href="/Favicon.png" />
            </Head>

            {/* Header */}
            <Header HeaderfooterData={HeaderfooterData} />

            {/* Banner Section */}
            <section className="ServicesBanner h-screen pb-0 overflow-hidden">
                <div className="container text-center relative z-[9]">
                    <div className="BannerContent relative" data-aos="fade-up" data-aos-duration="1500">
                        <Link className='flex items-center mb-[10px] lg:mb-[20px] text-[16px] text-[#636363] gap-[10px] justify-center' href="/"><FaArrowLeftLong className='text-themeBlue' /> Back</Link>
                        <h1 className='text-themeBlue'>About Us</h1>
                    </div>
                    <div className='ScreenImages flex items-end justify-center' data-aos="fade-up" data-aos-duration="1500">
                        <img className='UpperImage' src='/MainImage.png' />
                        <img className='underLayer' src='/RightImg.png' />
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <div className='container'>
                <section className='AboutSetion text-center overflow-hidden'>
                    <h6 className="text-themeBlue mb-[6px]" data-aos="fade-down" data-aos-duration="1500">Learn more About</h6>
                    <h2 className="text-[#007AFC] font-bold" data-aos="fade-down" data-aos-duration="1500">Unveiling our identity vision and Value</h2>
                    <div className='AboutContent' data-aos="fade-down" data-aos-duration="1500">
                        <p>At Softhub, we are a passionate team of software developers, designers, and innovators based in the heart of the UAE. Since our founding in 2021, we’ve been committed to delivering custom software solutions that empower businesses, streamline operations, and enhance digital experiences.</p>
                        <p>We understand that every company is unique, and thats why we take a personalised approach to each project. Whether youre a startup looking to build your first app or an established enterprise seeking to optimise your existing systems, we work closely with you to create tailored solutions that meet your specific needs.</p>
                    </div>
                </section>
            </div>

            {/* IconBoxes Section */}
            <div className='container overflow-hidden z-10'>
                <section className='IconBoxSection'>
                    <div className='IconsWrapper'>
                        <div className='IconBox' data-aos="fade-down" data-aos-duration="1500">
                            <img src='/shield-check.png' />
                            <h4>Safety</h4>
                        </div>
                        <div className='IconBox' data-aos="fade-down" data-aos-duration="2000">
                            <img src='/shield-check.png' />
                            <h4>Safety</h4>
                        </div>
                    </div>
                    <div className='IconsWrapper underIconsWrapper'>
                        <div className='IconBox' data-aos="fade-up" data-aos-duration="2500">
                            <img src='/shield-check.png' />
                            <h4>Safety</h4>
                        </div>
                        <div className='IconBox' data-aos="fade-up" data-aos-duration="3000">
                            <img src='/shield-check.png' />
                            <h4>Safety</h4>
                        </div>
                    </div>
                </section>
            </div>

            {/* Mission And Vision Section */}
            <div className='container'>
                <section className='VisionSection relative z-[-1]'>
                    <div className='ContentWrapper overflow-hidden'>
                        <div className='ContentBox' data-aos="fade-right" data-aos-duration="1500">
                            <h3 className='text-[#007AFC]'>Mission</h3>
                            <p>Our mission is to empower businesses with innovative software solutions that meet their needs. We provide customized digital products to streamline operations and support growth. Through collaboration and integrity, we deliver solutions that keep clients ahead in the digital landscape.</p>
                        </div>
                        <div className='ContentBox' data-aos="fade-left" data-aos-duration="1500">
                            <h3 className='text-[#007AFC]'>Vision</h3>
                            <p>Our mission is to empower businesses with innovative software solutions that meet their needs. We provide customized digital products to streamline operations and support growth. Through collaboration and integrity, we deliver solutions that keep clients ahead in the digital landscape.</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Choose us Section */}
            <div className='container'>
                <section className='ChooseUs text-center py-[80px] relative'>
                    <h2 className="text-[#007AFC] font-bold" data-aos="fade-down" data-aos-duration="1500">Why Choose Us</h2>
                    <div className='ChooseUsCards'>
                        <img data-aos="fade-in" data-aos-duration="1500" className='w-full h-full curveImage' src='/CurveLine.svg' />
                        <div className="ChooseCard text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="cardicon">
                                <img className="CardBg" src="imgBg.png" />
                                <h4>1</h4>
                            </div>
                            <div className="cardContent">
                                <h5 className='text-themeBlue my-[15px] mb-[10px]'>Customer-Centric Approach</h5>
                                <p className='text-[#747474] text-base'>We prioritize your needs, delivering solutions that not only meet but exceed expectations.</p>
                            </div>
                        </div>
                        <div className="ChooseCard mt-[-200px] text-center" data-aos="fade-down" data-aos-duration="1500">
                            <div className="cardContent">
                                <h5 className='text-themeBlue my-[15px] mb-[10px]'>End-to-End Support</h5>
                                <p className='text-[#747474] text-base'>From initial consultation to ongoing maintenance, we provide full-service support throughout the entire software development lifecycle.</p>
                            </div>
                            <div className="cardicon">
                                <img className="CardBg" src="imgBg.png" />
                                <h4>2</h4>
                            </div>
                        </div>
                        <div className="ChooseCard text-center" data-aos="fade-up" data-aos-duration="1500">
                            <div className="cardicon">
                                <img className="CardBg" src="imgBg.png" />
                                <h4>3</h4>
                            </div>
                            <div className="cardContent">
                                <h5 className='text-themeBlue my-[15px] mb-[10px]'>Tailored Solutions</h5>
                                <p className='text-[#747474] text-base'>We believe that every business is different, and we provide customized software solutions that fit your unique requirements.</p>
                            </div>
                        </div>
                        <div className="ChooseCard text-center" data-aos="fade-down" data-aos-duration="1500">
                            <div className="cardContent">
                                <h5 className='text-themeBlue my-[15px] mb-[10px]'>Expertise and Experience</h5>
                                <p className='text-[#747474] text-base'>Our team has years of experience across various industries, ensuring that you receive high-quality, reliable products.</p>
                            </div>
                            <div className="cardicon">
                                <img className="CardBg" src="imgBg.png" />
                                <h4>4</h4>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


            {/* Footer */}
            <Footer HeaderfooterData={HeaderfooterData} />
        </>
    )
}

export default about;

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