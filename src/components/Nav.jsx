import { FaRegUser } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { BsPersonWorkspace } from "react-icons/bs";
import { PiCertificate } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
export default function Nav() {
    const menu=[
        {
            name:'about',
            logo:<FaRegUser />
        },
        {
            name:'resume',
            logo:<HiOutlineDocumentText />
        },
        {
            name:'works',
            logo:<BsPersonWorkspace />
        },
        {
            name:'certificate',
            logo:<PiCertificate />
        },
        {
            name:'contact',
            logo:<RiContactsBook3Line />
        },
    ]
  return (
    <>
      <nav className='flex bg-white/50 dark:bg-[#22303c]/30 backdrop-blur-[20px] w-full sticky top-0 p-2 rounded-md mx-auto shadow-xl justify-around'>
        {menu && menu.map((single,index)=> <Link key={crypto.randomUUID()} data={single}/>)}
      </nav>
    </>
  );
}

function Link({data}){
    const{name,logo}=data
    return(
        <a href={`#${name}`} className='text-[18px] flex flex-col justify-center align-middle items-center size-[60px] bg-slate-300/30 dark:text-white dark:bg-white/10 m-[3px] gap-[6px] shadow-md rounded-sm hover:transition-all hover:text-white hover:to-[#FC2A68] hover:from-[#F93817] hover:bg-gradient-to-tr'>{logo}<span className='capitalize text-[11px]'>{name}</span></a>
    )
}
