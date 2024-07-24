import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Disney from '../assets/Disney.png';
import PortfolioImg from '../assets/PortfolioImg.png';
import laptopImg from '../assets/laptopImg.png';

gsap.registerPlugin(ScrollTrigger);

export default function Project() {
    const projectsRef = useRef([]);

    useEffect(() => {
        projectsRef.current.forEach((el, index) => {
            gsap.fromTo(el, 
                {
                    x: index % 2 === 0 ? -200 : 200,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 80%",
                        end: "bottom 60%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    }, []);

    const projects = [
        {
            id: 1,
            title: 'Disney+ Clone',
            description: 'Disney+ is a clone of Disney+ Hotstar, built with React and Tailwind CSS using TheMovieDB API. It features categorized movie lists with images for a seamless user experience. This project demonstrates dynamic rendering and responsive design proficiency.',
            image: Disney,
            live: 'https://hotstar-clone-rust.vercel.app/',
            demo: 'https://github.com/DeviSriSaiCharan/Hotstar-Clone',
            techStack: ['React', 'Tailwind CSS']
        },
        {
            id: 2,
            title: 'Portfolio',
            description: 'This portfolio, built with React and Tailwind CSS, showcases my professional journey and projects. It includes sections for About Me, Skills, Projects, and Contact, emphasizing a clean and user-friendly design. This project highlights my ability to create engaging web applications.',
            image: PortfolioImg,
            live: '',
            demo: 'https://github.com/DeviSriSaiCharan/Portfolio2',
            techStack: ['React', 'Tailwind CSS']
        },
        {
            id: 3,
            title: 'Wallet App',
            description: 'It is a simple wallet app where the users can send or receive money from this wallet app',
            image: laptopImg,
            live: '',
            demo: 'https://github.com/DeviSriSaiCharan/Wallet_App',
            techStack: ['React', 'Tailwind CSS', 'Express', 'MongoDB', 'JWT', 'ZOD']
        },
        {
            id: 4,
            title: 'Blog Website',
            description: 'It is a simple blog website where the users can create their own blog and can read others blogs, can like, comment and even bookmark their favorite blogs. I implemented real-time likes and comments using web sockets.',
            image: laptopImg,
            live: '',
            demo: '',
            techStack: ['React', 'Tailwind CSS', 'Express', 'Prisma', 'Postgres', 'Typescript', 'JWT', 'Sockets.IO']
        }
    ];

    return (
        <div className="project p-10 py-10 h-fit w-full bg-[#F8F0EC] text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-4/5 h-full ">
                <h2 className='alt underline decoration-2 underline-offset-4 decoration-wavy text-5xl font-semibold mb-14 tracking-wide text-center w-full px-6 text-gray-900'>My Projects</h2>
                <div className='main h-5/6 flex flex-col items-center p-6 gap-20 project-cards overflow-hidden'>
                    {projects.map((p, index) => (
                        <ProjectCard 
                            key={p.id} 
                            reverse={p.id % 2 !== 0} 
                            image={p.image} 
                            title={p.title} 
                            description={p.description} 
                            techStack={p.techStack} 
                            live={p.live} 
                            demo={p.demo} 
                            ref={el => projectsRef.current[index] = el}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

const ProjectCard = React.forwardRef(({ image, reverse, title, description, techStack, live, demo }, ref) => {
    return (
        <div ref={ref} className='hover:scale-110 hover:ease-linear duration-200 h-96 w-4/5 drop-shadow-xl p-4 bg-white rounded-xl shadow-sm '>
            <div className={`flex gap-4 ${reverse ? 'flex-row-reverse' : ''}`} >
                <div className='h-[22rem] w-2/5 flex items-center'>
                    <img src={image} className='h-4/5 object-contain' alt={title} />
                </div>
                <div className='px-2 py-6 w-3/5 flex flex-col justify-between'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='font-semibold text-4xl'>{title}</h2>
                        <p className='text-gray-600'>{description}</p>
                        <div className='flex flex-wrap gap-4'>
                            {techStack.map((tech, index) => <Tech key={index} tech={tech} />)}
                        </div>
                    </div>
                    <div className={`flex gap-10 underline font-semibold ${!reverse ? 'flex-row-reverse' : ''}`}>
                        {live && <a href={live} target="_blank" rel="noopener noreferrer">Live</a>}
                        {demo && <a href={demo} target="_blank" rel="noopener noreferrer">Repo</a>}
                    </div>
                </div>
            </div>
        </div>
    );
});

function Tech({ tech }) {
    return (
        <div className='cursor-default border border-blue-400 py-2 px-4 text-center hover:bg-transparent hover:text-blue-400 hover:border rounded-md font-semibold bg-blue-400 text-white'>
            <p>{tech}</p>
        </div>
    );
}
