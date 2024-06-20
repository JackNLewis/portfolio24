import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard(){
    return(
        <div className="flex mt-6 pt-6 border-t">
            <div className='absolute flex flex-col items-end pr-8 -left-20'>
                <h1 className="text-xl font-light text-primary border-b ">Jun</h1>
                <h1 className="text-4xl font-light text-primary">16</h1>
            </div>
            <Image src="/blog/chip.jpg" width={400} height={400} alt="img" className="rounded-lg shadow-lg"/>
            <div className="flex flex-col pl-12">
                <h1 className="text-2xl font-medium py-1">Nand2Tetris My Journey</h1>
                <p className='text-black text-opacity-50 w-96 py-3 mb-8'>Check out my new neovim setup. It’s just a quick guide of some plugins which I’ve set up</p>
                <Link href={"#blog"} className="text-primary underline">Read More</Link>
            </div>
        </div>
    )
}