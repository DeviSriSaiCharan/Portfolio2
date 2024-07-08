import StackIcon from "tech-stack-icons"
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Skills(){

    useGSAP(() =>{

        gsap.registerPlugin(ScrollTrigger);

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger : '.Skills',
                scroll : 'body',
                start : "top 60%",
                // markers : true
            }
        })

        tl1.from('.Skills h2',{
            x : -200,
            opacity : 0,
            duration : 0.4
        },"as")
        tl1.from('.Skills .skill-card',{
            x : 50,
            opacity : 0,
            duration : 0.4,
            stagger : 0.05
        },"as")

    }, [])

    const mySkills = ['html5', 'css3', 'js', 'reactjs', 'tailwindcss', 'nodejs', 'mongodb', 'prisma', 'postgresql', 'shadcnui', 'c++', 'python', 'typescript', 'mysql', 'redis', 'git', 'github']

    return (
        <div id="Skills" className="Skills p-4  w-full bg-[#F8F0EC] text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            <div className="w-4/5 h-5/6 m-auto p-10  rounded-lg">
                <h2 className='text-5xl font-semibold mb-20 tracking-wide text-center w-full px-6 text-gray-900'>My Skills</h2>
                <div className="flex gap-20 flex-wrap w-5/6 m-auto justify-center">
                    {mySkills.map((skill) => <SkillCard key={skill} tech={skill}/>)}
                </div>
            </div>
        </div>
    )
}

function SkillCard({ tech }) {


    return (
        <div className="skill-card relative flex flex-col items-center group">
            <div className="bg-blue-400 text-white absolute text-center border rounded px-2 py-1 -top-10 transform transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                {tech.toUpperCase()}
            </div>
            <StackIcon className="w-14" name={tech} />
        </div>
    );
}

