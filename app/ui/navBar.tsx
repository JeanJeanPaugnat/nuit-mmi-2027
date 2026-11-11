'use client'

import url from "@/public/favicon-square.svg"
import Image from "next/image";
import { motion } from "motion/react";


export default function NavBar() {

    const navItems = [
        { name: "Accueil", href: "#" },
        { name: "À propos", href: "#" },
        { name: "Programme", href: "#" },
        { name: "Défis", href: "#" },
        { name: "Contact", href: "#" },
    ];

    return (
        <nav className="bg-foreground absolute self-center flex mt-8 items-center z-51 w-2xl rounded-2xl justify-between px-4 py-2.5">
                <Image src={url} width={45} height={45} alt="logo nuit mmi" />

                <ul className="flex space-x-4 gap-3 text-gray-dark text-sm font-google">
                    {navItems.map((item) =>(
                        <motion.li 
                        whileHover={{
                            backgroundColor: '#254789',
                            padding: '0.75rem 1.5rem',
                            borderRadius: '100rem'
                        }}
                        className="px-3 py-6"
                        ><a href={item.href} className="">{item.name}</a></motion.li>
                    ))}

                </ul>
        </nav>
    )
}