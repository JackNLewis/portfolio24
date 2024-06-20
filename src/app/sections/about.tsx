import AboutCard from "../components/aboutcard"

export default function About() {
    const cards = [
        {
            index : 0,
            fill: true
        },
        {
            index : 1,
            fill: false
        },
        {
            index : 2,
            fill: false
        }
    ]
    return(
        <div className="relative w-4/5 h-screen flex flex-col items-start mx-auto mt-12" id="about">
            <div className="relative pt-48 w-full">
                <h1 className="text-2xl font-medium text-primary">about.</h1>
                <h1 className="text-4xl font-medium py-1">Here’s a bit about me</h1>
                <h2 className="text-black text-opacity-50 w-96 py-3 mb-40">Check out my journey and see some of the major milestones I’ve hit on the way.</h2>
                <div className="flex w-full ">
                    <span className="block absolute w-full h-6 border-b-2 border-secondary border-dashed -z-10"/>
                    {cards.map((card, i) => <AboutCard key={i} fill={card.fill}/>)}
                </div>
            </div>
        </div>
    )
}