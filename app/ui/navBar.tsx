'use client'

import url from "@/public/favicon-square.svg"
import Image from "next/image";
import { motion } from "motion/react";


export default function NavBar() {

    const navItems = [
        { name: "Accueil", href: "#" },
        { name: "À propos", href: "#" },
        { name: "Programme", href: "#" },
        { name: "Défis", href: "#xxx" },
        { name: "Contact", href: "#" },
    ];

    return (
        <motion.nav
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            aria-label="Navigation principale"
            className="bg-foreground fixed top-8 left-1/2 z-51 h-fit flex w-2xl max-w-[calc(100vw-2rem)] -translate-x-1/2 items-center justify-between rounded-2xl px-4 py-2.5"
        >
                <Image src={url} width={45} height={45} alt="logo nuit mmi" />

                <ul className="flex items-center gap-3 text-sm font-google">
                    {navItems.map((item) => (
                        <motion.li
                            key={item.name}
                            whileHover={{
                                backgroundColor: "#00041D",
                                color: "#fff",
                            }}
                            whileTap={{ scale: 0.95 }}
                            whileFocus={{ 
                                backgroundColor: "#00041D",
                                color: "#fff",
                            }}
                            transition={{ duration: 0.2 }}
                            className="rounded-full px-6 py-3.5 text-gray-dark"
                        >
                            <a href={item.href}>{item.name}</a>
                        </motion.li>
                    ))}

                </ul>
        </motion.nav>
    )
}