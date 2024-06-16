"use client" 

export default function Skills() {
 
    return(
        <div className="relative w-screen h-screen flex flex-col items-start pl-32 mt-12" id="skills">
        <div className="relative pt-48">
            <h1 className="text-2xl font-medium text-primary">more...</h1>
            <h1 className="text-4xl font-medium py-1">Skills I’ve picked up</h1>
            <h2 className="text-black text-opacity-50 w-96 py-3 mb-8">If you want to have a better look at my qualifications check out my resume below</h2>
        </div>
        <button className="transition duration-500 ease-in-out bg-primary hover:bg-primaryDark font-light text-white py-3 px-6 rounded-md my-12">
        Download CV
        </button>
    </div>
    )
}