"use client" 

import AboutCard from "../components/aboutcard"
import Canvas from "../components/canvas";


export default function About() {

    const cards: {
        fill: boolean
    }[] = [
        {
            fill: true
        },
        {
            fill: false
        },
        {
            fill: false
        },
    ]

    return(
        <div className="relative sm:h-screen min-h-screen flex flex-col items-start mt-12 pt-64" id="about">
            {/* <Canvas pointIndex={3} width={800} styles="absolute top-10 right-0"/> */}
            
            <div className="relative pt-48 w-4/5 mx-auto">
                <h1 className="text-2xl font-medium text-primary">about.</h1>
                <h1 className="text-4xl font-medium py-1">Here’s a bit about me</h1>
                <h2 className="text-black text-opacity-50 w-96 py-3 mb-40">Check out my journey and see some of the major milestones I’ve hit on the way.</h2>
                <div className="flex w-full ">
                    <span className="block absolute w-full h-6 border-b-2 border-secondary border-dashed -z-10"/>

                
                    {
                        cards.map((card, i) => <AboutCard key={i} cardFill={card.fill}/>)
                    }
                    
                </div>
            </div>
        </div>
    )
}
