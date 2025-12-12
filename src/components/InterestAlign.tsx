import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const InterestAlign = () => {
    return (
        <section className="py-14 relative overflow-hidden">
            <div className="container mx-auto px-4 h-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]"
                >
                    When Interest Aligns
                </motion.h2>
                <div className="relative flex flex-wrap items-start justify-center gap-14">
                    <div className="flex-1 h-full my-auto">
                    <p className="sm:text-end text-center w-[90%] sm:w-[60%] block mx-auto sm:ml-auto sm:mr-0 mb-5 sm:mb-0">Respond to the thoughts
                            Respond to the thoughts
                            that resonate with you and signal when someone’s worldview
                            sparks a connection.</p>
                    </div>
                    <div className='mockup_shadow'>
                        <Image src="/images/mockup.png" width={281.25} height={568.25} alt='mockup' className="block max-w-full" />
                    </div>
                    <div className="flex-1 sm:block hidden">
                        <p className='md:w-1/2 pt-16'>Browse a feed
                            If both users resonate with each other&apos;s ideas,
                            a potential match is formed and key profile details like photos and other details are unlocked.</p>
                    </div>
                </div>
            </div>
            <Image src="/images/vec4.svg" height={128.99} width={300} alt='vector' className="h-auto max-w-full w-full sm:w-auto absolute -z-10 sm:block hidden sm:left-auto right-0 sm:-bottom-28" />
            <Image src="/images/vec6.svg" height={128.99} width={300} alt='vector' className="h-auto max-w-full w-full sm:w-auto absolute -z-10 sm:hidden block top-[31%] left-0" />
        </section>

    )
}

export default InterestAlign