import Link from 'next/link'
import React, { useEffect } from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

// Aos animate

import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = ({ HeaderfooterData }) => {

    useEffect(() => {
        AOS.init({
            duration: 1000, // animation duration in ms
            once: true,     // whether animation should happen only once
        });
    }, []);

    return (
        <>
            <section className='footer bg-themeBlue'>
                <div className='container overflow-hidden'>
                    <div className='footerwrapper'>
                        <div className='col LogoSection' data-aos="fade-right" data-aos-duration="1500">
                            <img src={HeaderfooterData.acf.footer.content_box.footer_logo_url} />
                            <div className='text-[14px] text-white my-7' dangerouslySetInnerHTML={{ __html: HeaderfooterData.acf.footer.content_box.footer_description }}></div>
                            <div className='flex flex-wrap items-center gap-5'>
                                <Link className='!text-[16px] btn !flex !py-[10px] !pr-[30px] gap-3 items-center text-white' href={HeaderfooterData.acf.footer.content_box.linkedin_url}><CiLinkedin /> <span>{HeaderfooterData.acf.footer.content_box.linkedin_button_text}</span></Link>
                                <Link className='!text-[16px] btn !flex !py-[10px] !pr-[30px] gap-3 items-center text-white' href={HeaderfooterData.acf.footer.content_box.instagram_url}><FaInstagram /> <span>{HeaderfooterData.acf.footer.content_box.instagram_button_text}</span></Link>
                            </div>
                        </div>
                        <div className='FooterMenuWrapper' data-aos="fade-left" data-aos-duration="1500">
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_one.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_one.item_text}</Link>
                                    </li>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_two.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_two.item_text}</Link>
                                    </li>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_three.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_three.item_text}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_four.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_four.item_text}</Link>
                                    </li>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_five.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_five.item_text}</Link>
                                    </li>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_six.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_six.item_text}</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_seven.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_seven.item_text}</Link>
                                    </li>
                                    <li>
                                        <Link href={HeaderfooterData.acf.footer.footer_navigation.item_eight.item_url}>{HeaderfooterData.acf.footer.footer_navigation.item_eight.item_text}</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>{HeaderfooterData.acf.footer.copyrights_text}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer