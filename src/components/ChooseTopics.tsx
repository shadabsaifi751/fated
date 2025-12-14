import FeminismBadge from '@/common/FeminismBadge'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const ChooseTopics = () => {
    return (
        <section className="py-14">
            <div className="container mx-auto px-4 h-full">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font font-normal relative text-[48px] sm:text-[96px] sm:leading-[120px] text-center text-[#4B164C] mb-5 sm:mb-[63px]"
                >
                    Choose topics that define you.
                </motion.h2>


                <div className="relative flex flex-wrap items-start justify-center gap-14">
                    <div className='flex sm:hidden flex-wrap items-center justify-center gap-2 mb-11'>
                    {
                        [1,2,3,4,5,6,7,8].map((index) => ( 
                            <FeminismBadge key={index} value={80} label="Feminism" className="" />
                        ))
                    }
                    </div>
                    <div className="flex-1 h-full my-auto">
                        <p className="sm:text-end text-center w-[90%] sm:w-[60%] block mx-auto sm:ml-auto sm:mr-0 mb-5 sm:mb-0">Express yourself by sharing your opinions, stories, insights, or experiences that reflect who you truly are.</p>
                        <div className="sm:block hidden">
                            <FeminismBadge value={80} label="Feminism" className="absolute -top-[21px] left-[18%]" />
                            <FeminismBadge value={80} label="Feminism" className="absolute bottom-[44%] left-[12%]" />
                        </div>
                    </div>
                    <div className='mockup_shadow'>
                        <Image src="/images/mockup.png" width={281.25} height={568.25} alt='mockup' className="block max-w-full" />
                    </div>
                    <div className="flex-1 sm:block hidden">
                        <p className='md:w-1/2 pt-16'>Browse a feed filled with ideas from like-minded individuals. Respond to the thoughts that resonate with you and signal when someone's worldview sparks a connection.</p>
                        <FeminismBadge value={80} label="Feminism" className="absolute top-[30%] right-[22%]" />
                        <FeminismBadge value={80} label="Feminism" className="absolute bottom-[30%] right-[5%]" />
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ChooseTopics