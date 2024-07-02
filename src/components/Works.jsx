import Head from "./HeadOfData";
import SingleWorks from "./SingleWorks";
import Gym from "../assets/work1.png";

export default function Works() {
  const works=[
    {
      id:1,
      type:'Front-End',
      name:'Gym Website',
      technology:'React,Tailwind CSS,Firebase',
      image:Gym
    }
  ]
  return (
    <div>
      <Head head={'Portfolio'}/>
      <div className='flex flex-col justify-center'>
       {works.map(single=> <SingleWorks key={single.id} data={single}/>)}
      </div>
    </div>
  );
}
