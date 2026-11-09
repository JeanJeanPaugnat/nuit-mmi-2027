'use client'
import {motion, useScroll, useMotionValueEvent } from "motion/react"
import url from "@/public/logo-nuit-mmi.svg"
import Image from "next/image"
import Ghost from "./ghost"

export default function HeaderScroll() {

    const { scrollY } = useScroll()

    return (
        <header className="flex w-full h-dvh items-center justify-center">
            <div className="relative flex fill-amber-500">
                <Ghost className="absolute" variant="sm"/>
                <Ghost className="absolute" variant="lg"/>
                <Ghost className="absolute" variant="sm"/>
            </div>
            <Image
            src={url}
            alt="Logo"
            width={600}
            height={160}
            />
            <div className="relative flex text-amber-500">
                <Ghost className="absolute" variant="sm"/>
                <Ghost className="absolute" variant="lg"/>
                <Ghost className="absolute" variant="lg"/>

            </div>
        </header>
    )
}