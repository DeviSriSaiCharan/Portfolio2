import React, { useRef } from 'react';
import gsap  from 'gsap';
import { useGSAP } from '@gsap/react';
import backgroundVideo from '../assets/background.mp4';
import Logo from '../assets/Logo.png';
import { RiArrowDownWideLine, RiGithubFill, RiLinkedinBoxFill, RiDownloadLine } from '@remixicon/react';
import DeviSriSaiCharan_Neelapu from '../assets/DeviSriSaiCharan_Neelapu.pdf'

export default function LandingPage() {

    useGSAP(() =>{
        const tl = gsap.timeline();
        tl.from('.details h1',{
            opacity : 0,
            y : 20,
            delay : 1
        })
        tl.from('.details p',{
            opacity : 0,
            y : 10
        })
        tl.from('.links',{
            opacity : 0,
            y : 10,
        })
    })

    return (
        <div className="Home w-full h-screen">
            <div className="background absolute  w-full h-full " style={{'background-image': 'linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)'}}>
                {/* <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                    <source src={backgroundVideo} type="video/mp4" />
                </video> */}
            </div>
            <div className="relative z-10 w-full h-full">
                <NavBar />
                <div className='details top-[45%] flex flex-col gap-10 w-full text-center absolute'>
                    <div>
                        <h1 className='alt text-7xl'>Devi Sri Sai Charan</h1><br/>
                        <p className='alt'>Web Developer and 3rd Year Undergraduate at SRM University, Andhra Pradesh.</p>
                    </div>
                    <div className='links flex justify-center items-center gap-4'>
                        <span className='bg-black text-white font-semibold px-6 py-2 rounded-3xl'>
                            <a href={DeviSriSaiCharan_Neelapu} download={true} className='flex gap-2 items-center'>Download CV <RiDownloadLine className='h-4'/></a>
                        </span>
                        <div className='flex gap-2'>
                            <a href='https://github.com/DeviSriSaiCharan' target='_blank'>
                                <RiGithubFill className='bg-white w-9 h-9 rounded-full p-[7px]'/>
                            </a>
                            <a href="https://www.linkedin.com/in/devi-sri-sai-charan-neelapu-719362255/" target='_blank'>
                                <RiLinkedinBoxFill className='bg-white w-9 h-9 rounded-full p-[7px]'/>
                            </a>
                        </div>
                    </div>
                </div>
                <RiArrowDownWideLine className='absolute bottom-2 animate-bounce left-1/2'/>
            </div>
        </div>
    );
}

function NavBar() {
    
    useGSAP(() =>{

        gsap.from('nav div img, nav div ol li',{
            opacity : 0,
            y : -20,
            delay : 0.5,
            stagger : 0.1
        })

    })

    return (
        <nav className="flex justify-between px-12 py-2 items-center">
            <div className="logo w-20">
                <img src={Logo} className="scale-150" alt="Logo" />
            </div>
            <div>
                <ol className="flex gap-10 alt text-sm">
                    <a href="#Home">
                        <li className="hover:underline decoration-wavy rounded-3xl font-medium">Home</li>
                    </a>
                    <a href="#About">
                        <li className="hover:underline decoration-wavy rounded-3xl font-medium">About</li>
                    </a>
                    <a href="#Skills">
                        <li className="hover:underline decoration-wavy rounded-3xl font-medium">Skills</li>
                    </a>
                </ol>
            </div>
        </nav>
    );
}
