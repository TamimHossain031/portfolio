import author from '../assets/[removal.ai]_tmp-638332ed500fc.png';
import { AiOutlineUser } from "react-icons/ai";

import Social from './Social';
export default function Identity(){
    return (
            <section className='bg-white/30 dark:bg-[#22303c]/30 text-[#15202b] dark:text-[#fff] w-[80%] min-h-[400px] mx-auto mt-10 z-2 relative backdrop-blur-[20px] rounded-md shadow-2xl pt-[140px]'>	
            <div className='size-[160px] md:size-[200px] bg-red-400 mx-auto absolute top-[-80px] left-[50%] translate-x-[-50%] rounded-md overflow-hidden'>
                <img src={author} alt="tamim" className='w-full rounded-md drop-shadow-[1px_1px_5px_black] ' />
            </div>
            <h1 className='text-xl font-[400] tracking-wide flex gap-2 mx-auto w-fit bg-white/10 p-3 rounded-full backdrop-blur-[50px] tex'><AiOutlineUser /> <span className='mt-[-4px]'>Tamim Hossain</span></h1>
            <p className='font-thin text-black pt-2 tracking-wider'>Web Designer & Developer</p>
           <Social/>
         
            </section>
    );
}