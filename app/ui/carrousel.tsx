"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react"

import img1 from "@/public/img/photo-1.jpg"
import img2 from "@/public/img/photo-2.jpg"
import img3 from "@/public/img/photo-3.jpg"
import img0 from "@/public/img/photo.jpg"

const photos = [img0, img1, img2, img3]

export default function CarrouselPreviousEdition() {
    const { scrollYProgress } = useScroll()

    const moveX = useTransform(scrollYProgress, [0, 1], [0, -800])

    return (
        <section className=" overflow-hidden gap-8z bg-foreground pt-24 pb-24 text-background">
            <h2 className="mb-8 ml-[12%] max-w-150 font-titillium text-8xl leading-[0.9] font-bold uppercase">
                Les Éditions précédentes
            </h2>

            <motion.div
            style={{ x: moveX }}
             className="relative flex h-180 gap-10  left-20"
             >
                {photos.map((photo, index) => (
                    <motion.div
                        className="relative h-full w-300 shrink-0 overflow-hidden rounded-4xl"
                        key={index}
                    >
                        <Image

                            src={photo}
                            alt={`Photo ${index + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>

                ))}
                            
            </motion.div>
        </section>
    )
}

//  <AnimatePresence mode="wait">  </AnimatePresence>