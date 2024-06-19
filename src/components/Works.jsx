import Head from "./HeadOfData";
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
      <div>
          <div className='max-w-[320px] bg-slate-300/30 dark:bg-white/10 backdrop-blur-[50px] h-[300px]'>

          </div>
      </div>
    </div>
  );
}
