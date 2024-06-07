import { CgSmartphone } from "react-icons/cg";
import { FaCalendarAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
export default function Index() {
  const contacts = [
    {
      name: "phone",
      contact: "01609604791",
      logo: <CgSmartphone />,
      color: "text-[#FB2A67]",
    },
    {
      name: "email",
      contact: "tamimhossain031@gmail.com",
      logo: <MdOutlineMailOutline />,
      color: "text-[#0BC8B6]",
    },
    {
      name: "location",
      contact: "EPZ,Chittagong (present)",
      logo: <IoLocationSharp />,
      color: "text-[#5466E8]",
    },
    {
      name: "birthday",
      contact: "04-Feb-1998",
      logo: <FaCalendarAlt />,
      color: "text-[#F63B0F]",
    },
  ];

  return (
    <div className="bg-slate-300/30 dark:bg-white/10 backdrop-blur-[50px] w-full min-h-9 mt-2 p-2 rounded-md mb-10">
      {contacts &&
        contacts.map((single, index) => <Contact key={index} data={single} />)}
    </div>
  );
}

function Contact({ data }) {
  const { name, contact, logo, color } = data;

  return (
    <div className="flex border border-transparent hover:border-white/20 p-[1px] gap-1 rounded-sm">
      <span
        className={`size-[40px] text-[20px] flex items-center justify-center bg-[#15202b]/10 dark:bg-white/10 ${color} rounded-md`}
      >
        {logo}
      </span>
      <span className="flex flex-col items-start justify-start gap-1 ">
        {" "}
        <p className="text-[10px] capitalize">{name}</p>
        <p className="text-xs font-semibold">{contact}</p>
      </span>
    </div>
  );
}
