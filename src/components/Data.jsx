import { useContext,useEffect,useState,Suspense } from "react";
import { SingleData } from "../Context";
import { lazyLoad } from "../utiles/lazyLoad";
import { motion } from "framer-motion";

export default function Data() {
  const { data } = useContext(SingleData);
  const [selected,setSelected]=useState(null)

  const loadDemo = async (data) => {
    const Demo = await lazyLoad(data);

    return <Demo />;
  };

  const selectDemo=async()=>{
    const DemoComponent = await loadDemo(data);
    setSelected(DemoComponent)
  }

 

 useEffect(()=>{

    selectDemo()

  },[data])


  return (
    <motion.section className='w-[85%] section-bg max-h-[600px] overflow-y-scroll no-scrollbar'
    initial={{ opacity: 0, x:'50px' }}
    animate={{ opacity: 1, x:'0' }}
    transition={{ duration:0.5 }}
    >     
      <Suspense fallback={<h1>Loading....</h1>}>
      {selected}
      </Suspense>
     
    </motion.section>
  );
}
