import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ChooseToMatch = () => {
    return (
        <section className="bg-[#4B164C] sm:h-screen py-44">
            <div className="container mx-auto px-4 flex justify-center items-center h-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-white"
                >
                    <Image src="/images/heart.png" className="absolute w-[91.14px] h-[72.09px] sm:right-[4%] top-[-50px]" alt="heart" width={100} height={80} />
                    Choose to Match
                </motion.h2>
            </div>
        </section>

    )
}

export default ChooseToMatch