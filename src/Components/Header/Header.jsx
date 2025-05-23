import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

// Aos animate

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({HeaderfooterData}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    // Inside the Header component, just after useState:
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }

        // Clean-up when component unmounts
        return () => {
            document.body.classList.remove('menu-open');
        };
    }, [menuOpen]);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);



    return (
        <div className="container absolute w-full left-0 top-11 md:top-16 right-0 mx-auto z-10">
            <header className="bg-themeBlue text-white rounded-[64px]">
                <div className='flex items-center justify-between px-7 py-4 md:px-8'>
                    {/* Logo */}
                    <div className="Logo" data-aos="fade-in"  data-aos-duration="1500">
                        <Image src={HeaderfooterData.acf.header.logo_url} alt="Logo" width={190} height={44} />
                    </div>

                    <div className="navigation">

                        {/* Desktop Navigation */}
                        <nav className="hidden iPad:flex space-x-6">
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_one_url} className="">{HeaderfooterData.acf.header.navigation.item_one_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_two_url} className="">{HeaderfooterData.acf.header.navigation.item_two_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_three_url} className="">{HeaderfooterData.acf.header.navigation.item_three_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_four_url} className="">{HeaderfooterData.acf.header.navigation.item_four_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_five_url} className="">{HeaderfooterData.acf.header.navigation.item_five_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_six_url} className="">{HeaderfooterData.acf.header.navigation.item_six_text}</Link>
                        </nav>

                        {/* Hamburger Button (Mobile Only) */}
                        <div className="iPad:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white focus:outline-none block"
                                aria-label="Toggle Menu"
                            >
                                {/* Hamburger Icon */}
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div
                            className={`fixed top-0 left-0 h-full w-10/12 bg-themeBlue mobileMenu px-6 pt-20 z-50 transform transition-transform duration-300 ease-in-out iPad:hidden ${menuOpen ? 'translate-x-0' : '-translate-x-full'
                                }`}
                        >
                            {/* Close (X) button */}
                            <button
                                onClick={toggleMenu}
                                className="absolute top-4 right-4 text-white"
                                aria-label="Close Menu"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            {/* Menu Links */}
                            <div className="h-full">
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_one_url} className="">{HeaderfooterData.acf.header.navigation.item_one_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_two_url} className="">{HeaderfooterData.acf.header.navigation.item_two_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_three_url} className="">{HeaderfooterData.acf.header.navigation.item_three_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_four_url} className="">{HeaderfooterData.acf.header.navigation.item_four_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_five_url} className="">{HeaderfooterData.acf.header.navigation.item_five_text}</Link>
                            <Link data-aos="fade-in"  data-aos-duration="1500" href={HeaderfooterData.acf.header.navigation.item_six_url} className="">{HeaderfooterData.acf.header.navigation.item_six_text}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
