'use client'
import { motion, useScroll } from "motion/react"
import url from "@/public/logo-nuit-mmi.svg"
import Image from "next/image"
import Ghost from "./ghost"

export default function HeaderScroll() {
    const { scrollY } = useScroll()

    return (
        <header className="relative flex h-dvh items-center justify-center overflow-hidden px-4">
            <motion.div 
                style={{ y: scrollY }} 
                className="pointer-events-none absolute inset-0 flex text-blue-900"
            >
                <Ghost className="absolute top-6 left-4 sm:top-10 sm:left-20 -rotate-16 h-28 sm:h-44 md:h-60 opacity-80 sm:opacity-100" variant="sm"/>
                <Ghost className="absolute -bottom-10 -left-10 sm:-bottom-6 sm:-left-6 h-40 sm:h-60 md:h-80" variant="lg"/>
                <Ghost className="absolute bottom-4 right-4 sm:bottom-6 sm:right-[15%] md:right-1/5 rotate-4 h-36 sm:h-56 md:h-80" variant="lg"/>
                <Ghost className="absolute top-12 right-4 sm:top-20 sm:right-[10%] rotate-17 h-28 sm:h-44 md:h-60" variant="sm"/>
                <Ghost className="hidden sm:block absolute -top-24 sm:-top-32 md:-top-38 right-1/2 h-36 sm:h-48 md:h-60" variant="sm"/>
            </motion.div>

            <Image
                src={url}
                alt="Logo Nuit MMI"
                priority
                className="relative z-10 w-4/5 max-w-[280px] sm:max-w-[420px] md:max-w-[580px] h-auto drop-shadow-lg select-none"
            />

            <motion.div className="pointer-events-none absolute inset-0 flex text-white">
                <Ghost className="absolute top-1/4 -left-10 sm:-left-8 rotate-8 h-44 sm:h-64 md:h-80 lg:h-100" variant="sm"/>
                <Ghost className="absolute top-1/10 sm:top-1/6 -right-12 sm:-right-16 -rotate-6 h-48 sm:h-72 md:h-96 lg:h-120" variant="lg"/>
                <Ghost className="absolute -bottom-24 sm:-bottom-32 md:-bottom-40 left-1/4 sm:left-2/7 -rotate-12 h-48 sm:h-72 md:h-96 lg:h-120" variant="lg"/>
            </motion.div>
        </header>
    )
}