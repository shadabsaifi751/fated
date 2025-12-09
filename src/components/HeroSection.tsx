"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import BetaUserModal from "./BetaUserModal";

const images = [
    "/images/img1.png",
    "/images/img2.png",
    "/images/img3.png",
    "/images/img4.png",
    "/images/img5.png",
];

const marqueeImages = [...images, ...images];

const offsets = [
    "lg:mt-20",  // card 1 a bit down
    "lg:mt-2",   // card 2 top
    "lg:mt-16",  // card 3 lowest
    "lg:mt-0",   // card 4 middle
    "lg:mt-[40px]",  // card 5 between 1 & 3
];

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="lobster-font mb-5 not-italic relative font-normal text-[45px] sm:text-[48px] md:text-[96px] leading-[60px] md:leading-[120px] text-center text-[#4B164C]"
                >
                    <Image src="/images/heart.png" className="absolute w-[60.14px] h-[50.09px] md:w-[91.14px] sm:h-[72.09px] right-[12%] sm:right-[24%] top-[-36px] sm:top-[-50px]" alt="heart" width={100} height={80} />
                    where minds meet <br />
                    heart follows
                </motion.h1>

                {/* Paragraph */}
                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-xl inter-font block mx-auto  not-italic font-medium text-[20px] leading-[27px] text-center text-[#4B164C] mb-6"
                >
                    India’s first thought-led dating app. Connect through opinions, values, and meaningful conversations, not just appearances.
                </motion.p>

                {/* Button */}
                <motion.button
                    onClick={() => setIsModalOpen(true)}
                    className="mx-auto block px-5 py-2 gap-[10px] bg-[#4B164C] shadow-[4px_4px_6.3px_rgba(158,145,0,0.48)] rounded-[9px] inter-font cursor-pointer not-italic font-extrabold text-[20px] leading-[27px] text-center text-white my-5 sm:mt-[43px] mb-[70px]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Join the waitlist
                </motion.button>

                {/* Scrolling Image Marquee */}
                <div className="relative w-full overflow-hidden pb-12 sm:pb-20">
                    <motion.div
                        className="flex gap-6 min-w-[200%]"
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 32,
                            ease: "linear",
                        }}
                    >
                        {marqueeImages.map((src, idx) => {
                            const offsetClass = offsets[idx % offsets.length];

                            return (
                                <div
                                    key={`${src}-${idx}`}
                                    className={`relative flex-shrink-0 ${offsetClass}`}
                                >
                                    <div className="relative h-60 w-40 sm:w-[252px] sm:h-[379px] lg:h-[420px] lg:w-[260px] rounded-[11px] overflow-hidden bg-black/5 shadow-[0_18px_40px_rgba(0,0,0,0.12)]">
                                        <Image
                                            src={src}
                                            alt={`couple-${idx}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>
            </div>

            <BetaUserModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
