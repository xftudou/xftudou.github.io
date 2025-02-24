import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";

function Home() {
    const text = "I am a";
    const words = ["Software Developer", "Gamer", "Traveler", "Dreamer"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-screen flex flex-col items-center justify-center gap-10">
            <h2 className="text-4xl font-bold text-white">Alina Yang</h2>
            <div className="flex flex-row items-center justify-center text-center">
                <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Arial, sans-serif' }}>
                    {text}
                </p>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={words[index]}
                        className="text-6xl font-extrabold text-blue-200"
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.5 }}
                    >
                        {words[index]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Home;