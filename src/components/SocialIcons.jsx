import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
    return (
        <div className="fixed bottom-5 left-5 flex flex-col space-y-3 z-50">
            <a
                href="https://github.com/xftudou"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <FaGithub className="text-3xl transition-transform transform group-hover:scale-125 group-hover:-translate-y-1 text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)]" />
            </a>
            <a
                href="www.linkedin.com/in/yuhan-yang925"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <FaLinkedinIn className="text-3xl transition-transform transform group-hover:scale-125 group-hover:-translate-y-1 text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)]" />
            </a>
            <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <FaInstagram className="text-3xl transition-transform transform group-hover:scale-125 group-hover:-translate-y-1 text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)]" />
            </a>
            <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
            >
                <FaYoutube className="text-3xl transition-transform transform group-hover:scale-125 group-hover:-translate-y-1 text-[var(--icon-color)] group-hover:text-[var(--icon-hover-color)]" />
            </a>
        </div>
    );
};

export default SocialIcons;