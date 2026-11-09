'use client'
import {motion, useScroll, useMotionValueEvent } from "motion/react"
import url from "@/public/logo-nuit-mmi.svg"
import Image from "next/image"
import Ghost from "./ghost"

export default function HeaderScroll() {

    const { scrollY } = useScroll()

    return (
        <header className="flex relative h-dvh items-center overflow-hidden justify-center">
            <motion.div style={{ y: scrollY }} className="absolute h-full w-full flex text-blue-900">
                <Ghost className="absolute top-10 left-30 -rotate-16 h-60 " variant="sm"/>
                <Ghost className="absolute -bottom-6 -left-6  h-80" variant="lg"/>
                <Ghost className="absolute bottom-6 right-1/5 rotate-4 h-80" variant="lg"/>
                <Ghost className="absolute top-20 right-1/8 rotate-17 h-60" variant="sm"/>
                <Ghost className="absolute -top-38 right-1/2  h-60" variant="sm"/>
            </motion.div>
            <Image
            src={url}
            alt="Logo"
            width={600}
            height={160}
            />
            <div className="absolute h-full w-full flex text-white">
                <Ghost className="absolute h-100 top-1/4 -left-8 rotate-8" variant="sm"/>
                <Ghost className="absolute h-120 top-1/6 -right-16 -rotate-6" variant="lg"/>
                <Ghost className="absolute h-120 -bottom-40 left-2/7 -rotate-12" variant="lg"/>

            </div>
        </header>
    )
}