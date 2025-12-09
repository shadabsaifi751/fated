import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';


const Header = () => {
    return (
        <header className='shadow-[0px_4px_49.5px_rgba(75,22,76,0.13)] pb-[25px] pt-[15px] mb-25 sm:mb-[108px]'>
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-left">
                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="flex w-full items-center justify-between"
                    >
                        <Link href="/" className="lobster-font not-italic font-normal text-[40px] leading-[50px] text-[#4B164C]">
                            fated.
                        </Link>
                    </motion.div>
                </div>
            </div>
        </header>
    )
}

export default Header