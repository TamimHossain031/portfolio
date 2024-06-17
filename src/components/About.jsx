import { GiJourney } from "react-icons/gi";
import { PiNetwork } from "react-icons/pi";
import { MdOutlineDesignServices } from "react-icons/md";
export default function About() {
  const myWork=[
    {
      id:1,
      name:'Web Design',
      desc:'Crafting intuitive and attractive designs that capture the essence of your brand.',
      logo:<MdOutlineDesignServices />,
      color:'#219C90'
    }
  ]
  return (
    <div className="text-left p-1">
     <div className='flex gap-6'>
      <h1 className='text-xl font-semibold mb-3'>About</h1>
      <span className='w-[180px] h-[3px] rounded-full inline-block bg-red-400 mt-4'></span>
     </div>
     <p className='text-sm leading-7'>Hello! I'm Tamim, a passionate web designer and developer dedicated to crafting beautiful and functional websites.</p>
     <div className='mt-4 mb-2 flex gap-2 '>
      <span className='size-[30px] text-[20px] flex items-center justify-center bg-[#15202b]/10 dark:bg-white/10 rounded-md'><GiJourney /></span>
     <h2 className='font-semibold w-fit  border-b-2 border-b-red-400 pb-1'>My Journey</h2>
     </div>
     
     <p className='text-sm leading-6'>My journey in web design and development began 2 year's when I discovered my love for creating visually appealing and user-friendly websites. Since then, I've honed my skills in various programming languages, design tools, and frameworks to stay at the forefront of this ever-evolving field.</p>
     <div className='mt-4 mb-2 flex gap-2 '>
      <span className='size-[30px] text-[20px] flex items-center justify-center bg-[#15202b]/10 dark:bg-white/10 rounded-md'><PiNetwork /></span>
     <h2 className='font-semibold w-fit  border-b-2 border-b-red-400 pb-1'>What I Do</h2>
     </div>
     {myWork.map(singleData=> <SingleWork key={singleData.id} data={singleData}/>)}

    </div>
  )
}

function SingleWork(data){
  const{logo,name,desc,color} = data.data;
  
  return(
    <div className='flex'>
      <div>{logo}</div>
      <div>
        <h2>{name}</h2>
        <p>{desc}</p>
      </div>
    </div>
  )
}