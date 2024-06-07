import { FaBehance, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Social() {
  const socialLinks = [
    {
      links: "https://www.facebook.com/massenger.net",
      icon: <FaFacebookF />,
      hover: "bg-sky-500",
    },
    {
      links: "https://x.com/TamimHo79904966",
      icon: <FaXTwitter />,
      hover: "bg-[#15202b]",
    },
    {
      links: "https://github.com/TamimHossain031",
      icon: <FaGithub />,
      hover: "bg-[#010409]",
    },
    {
      links: "https://www.behance.net/tamimhossain031",
      icon: <FaBehance />,
      hover: "bg-[#003ECB]",
    },
  ];
  return (
    <>
      <div className='flex w-fit mt-2 mx-auto *:p-2 *:bg-[#15202b]/10  dark:*:bg-white/10 *:rounded-md gap-2' >{socialLinks && socialLinks.map((social,index) => <Link key={index} social={social}/>)}</div>
    </>
  );
}

function Link({ social }) {
    const{links,icon,hover} = social
    
  return <a className={`hover:${hover} hover:text-white`} href={links} target='_blank'>{icon}</a>;
}
