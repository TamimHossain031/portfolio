import author from '../assets/[removal.ai]_tmp-638332ed500fc.png';
import { AiOutlineUser } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
export default function Identity(){
    return (
            <section className='bg-white/30 dark:bg-[#22303c]/30 text-[#15202b] dark:text-[#fff] w-[80%] min-h-[400px] mx-auto mt-10 z-2 relative backdrop-blur-[20px] rounded-md shadow-2xl pt-[140px]'>	
            <div className='size-[200px] bg-red-400 mx-auto absolute top-[-80px] left-[50%] translate-x-[-50%] rounded-md'>
                <img src={author} alt="tamim" className='w-full rounded-md drop-shadow-2xl ' />
            </div>
            <h1 className='text-xl font-[400] tracking-wide flex gap-2 mx-auto w-fit bg-white/10 p-3 rounded-full backdrop-blur-[50px] tex'><AiOutlineUser /> <span className='mt-[-6px]'>Tamim Hossain</span></h1>
            <p className='font-thin pt-2 tracking-wider'>Web Designer & Developer</p>
            <div className='flex w-fit mt-2 mx-auto *:p-2 *:bg-white/10 *:rounded-md gap-2'>
                <a className='hover:bg-sky-500' href='https://www.facebook.com/massenger.net' target='_blank'><FaFacebookF /></a>
                <a className='hover:bg-[#15202b]' href='https://x.com/TamimHo79904966' target='_blank'><FaXTwitter /></a>
                <a className='hover:bg-[#010409]' href='https://github.com/TamimHossain031' target='_blank'><FaGithub /></a>
               
                <a className='hover:bg-[#003ECB]' href='https://www.behance.net/tamimhossain031' target='_blank'><FaBehance /></a>
            </div>
         
            </section>
    );
}