import {
  FaPencil,
  FaScrewdriverWrench,
  FaSwatchbook,
  FaWordpress,
} from "react-icons/fa6";
import { GiJourney } from "react-icons/gi";
import { PiNetwork } from "react-icons/pi";
import Head from './HeadOfData';
export default function About() {
  const myWork = [
    {
      id: 1,
      name: "Web Design",
      desc: "Crafting intuitive and attractive designs that capture the essence of your brand.",
      logo: <FaSwatchbook />,
      color: "bg-[#219C90]/20",
      txtColor: "text-[#219C90]",
    },
    {
      id: 2,
      name: "Web Development",
      desc: "Building responsive, scalable, and efficient websites using the latest technologies.",
      logo: <FaScrewdriverWrench />,
      color: "bg-[#f95ca4]/20",
      txtColor: "text-[#f95ca4]",
    },
    {
      id: 3,
      name: "UI/UX Design",
      desc: " Ensuring that your website is user-friendly and offers an engaging experience for your visitors.",
      logo: <FaPencil />,
      color: "bg-[#e43d12]/20",
      txtColor: "text-[#e43d12]",
    },
    {
      id: 4,
      name: "Wordpress Customization",
      desc: "Creating online stores that are easy to navigate and optimized for sales.",
      logo: <FaWordpress />,
      color: "bg-[#5680e9]/20",
      txtColor: "text-[#5680e9]",
    },
  ];
  return (
    <div className="text-left p-1">
      <Head head={'About'}/>
      <p className="text-sm leading-7">
        Hello! I'm Tamim, a passionate web designer and developer dedicated to
        crafting beautiful and functional websites.
      </p>
      <div className="mt-4 mb-2 flex gap-2 ">
        <span className="size-[30px] text-[20px] flex items-center justify-center bg-[#15202b]/10 dark:bg-white/10 rounded-md">
          <GiJourney />
        </span>
        <h2 className="font-semibold w-fit  border-b-2 border-b-red-400 pb-1">
          My Journey
        </h2>
      </div>

      <p className="text-sm leading-6">
        My journey in web design and development began 2 year's when I
        discovered my love for creating visually appealing and user-friendly
        websites. Since then, I've honed my skills in various programming
        languages, design tools, and frameworks to stay at the forefront of this
        ever-evolving field.
      </p>
      <div className="mt-4 mb-2 flex gap-2 ">
        <span className="size-[30px] text-[20px] flex items-center justify-center bg-[#15202b]/10 dark:bg-white/10 rounded-md">
          <PiNetwork />
        </span>
        <h2 className="font-semibold w-fit  border-b-2 border-b-red-400 pb-1 mb-3">
          What I Do
        </h2>
      </div>
      {myWork.map((singleData) => (
        <SingleWork key={singleData.id} data={singleData} />
      ))}
    </div>
  );
}

function SingleWork(data) {
  const { logo, name, desc, color, txtColor } = data.data;

  return (
    <div className={`flex gap-3 ${color} p-5 min-h-[200px] mb-3 backdrop-blur-[2px] rounded-xl`}>
      <div className={`w-[30%] text-[20px] mt-2 flex`}>
        <span
          className={`size-[40px] rounded-md flex justify-center py-[20%] ${color} ${txtColor}`}
        >
          {logo}{" "}
        </span>
      </div>
      <div>
        <h2 className="my-2">{name}</h2>
        <p className="text-sm leading-8 mt-5">{desc}</p>
      </div>
    </div>
  );
}
