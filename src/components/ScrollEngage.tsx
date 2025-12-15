import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ScrollEngage = () => {
    return (
        <section className="py-14 relative">
            <div className="container mx-auto px-4 h-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[82px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]"
                >
                    When ideas align, a connection begins.
                </motion.h2>


                <div className="relative flex flex-wrap items-start justify-center gap-14">
                    <div className="flex-1 h-full my-auto">
                        <p className="sm:text-end text-center w-[90%] sm:w-[60%] block mx-auto sm:ml-auto sm:mr-0 mb-5 sm:mb-0">See who’s engaged with your thoughts.

                        <span className='sm:hidden block'>
                        Respond to perspectives that resonate to form a potential match and unlock profile details - or skip if it doesn’t feel right.
                            </span>
                        </p>
                    </div>
                    <div className='mockup_shadow'>
                        <Image src="/images/fated-gif-mid.gif" width={281.25} height={568.25} alt='mockup' className="block  max-w-full" />
                    </div>
                    <div className="flex-1 sm:block hidden">
                    <span className='sm:w-2/3 w-full block'>
                        Respond to perspectives that resonate to form a potential match and unlock profile details - or skip if it doesn’t feel right.
                            </span>
                    </div>
                </div>
            </div>
            <Image src="/images/vec3.svg" height={128.99} width={300} alt='vector' className="h-auto max-w-full w-full sm:w-auto absolute  -z-10 left-0 -bottom-[6%] sm:bottom-0" />
        </section>

    )
}

export default ScrollEngage