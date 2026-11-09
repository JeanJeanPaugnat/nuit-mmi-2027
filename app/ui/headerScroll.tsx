'use client'
import {motion, useScroll } from "motion/react"
import url from "@/public/logo-nuit-mmi.svg"
import Image from "next/image"

export default function HeaderScroll() {
    return (
        <header className="flex">
            <div className="">


            </div>
            <Image
            src={url}
            alt="Logo"
            width={600}
            height={160}
            />
            <div className="">


            </div>
        </header>
    )
}