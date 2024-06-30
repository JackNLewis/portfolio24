"use client"
import SkillCard from "../components/skillscard"
import Canvas from "../components/canvas"

export default function Skills() {
 
    return(
        <div>
            {/* <Canvas styles="absolute" pointIndex={4} /> */}
            <div className="relative h-screen flex items-start mt-12 justify-between items-center w-4/5 mx-auto" id="skills">
                <div className="relative pt-48">
                    <h1 className="text-2xl font-medium text-primary">more...</h1>
                    <h1 className="text-4xl font-medium py-1">Skills I’ve picked up</h1>
                    <h2 className="text-black text-opacity-50 w-96 py-3 mb-8">If you want to have a better look at my qualifications check out my resume below</h2>
                    <button className="transition duration-500 ease-in-out bg-primary hover:bg-primaryDark font-light text-white py-3 px-6 rounded-md my-12">
                    Download CV
                    </button>
                </div>
                <div className="flex flex-col gap-y-6">
                    <SkillCard />
                    <SkillCard />
                    <SkillCard />
                </div>
            </div>
        </div>
    )
}