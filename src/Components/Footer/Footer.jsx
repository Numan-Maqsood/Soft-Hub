import Link from 'next/link'
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <section className='footer bg-themeBlue'>
                <div className='container'>
                    <div className='footerwrapper'>
                        <div className='col LogoSection'>
                            <img src='Logo.svg' />
                            <p className='text-[14px] text-white my-7'>Founded in 2021, SoftHub is an innovative digital agency in Dubai, UAE. It excels in cutting-edge solutions and prioritizes client needs, leveraging creativity and tech expertise for diverse clients.</p>
                            <div className='flex flex-wrap items-center gap-5'>
                                <Link className='!text-[16px] btn !flex !py-[10px] !pr-[30px] gap-3 items-center text-white' href=""><CiLinkedin /> <span>Softhub it</span></Link>
                                <Link className='!text-[16px] btn !flex !py-[10px] !pr-[30px] gap-3 items-center text-white' href=""><FaInstagram /> <span>Softhub it</span></Link>
                            </div>
                        </div>
                        <div className='FooterMenuWrapper'>
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href="/">FAQ</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Terms & Condition</Link>
                                    </li>
                                    <li>
                                        <Link href="/services">Contact us </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className='col footerMenu'>
                                <ul>
                                    <li>
                                        <Link href="/">Request Demo</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">Blogs</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>All Copy rights reserved for softhub</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer