import { useContext,useEffect,useState,Suspense } from "react";
import { SingleData } from "../Context";
import { lazyLoad } from "../utiles/lazyLoad";


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
    <section>
      <h1>All Data here...</h1>
      <Suspense fallback={<h1>Loading....</h1>}>
      {selected}
      </Suspense>
     
    </section>
  );
}
