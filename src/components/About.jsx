import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutImg from '../assets/AboutImg.png';

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
            y : 200,
            opacity : 0,
            duration : 0.4
        })
        tl.from('.right',{
            duration : 0.6,
            opacity : 0,
            x : 200,
        }, "as")
        tl.from('.About img',{
            duration : 0.6,
            opacity : 0,
            x : -200
        }, "as")
        
    },[]);

    return (
        <div id='About' className="About p-4  w-full bg-[#F8F0EC] text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            
            <div className=" w-4/5 h-5/6 m-auto p-10  rounded-lg ">
            <h2 className='alt underline decoration-wavy decoration-2 underline-offset-4 text-5xl font-semibold mb-20 tracking-wide text-center w-full px-6 text-gray-900'>About Me</h2>
                <div className='flex gap-10'>
                    <div className='w-2/5 justify-center items-center flex'>
                        <img src={AboutImg} />
                    </div>
                    <div className='w-3/5'>
                        <div className="right pl-4 text-left m-auto">
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
            </div>
        </div>
    );
}
