import Head from "./HeadOfData";
import SingleWorks from "./SingleWorks";
export default function Works() {
  const works=[
    {
      id:1,
      type:'FrontEnd mobile app',
      name:'Gym Website',
      technology:'React , Tailwind CSS , Firebase .'
    }
  ]
  return (
    <div>
      <Head head={'Portfolio'}/>
      <div className='flex flex-col justify-center'>
        <SingleWorks data={Works}/>
      </div>
    </div>
  );
}
