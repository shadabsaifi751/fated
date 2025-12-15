import { motion } from 'framer-motion'
import React from 'react'

const FatedWork = () => {
    return (
        <section className="sm:h-screen py-44">
            <div className="container mx-auto px-4 flex justify-center items-center h-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C]"
                >
                    how fated works!
                </motion.h2>
            </div>
        </section>

    )
}

export default FatedWork