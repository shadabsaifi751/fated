'use client';

import { motion } from 'framer-motion'
import dynamic from 'next/dynamic';
import Image from 'next/image'
const SplitLineText = dynamic(() => import("@/common/Text/SplitLineText"), {
    ssr: false,
});

const ChooseTopics = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-4 h-full">
                {/* Heading */}
                {/* <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]"
                >
                    Choose topics that define you.
                </motion.h2> */}
                <SplitLineText
                    text={`Choose topics that define you.`}
                    Wrapper="h2"
                    repeatDelay={0.05}
                    className={`lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]`}
                />


                <div className="relative flex flex-wrap items-start justify-center gap-14">
                    <div className="flex-1 h-full my-auto">
                        <div className="">
                            <motion.p 
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
                                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                className="sm:text-end text-center w-[90%] sm:w-[60%] block mx-auto sm:ml-auto sm:mr-0 mb-5 sm:mb-0"
                            >
                                Share your opinions, stories, and experiences.
                                <span className='sm:hidden inline'>
                                    Browse a feed of like-minded people and respond when something clicks.
                                </span>
                            </motion.p>
                        </div>
                    </div>
                    <div className='mockup_shadow'>
                        <Image src="/images/fated-final-gif1.gif" width={281.25} height={568.25} alt='mockup' className="block max-w-full" />
                    </div>
                    <div className="flex-1 sm:block hidden ">
                        <motion.span 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className='sm:w-2/3 w-full block'
                        >
                            Browse a feed of like-minded people and respond when something clicks.
                        </motion.span>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChooseTopics