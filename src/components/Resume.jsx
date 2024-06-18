import Head from './HeadOfData';
import { FaGraduationCap } from "react-icons/fa6";
export default function Resume() {
  const graduation=[
    {
      id:1,
      time:'2024(jan)-2024(may)',
      college:'LWS-(Learn With Sumit)',
      location:'Dhaka',
      sub:'Frontend(React-Next.js)'

    },
    {
      id:2,
      time:'2018-2023',
      college:'National University',
      location:'Gazipur',
      sub:'BSc in Mathematics'

    },
    {
      id:3,
      time:'2016-2018',
      college:'Collectorate School and College',
      location:'Rangpur',
      sub:'HSC'

    },
    


  ]
  return (
    <div>
       <Head head={'Resume'}/>
       <div>
        <div>
          <h2 className='flex gap-2 border-b-2 border-[#86c232] w-fit'><span className='translate-y-[1px] text-[20px] text-[#86c232]'><FaGraduationCap /></span>Education</h2>
          {}
        </div>
       </div>
    </div>
  );
}

function Education(){
  
}