import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const location = useLocation(); // Get the current location

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    // Determine if the navbar should be dark based on the route or scroll position
    const isDarkNav = location.pathname === '/about' || location.pathname === '/gallery' || sticky;

    const handleClick = (e, sectionId) => {
        if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
            // Handle normal left click: scroll to the section
            e.preventDefault();
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`container ${isDarkNav ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className='logo' />
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li>
                    <a
                        href="/about"
                        onClick={(e) => handleClick(e, 'about')} // Pass the section ID to handleClick
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        About us
                    </a>
                </li>
                <li>
                    <a
                        href="/gallery"
                        onClick={(e) => handleClick(e, 'gallery')} // Pass the section ID to handleClick
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Campus
                    </a>
                </li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="Menu" className='menu-icon' onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
