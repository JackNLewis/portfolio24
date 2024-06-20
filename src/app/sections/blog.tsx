"use client" 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretUp, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import BlogCard from '../components/blogcard'
import { useState } from "react";

export default function Blog() {
    
    const [option,setOption] = useState<string>("Newest")

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        setOption(event.target.value)
        console.log(event.target.value)
    }

    return(
        <div className="relative w-screen min-h-screen flex flex-col items-center" id="blog">
        <div className="relative pt-48">
            <h1 className="text-2xl font-medium text-primary">blog</h1>
            <h1 className="text-4xl font-medium py-1">See some of my work</h1>
            <h2 className="text-black text-opacity-50 w-96 py-3 mb-40">Here’s a few projects I’ve worked on recently </h2>
        </div>
        <div className='relative'>
            <div className='flex justify-between'>
                <div className='relative flex items-center'>
                    <input className="transition ease-linear delay-100 border-2 placeholder:text-primary shadow border-gray-200 bg-white h-8 px-5 pr-16 rounded-full text-sm focus:outline-none focus:border-primary"
                    name="search" placeholder="Search"/>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='relative h-4 w-4 -left-8' style={{color: "#498F7E"}}/>
                </div>
                <div className='relative flex items-center'>
                    <select name="sort" onChange={(event) => setOption(event.target.value)} 
                    className='relative border focus:border-primary rounded text-primary text-light text-sm outline-none py-1 pl-2 pr-6 appearance-none shadow'>
                        <option>Newest</option>
                        <option>Oldest</option>
                    </select>
                    {option === "Newest" ? 
                    <FontAwesomeIcon className="relative -left-4" icon={faCaretDown} style={{color: "#498F7E"}}/> :
                    <FontAwesomeIcon className="relative -left-4" icon={faCaretUp} style={{color: "#498F7E"}}/>}
                </div>
            </div>
            <button type="submit" className="absolute right-0 top-0 mt-5 mr-4" />
           
            <BlogCard />
            <BlogCard />
        </div>
    </div>
    )
}




// style="enable-background:new 0 0 56.966 56.966;"