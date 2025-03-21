import Head from './HeadOfData.jsx';
import Cr from '../assets/Snip - Settings freeCodeCamp.org Mozilla Firefo.png';
import Cr2 from '../assets/Screenshot_2.png';
export default function Certificate() {
  return (
    <div>
      <Head head={'Certificate'}/>
      <div>
        <p className='text-left'>1 . Data Structure & Algorithm</p>
        <img src={Cr} alt="Certificate" />
        <p className='text-left pt-[20px]'>2. React.js - LWS (Learn with Sumit)</p>
        <p className='text-left pt-[20px]'>3. Node.js & Express.js </p>
         <img src={Cr2} alt="Certificate" />
      </div>
    </div>
  );
}
