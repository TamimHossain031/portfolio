import { FaTools } from "react-icons/fa";
import {
  FaCss3Alt,
  FaGraduationCap,
  FaHtml5,
  FaPersonSkiingNordic,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp } from "react-icons/si";
import Head from "./HeadOfData";
export default function Resume() {
  const graduation = [
    {
      id: 1,
      time: "2024 (Jan) - 2024 (May)",
      college: "LWS-(Learn With Sumit)",
      location: "Dhaka",
      sub: "Frontend(React-Next.js)",
      color: "bg-[#86c232]/20",
    },
    {
      id: 2,
      time: "2018-2023",
      college: "National University",
      location: "Gazipur",
      sub: "BSc in Mathematics",
      color: "bg-[#e64398]/20",
    },
    {
      id: 3,
      time: "2016-2018",
      college: "Collectorate School and College",
      location: "Rangpur",
      sub: "HSC",
      color: "bg-[#d6ce15]/20",
    },
  ];

  const skill = [
    {
      id: 1,
      logo: <FaHtml5 />,
      name: "HTML5",
      color: "text-[#F75431]",
      bg: "bg-[#F75431]",
      progress: 90,
    },
    {
      id: 2,
      logo: <FaCss3Alt />,
      name: "CSS3",
      color: "text-[#146EB0]",
      bg: "bg-[#146EB0]",
      progress: 90,
    },
    {
      id: 3,
      logo: <IoLogoJavascript />,
      name: "Javascript",
      color: "text-[#EFD81D]",
      bg: "bg-[#EFD81D]",
      progress: 85,
    },
    {
      id: 4,
      logo: <SiPhp />,
      name: "php",
      color: "text-[#858EB8]",
      bg: "bg-[#858EB8]",
      progress: 80,
    },
  ];
  return (
    <div>
      <Head head={"Resume"} />
      <div>
        {/* Education section */}
        <div className="grid gap-4 my-4">
          <h2 className="flex gap-2 border-b-2 border-[#86c232] w-fit">
            <span className="translate-y-[1px] text-[20px] text-[#86c232]">
              <FaGraduationCap />
            </span>
            Education
          </h2>
          {graduation.map((single) => (
            <Education key={single.id} data={single} />
          ))}
        </div>

        {/* skill section */}
        <div className="my-4 ">
          <h2 className="flex gap-2 border-b-2 border-[#e64398] w-fit mb-4">
            <span className="translate-y-[1px] text-[20px] text-[#e64398]">
              <FaPersonSkiingNordic />
            </span>
            Working Skills
          </h2>
          {skill.map((single) => (
            <Skill key={single.id} data={single} />
          ))}
        </div>

        {/* tools and technology section */}
        <div>
          <h2 className="flex gap-2  border-b-2 border-[#14a098] w-fit">
            <span className="translate-y-[1px] text-[20px] text-[#14a098]">
              <FaTools />
            </span>
            Tools & Technologies
          </h2>
          <div className="backdrop-blur-[20px] [&>h2]:mt-[12px] [&>h2]:border-b-[#cb2d6f] bg-[#15202b]/10 p-3 text-left dark:bg-white/10 my-4 rounded-md">
            <p className='text-sm'>
              I am proficient in a wide range of tools and technologies,
              including but not limited to:{" "}
            </p>
            <h2 className="my-2 text-sm border-b-2  w-fit">
              Language :
            </h2>
            <p>HTML , CSS , Javascript , PHP , C </p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
              Frameworks :
            </h2>
            <p>Next.js</p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
              Library :
            </h2>
            <p>React.js , jQuery </p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
              Design Tools :
            </h2>
            <p>Figma, Photoshop</p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
              Version Control :
            </h2>
            <p>Git, GitHub </p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
            Content Management Systems :
            </h2>
            <p>Wordpress</p>
            <h2 className="my-2 border-b-2 text-sm  w-fit">
            Database :
            </h2>
            <p>MySQL , Firebase</p>
            
          </div>
        </div>
      </div>
    </div>
  );
}

function Education({ data }) {
  const { time, college, location, sub, color } = data;
  return (
    <div
      className={`text-left px-2 py-4 rounded-md grid gap-3 backdrop-blur-[2px] ${color}`}
    >
      <p className="text-gray-500 dark:text-gray-200 text-xs">{time}</p>
      <p className="text-sm">
        {sub} -{" "}
        <span className="text-xs text-gray-600 dark:text-gray-200">
          {college}
        </span>
      </p>
      <p className="text-xs">{location}</p>
    </div>
  );
}

function Skill({ data }) {
  const { color, logo, name, progress, bg } = data;
  return (
    <div
      className={`text-left px-2 py-4 backdrop-blur-[20px] bg-[#15202b]/10  dark:bg-white/10 flex`}
    >
      <div className="grid gap-1 w-[20%]">
        <span
          className={`${color} ${
            name == "Javascript" ? "bg-black text-[20px] w-fit" : "text-[25px]"
          }`}
        >
          {logo}
        </span>
        <span className="text-xs">{name}</span>
      </div>
      <div className="w-[70%] h-[4px] bg-white mt-[15px] rounded-full">
        <div className={`w-[${progress}%] ${bg} h-[4px] rounded-full`}>
          <span className="float-right pt-2 text-xs">{progress} % </span>
        </div>
      </div>
    </div>
  );
}
