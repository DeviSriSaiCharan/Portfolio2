

export default function Project(){

    return (
        <div className="project p-4 h-screen w-full bg-gray-100 text-gray-800 flex flex-col items-center justify-center overflow-hidden">
            <h2 className="text-5xl font-bold mb-6 tracking-wide text-left w-full px-6 text-gray-900">Projects</h2>
            <div className="bg-white w-full h-5/6 m-auto p-10 flex justify-between items-center rounded-lg shadow-lg">
                <div className="w-full bg-red-400 h-5/6 flex gap-10 items-center">
                    <ProjectCard/>
                    <ProjectCard/>
                    <ProjectCard/>
                </div>
            </div>
        </div>
    )
}

function ProjectCard(){

    return (
        <div className="card bg-blue-600 h-5/6 w-1/3 p-4 flex-col">
            <img className="object-cover w-full h-3/5" src="https://plus.unsplash.com/premium_photo-1718119453300-73be4e1b6212?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 className="bg-yellow-300">Title Of Project</h3>
            <p>Tech Stack</p>
            <div>
                <a href="#">Demo</a>
                <a href="#">Repo</a>
            </div>
        </div>
    )
}