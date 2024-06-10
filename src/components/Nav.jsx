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
import { Link } from "react-router-dom";
export default function Nav() {
  const [show, setShow] = useState(true);
  const [active, setActive] = useState("about");

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
        className={`flex flex-col bg-white/50 dark:bg-[#22303c]/30 transition-all duration-500 backdrop-blur-[20px] w-fit fixed top-[10%] ${
          show ? "right-[-100px]" : "right-[0px]"
        }  p-2 rounded-md mx-auto shadow-xl justify-around z-[1000]`}
      >
        <button
          className="absolute top-[20px] left-[-50px]  bg-gradient-to-r text-white from-[#FC2A68] to-[#F93817] size-[30px] flex justify-center items-center"
          onClick={() => setShow((prev) => !prev)}
        >
          {!show ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
        {menu &&
          menu.map((single, index) => (
            <SingleNav
              key={crypto.randomUUID()}
              data={single}
              active={active}
              onActive={() => setActive(single.name)}
            />
          ))}
      </nav>
    </>
  );
}

function SingleNav({ data, active, onActive }) {
  const { name, logo } = data;

  return (
    <button onClick={onActive}>
      <Link
        to={name}
        href={`#${name}`}
        className={`text-[18px] flex flex-col justify-center align-middle items-center size-[60px] bg-slate-300/30 dark:text-white dark:bg-white/10 m-[3px] gap-[6px] shadow-md rounded-sm hover:transition-all hover:nav-bg ${
          name == active ? "nav-bg" : ""
        }`}
      >
        {logo}
        <span className="capitalize text-[10px]">{name}</span>
      </Link>
    </button>
  );
}
