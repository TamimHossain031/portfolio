import { useState } from "react";
import { BsPersonWorkspace } from "react-icons/bs";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRegUser,
} from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { PiCertificate } from "react-icons/pi";
import { RiContactsBook3Line } from "react-icons/ri";
export default function Nav() {
  const [show, setShow] = useState(true);

  const menu = [
    {
      name: "about",
      logo: <FaRegUser />,
    },
    {
      name: "resume",
      logo: <HiOutlineDocumentText />,
    },
    {
      name: "works",
      logo: <BsPersonWorkspace />,
    },
    {
      name: "certificate",
      logo: <PiCertificate />,
    },
    {
      name: "contact",
      logo: <RiContactsBook3Line />,
    },
  ];
  return (
    <>
      <nav
        className={`flex flex-col bg-white/50 dark:bg-[#22303c]/30 transition-all duration-500 backdrop-blur-[20px] w-fit fixed top-[10%] right-[${
          show ? "0px" : "-100px"
        }]  p-2 rounded-md mx-auto shadow-xl justify-around`}
      >
        <button
          className="absolute top-[20px] left-[-50px]  bg-gradient-to-r text-white from-[#FC2A68] to-[#F93817] size-[30px] flex justify-center items-center"
          onClick={() => setShow((prev) => !prev)}
        >
          {show ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
        {menu &&
          menu.map((single, index) => (
            <Link key={crypto.randomUUID()} data={single} />
          ))}
      </nav>
    </>
  );
}

function Link({ data }) {
  const { name, logo } = data;
  return (
    <a
      href={`#${name}`}
      className="text-[18px] flex flex-col justify-center align-middle items-center size-[60px] bg-slate-300/30 dark:text-white dark:bg-white/10 m-[3px] gap-[6px] shadow-md rounded-sm hover:transition-all hover:text-white hover:to-[#FC2A68] hover:from-[#F93817] hover:bg-gradient-to-tr"
    >
      {logo}
      <span className="capitalize text-[10px]">{name}</span>
    </a>
  );
}
