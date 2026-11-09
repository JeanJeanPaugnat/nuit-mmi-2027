'use client'

import { useEffect, useState, useLayoutEffect } from "react"

export default function ParallaxContainer() {
    const [scrollY, setScrollY] = useState(0);


    useEffect(() => {

        const handleScroll = () => {
        const newScrollY = window.scrollY;
        setScrollY(newScrollY)
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const windowHeight = window.innerHeight;


    return(
        <div className="parallax-container " style={{ scrollBehavior: 'smooth' }}>

            <div className="parallax-layer bg-gradient" style={{ '--scroll-y': `${scrollY}px`, '--window-h': `${windowHeight}` }}>
                <div className="parallax h-50 w-40 absolute -top-8 left-1/5 -rotate-12 bg-blue-500"></div>
                <div className="parallax h-50 w-40 absolute right-1/2 bottom-36 -rotate-24 bg-blue-500"></div>
                <div className="parallax h-50 w-40 absolute top-14 right-1/4 rotate-6 bg-blue-500"></div>
            </div>


            <div className="parallax-layer flex bg-secondary items-center justify-center" style={{ '--scroll-y': `${scrollY}px` }}>
                <div className="parallax h-100 w-200 flex flex-col font-sans justify-center items-center bg-green-500">
                    <h2 className="uppercase text-4xl">La nuit mmi</h2>
                    <h3 className="uppercase text-4xl">2027</h3>
                </div>
            </div>
                

            <div className="parallax-layer bg-primary" style={{ '--scroll-y': `${scrollY}px`, '--window-h': `${windowHeight}` }}>
                <div className="parallax h-100 w-80 absolute top-28 rotate-12 bg-amber-500"></div>
                <div className="parallax h-100 w-80 absolute right-8 bottom-36 -rotate-16 bg-amber-500"></div>
                <div className="parallax h-100 w-80 absolute -bottom-34 left-1/4 rotate-6 bg-amber-500"></div>

            </div>
        </div>

    )
}