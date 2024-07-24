import ContactImg from '../assets/ContactImg.png'
import { RiGithubFill, RiLinkedinBoxFill, RiTwitterXFill, RiInstagramFill } from '@remixicon/react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useEffect } from 'react';

export default function Contact(){

    useGSAP(() => {
        // Register ScrollTrigger plugin
        gsap.registerPlugin(ScrollTrigger);

        // Create a GSAP timeline for the animation
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.Contact',
                start: "top 40%",
                scroll : 'body', // Adjust the start point as needed
                // markers: true, // Uncomment for debugging
            }
        });

        // Animation for both left and right divs simultaneously
        tl.from('.left-contact', {
            duration: 0.6,
            opacity: 0,
            x: -200,
        },"same")
        .from('.right-contact', {
            duration: 0.6,
            opacity: 0,
            x: 200,
        }, "same"); // Start the right animation after left animation ends

    }, []);


    return (
        <div className="Contact overflow-hidden p-4 h-screen w-full bg-[#F8F0EC] text-gray-800 flex items-center justify-center">
             
            <div className='flex gap-20 w-11/12 h-5/6  items-center'>
                <div className='left-contact'>
                    <img src={ContactImg} alt="" />
                </div>
                <div className='right-contact w-3/5 p-2 h-full'>
                    <h2 className='alt px-2 underline decoration-wavy decoration-2 underline-offset-4 text-5xl font-semibold mb-20 tracking-wide text-left w-full  text-gray-900'>Contact Me</h2>
                    <div className='flex border-4 border-black'>
                        <form className=' flex gap-5 flex-col w-1/2 py-8 px-8 text-black font-semibold'>
                            <input autoComplete='off' className='py-2 mb-2 w-11/12 outline-none border-b-2 border-black placeholder-black bg-transparent' type='text' placeholder='Full Name'/>
                            <input autoComplete='off' className='py-2 mb-2 w-11/12 outline-none border-b-2 border-black placeholder-black bg-transparent' type='email' placeholder='Email'/>
                            <input autoComplete='off' className='py-2 mb-2 w-11/12 outline-none border-b-2 border-black placeholder-black bg-transparent' type='text' placeholder='Message'/>
                            <button  className='mt-4 py-4 flex items-center justify-center bg-black text-white rounded-full w-11/12'>
                                <a href="mailto:devisrisaicharan2@example.com">Contact Me</a>
                            </button>
                        </form>
                        <div className='w-1/2 p-6 flex flex-col justify-between'>
                            <div>
                                <h3 className='font-semibold text-2xl mb-2'>Contact</h3>
                                <p className='font-medium text-gray-500'>devisrisaicharan2@gmail.com</p>
                            </div>

                            <div className='flex gap-3 mb-4'>
                                <RiGithubFill className='w-7 h-7 rounded-full '/>
                                <RiLinkedinBoxFill className=' w-7 h-7 rounded-full '/>
                                <RiTwitterXFill className=' w-7 h-7 rounded-full' />
                                <RiInstagramFill className=' w-7 h-7 rounded-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}