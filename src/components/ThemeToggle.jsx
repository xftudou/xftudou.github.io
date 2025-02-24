import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

function ThemeToggle({ theme, toggleTheme }) {
    return (
        <button
            onClick={toggleTheme}
            className="bg-transparent border border-[var(--navbar-text)] text-[var(--navbar-text)] py-[0.3rem] px-[0.6rem] rounded cursor-pointer transition-colors duration-300 ease hover:bg-[var(--navbar-text)] hover:text-[var(--navbar-bg)]"
        >
            {theme === 'dark-theme' ? <FiMoon size={24} /> : <FiSun size={24} />}
        </button>
    );
}

export default ThemeToggle;