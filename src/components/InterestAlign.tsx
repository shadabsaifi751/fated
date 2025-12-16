'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic';

const SplitLineText = dynamic(() => import("@/common/Text/SplitLineText"), {
    ssr: false,
});

const InterestAlign = () => {
    return (
        <section className="py-14 relative overflow-hidden">
            <div className="container mx-auto px-4 h-full">
                {/* Heading */}
                {/* <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]"
                >
                    Choose to match
                </motion.h2> */}

                <SplitLineText
                    text={`Choose to match`}
                    Wrapper="h2"
                    repeatDelay={0.05}
                    className={`lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]`}
                />

                <div className="relative flex flex-wrap items-start justify-center gap-14">
                    <div className="flex-1 h-full my-auto">
                        <motion.p 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className="sm:text-end text-center w-[90%] sm:w-[60%] block mx-auto sm:ml-auto sm:mr-0 mb-5 sm:mb-0"
                        >
                            Now that profiles are unlocked, it&apos;s your call.
                            <span className='sm:hidden inline'>
                                Make the match and see where it goes or move on if it doesn&apos;t feel right
                            </span>
                        </motion.p>
                    </div>
                    <div className='mockup_shadow'>
                        <Image src="/images/fated-gif3.gif" width={281.25} height={568.25} alt='mockup' className="block max-w-full" />
                    </div>
                    <div className="flex-1 sm:block hidden">
                        <motion.span 
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.2, margin: "0px 0px -100px 0px" }}
                            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                            className='sm:w-2/3 w-full block'
                        >
                            Make the match and see where it goes or move on if it doesn&apos;t feel right
                        </motion.span>
                    </div>
                </div>
            </div>
            <Image src="/images/vec4.svg" height={128.99} width={300} alt='vector' className="h-auto max-w-full w-full sm:w-auto absolute -z-10 sm:block hidden sm:left-auto right-0 sm:-bottom-28" />
            <Image src="/images/vec6.svg" height={128.99} width={300} alt='vector' className="h-auto max-w-full w-full sm:w-auto absolute -z-10 sm:hidden block top-[31%] left-0" />
        </section>

    )
}

export default InterestAlign