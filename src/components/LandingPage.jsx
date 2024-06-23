import React, { useRef } from 'react';
import gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
import backgroundVideo from '../assets/background.mp4';
import Logo from '../assets/Logo.png';
import { RiArrowDownWideLine } from '@remixicon/react';

export default function LandingPage() {

    useGSAP(() =>{
        const tl = gsap.timeline();
        tl.from('h1',{
            opacity : 0,
            y : 20,
            delay : 2
        })
        tl.from('p',{
            opacity : 0,
            y : 10
        })
    })

    return (
        <div className="Home w-full h-screen">
            <div className="background absolute  w-full h-full ">
                <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video>
            </div>
            <div className="relative z-10 w-full h-full">
                <NavBar />
                <div className='top-[45%] w-full text-center absolute'>
                    <h1 className='text-7xl'>Devi Sri Sai Charan</h1><br/>
                    <p>Web Developer and 3rd Year Undergraduate at SRM University, Andhra Pradesh.</p>
                </div>
                <RiArrowDownWideLine className='absolute bottom-2 animate-bounce left-1/2'/>
            </div>
        </div>
    );
}

function NavBar() {
    
    useGSAP(() =>{
        const tl = gsap.timeline();

        tl.from('nav div img',{
            opacity : 0,
            y : -20,
            delay : 0.5
        })

        tl.from('nav div ol li',{
            opacity : 0,
            y : -20,
            stagger : 0.3
        })
    })

    return (
        <nav className="flex justify-between px-12 py-2 items-center">
            <div className="logo w-20">
                <img src={Logo} className="scale-150" alt="Logo" />
            </div>
            <div>
                <ol className="flex gap-10">
                    <li className="hover:underline rounded-3xl">Home</li>
                    <li className="hover:underline rounded-3xl">About</li>
                    <li className="hover:underline rounded-3xl">Contact</li>
                </ol>
            </div>
        </nav>
    );
}
