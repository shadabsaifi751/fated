'use client';

import { motion, useInView } from 'framer-motion'
import dynamic from 'next/dynamic';
import React, { useRef } from 'react'
const SplitLineText = dynamic(() => import("@/common/Text/SplitLineText"), {
    ssr: false,
});

const FatedWork = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: false, amount: 0.3 })

    return (
        <section ref={ref} className="sm:h-screen py-44">
            <div className="container mx-auto px-4 flex justify-center items-center h-full">
                {/* Heading */}
                {/* <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                    transition={{ type: "spring", stiffness: 80, damping: 16, mass: 0.9 }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C]"
                >
                    how fated works!
                </motion.h2> */}
                <SplitLineText
                    text={`how fated works!`}
                    Wrapper="h2"
                    repeatDelay={0.04}
                    className={`lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] sm:mb-5 opacity-90`}
                />
            </div>
        </section>

    )
}

export default FatedWork