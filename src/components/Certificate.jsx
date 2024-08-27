import Head from './HeadOfData.jsx';
import Cr from '../assets/Snip - Settings freeCodeCamp.org Mozilla Firefo.png';
export default function Certificate() {
  return (
    <div>
      <Head head={'Certificate'}/>
      <div>
        <p className='text-left'>1 . Data Structure & Algorithm</p>
        <img src={Cr} alt="Certificate" />
        <p className='text-left pt-[20px]'>2. React.js - LWS (Learn with Sumit)</p>
      </div>
    </div>
  );
}
