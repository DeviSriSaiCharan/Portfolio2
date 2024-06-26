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
            x : -100,
            opacity : 0,
            duration : 0.4
        },"as")
        tl.from('.About > div',{
            opacity : 0,
            scale : 0,
            duration : 0.4
        },"as")

        tl.from('.left',{
            duration : 0.6,
            opacity : 0,
            x : -200,
        },"same")
        tl.from('.right',{
            duration : 0.6,
            opacity : 0,
            x : 200,
        },"same")
        
    },[]);

    return (
        <div className="About p-4 h-screen w-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            <h2 className='text-5xl font-bold mb-6 tracking-wide text-left w-full px-6 text-gray-900'>About</h2>
            <div className="bg-white w-4/5 h-5/6 m-auto p-10 flex justify-between items-center rounded-lg shadow-lg">
                <img
                    className="left w-1/3 object-cover h-full rounded-lg shadow-md"
                    src="https://plus.unsplash.com/premium_photo-1714674731181-943f49944431?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="About image"
                />
                <div className="right w-2/3 pl-10 font-">
                    <h1 className="ani-h1 text-4xl font-bold mb-6">Devi Sri Sai Charan</h1>
                    <p className="ani-p text-lg mb-4 leading-relaxed">
                        I am Devi Sri Sai Charan, a 3rd-year CSE student at SRM University AP, and a passionate full-stack web developer. With a strong foundation in computer science and a love for coding, I thrive on creating dynamic and responsive web applications.
                    </p>
                    <p className="ani-p text-lg leading-relaxed">
                        Driven by curiosity and a desire to innovate, I am constantly learning new technologies and improving my skills. Let's connect and build something amazing together!
                    </p>
                </div>
            </div>
        </div>
    );
}
