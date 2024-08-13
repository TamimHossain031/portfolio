import { FaBehance, FaFacebookF, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Social() {
  const socialLinks = [
    {
      links: "https://www.facebook.com/massenger.net",
      icon: <FaFacebookF />,
      hover: "hover:bg-sky-500",
      color: "text-[#1773EA]",
    },
    {
      links: "https://x.com/TamimHo79904966",
      icon: <FaXTwitter />,
      hover: "hover:bg-[#15202b]",
      color: "text-[#000]",
    },
    {
      links: "https://github.com/TamimHossain031",
      icon: <FaGithub />,
      hover: "hover:bg-[#010409]",
      color: "text-[#000]",
    },
    {
      links: "https://www.behance.net/tamimhossain031",
      icon: <FaBehance />,
      hover: "hover:bg-[#d83f87]",
      color: "text-[#d83f87]",
    },
  ];
  return (
    <>
      <div className="flex w-fit mt-2 mx-auto *:p-2 *:bg-[#15202b]/10  dark:*:bg-white/10 *:rounded-md gap-2">
        {socialLinks &&
          socialLinks.map((social, index) => (
            <Link key={index} social={social} />
          ))}
      </div>
    </>
  );
}

function Link({ social }) {
  const { links, icon, hover, color } = social;
 
  return (
    <a
      className={`${hover} hover:text-white ${color} dark:text-white dark:hover:bg-fuchsia-600`}
      href={links}
      target="_blank"
    >
      {icon}
    </a>
  );
}
