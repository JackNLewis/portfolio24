"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin,faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import Canvas from "../components/canvas"
 

export default function Contact() {
 
    return(
        <div className="relative">

        <Canvas pointIndex={7} height={250} styles="absolute bottom-0" />
        <div className="relative w-4/5 mx-auto h-screen flex justify-between items-start mt-12" id="contact">
            <div className="relative pt-48">
                <div>
                    <h1 className="text-2xl font-medium text-primary">interested?</h1>
                    <h1 className="text-4xl font-medium py-1">Lets get in touch</h1>
                    <h2 className="text-black text-opacity-50 w-96 py-3 mb-24">Reach out to me on any of my socials below if you have any questions, or send me a message on the right.</h2>
                </div>
                <div className="flex items-center mb-8">
                    <FontAwesomeIcon icon={faLinkedin} className="w-8 h-8" style={{color: "#5e5e5e"}}/>
                    <h1 className="text-grey py-3 pl-4">https://www.linkedin.com/in/jacknlewis</h1>
                </div>
                <div className="flex items-center mb-8">
                <FontAwesomeIcon icon={faGithub}  className="w-8 h-8" style={{color: "#5e5e5e"}}/>
                    <h1 className="text-grey py-3 pl-4">https://github.com/JackNLewis</h1>
                </div>
                <div className="flex items-center mb-8">
                    <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" style={{color: "#5e5e5e"}}/>
                    <h1 className="text-grey py-3 pl-4">jlewisdev@proton.me</h1>
                </div>
            </div>
                <form className="self-center flex flex-col justify-evenly shadow-lg border rounded-lg h-160 w-130 p-12">
                    <div>
                        <label className="block text-primary  mb-2" form="username">
                            Your Name:
                        </label>
                        <input className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" />
                    </div>
                    <div>
                        <label className="block text-primary mb-2" form="username">
                            Email:
                        </label>
                        <input className="shadow appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                    </div>
                    <div>
                        <label className="block text-primary mb-2" form="username">
                            Message:
                        </label>
                        <textarea rows={8} className="shadow resize-none appearance-none border rounded-lg w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" placeholder="Message" />
                    </div>
                    <button className="shadow-lg bg-primary hover:bg-primaryDark text-white w-full py-4 rounded-lg">Send</button>
                </form>
            </div>
        </div>
    )
}