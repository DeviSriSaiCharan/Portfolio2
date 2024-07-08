import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function About() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger : '.About',
                scroll : 'body',
                start : "top 40%",
                // markers : true
            }
        })

        tl.from('.About h2',{
            x : -200,
            opacity : 0,
            duration : 0.4
        })
        tl.from('.right',{
            duration : 0.6,
            opacity : 0,
            x : 200,
        })
        
    },[]);

    return (
        <div id='About' className="About p-4  w-full bg-[#F8F0EC] text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            
            <div className=" w-4/5 h-5/6 m-auto p-10  rounded-lg ">
                <h2 className='text-5xl font-semibold mb-10 tracking-wide text-center w-full px-6 text-gray-900'>About</h2>
                
                <div className="right w-2/3 pl-10 text-center m-auto">
                    <h1 className="ani-h1 text-4xl font-bold mb-6">Devi Sri Sai Charan</h1>
                    <p className="ani-p text-lg mb-4 leading-relaxed">
                        I am 
                        <span className='font-semibold'> Devi Sri Sai Charan, a 3rd-year CSE student at SRM University AP</span>
                        , and a passionate full-stack web developer. With a strong foundation in computer science and a love for coding, I thrive on creating dynamic and responsive web applications.
                    </p>
                    <p className="ani-p text-lg leading-relaxed">
                        My core stack is{" "}
                        <span className="font-medium">
                          React, Node.js, and MongoDB
                        </span>
                        . I am also familiar with TypeScript and Prisma. I am always looking to
                        learn new technologies. I am currently looking for a{" "}
                        <span className="font-medium">Inter position</span> as a web
                        developer.
                    </p>
                </div>
            </div>
        </div>
    );
}
