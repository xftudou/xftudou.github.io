import React, { useRef, useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navRef = useRef(null);
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

    const moveSlider = (target) => {
        if (!navRef.current || !target) return;
        const navRect = navRef.current.getBoundingClientRect();
        const linkRect = target.getBoundingClientRect();
        setSliderStyle({
            left: linkRect.left - navRect.left,
            width: linkRect.width,
        });
    };

    const handleMouseEnter = (e) => moveSlider(e.currentTarget);
    const handleClick = (e) => {
        moveSlider(e.currentTarget);
        setIsOpen(false);
    };

    const location = useLocation();
    useEffect(() => {
        const activeLink = navRef.current.querySelector('.nav-link.active');
        if (activeLink) {
            moveSlider(activeLink);
        }
    }, [location]);

    return (
        <nav ref={navRef} className="navbar">
            <div
                className="slider"
                style={{ left: sliderStyle.left, width: sliderStyle.width }}
            />

            <div className={`nav-container ${isOpen ? 'open' : ''}`}>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) =>
                        `nav-link home-link ${isActive ? 'active' : ''}`
                    }
                    onMouseEnter={handleMouseEnter}
                    onClick={handleClick}
                >
                    ALINA
                </NavLink>

                <div className="dropdown-links">
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? 'active' : ''}`
                        }
                        onMouseEnter={handleMouseEnter}
                        onClick={handleClick}
                    >
                        Contact
                    </NavLink>
                </div>
            </div>

            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? '✖' : '☰'}
            </button>
        </nav>
    );
}

export default Navbar;