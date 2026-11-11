import Ghost from '@/app/ui/ghost'; 
import Image from 'next/image';
import url from '@/public/favicon-square.svg';

export default function Footer(){

    return(

        <section className="flex h-dvh bg-gradient flex-col items-center z- justify-end">
            <footer className="relative flex bg-foreground h-140 items-start justify-between rounded-4xl p-12 overflow-hidden gap-4 w-full max-w-7xl ">
                <Image src={url} alt="Logo" width={100} height={100} />
                <ul className="flex flex-col gap-4 text-sm z-2 font-google text-gray-dark">
                    <li className=""><a href="" className="">Accueil</a></li>
                    <li className=""><a href="" className="">À propos</a></li>
                    <li className=""><a href="" className="">Programme</a></li>
                    <li className=""><a href="" className="">Défis</a></li>
                    <li className=""><a href="" className="">Contact</a></li>
                </ul>
                <Ghost variant='lg' side={true} direction="side" className="text-gray-light absolute z-0 -right-60 -bottom-80" width={1000} height={1000} />
            </footer>

        </section>
    )
}