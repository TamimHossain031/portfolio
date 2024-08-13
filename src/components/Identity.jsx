import { AiOutlineUser } from "react-icons/ai";
import { GrDocumentDownload } from "react-icons/gr";
import resume from "../assets/TAMIM_2.pdf";
import author from "../assets/[removal.ai]_tmp-638332ed500fc.png";
import Index from "./Index";
import { motion } from "framer-motion";
import Social from "./Social";
export default function Identity() {
  return (
    <motion.section className="bg-white/30 dark:bg-[#22303c]/30  dark:text-[#fff] w-[85%] h-fit mx-auto mt-10 z-2 relative backdrop-blur-[20px] rounded-md shadow-2xl p-[20px] pt-[140px] md:w-[40%] xl:w-[30%]"
    initial={{ opacity: 0, x:'-100px' }}
    animate={{ opacity: 1, x:'0' }}
    transition={{ duration: 0.5 }}
    >
      <div className="size-[160px] md:size-[200px] bg-red-400 mx-auto absolute top-[-80px] left-[50%] translate-x-[-50%] rounded-md overflow-hidden">
        <img
          src={author}
          alt="tamim"
          className="w-full rounded-md drop-shadow-[1px_1px_5px_black] "
        />
      </div>
      <h1 className="text-xl font-[400] tracking-wide flex gap-2 mx-auto w-fit bg-white/10 p-3 rounded-full backdrop-blur-[50px]">
        <AiOutlineUser /> <span className="mt-[-4px]">Tamim Hossain</span>
      </h1>
      <p className="font-[300] text-sm text-black dark:text-white pt-2 tracking-wider mb-5">
        Web Designer & Developer(FrontEnd)
      </p>
      <Social />
      <Index />

      <a
        className="bg-gradient-to-r from-[#FC2A68] to-[#F93817] hover:bg-gradient-to-l transition-all px-3 py-2 mt-[30px] relative text-white rounded font-semibold tracking-wider flex max-w-[200px] mx-auto justify-center gap-3"
        href={resume}
        download="resume"
      >
        {" "}
        <span>
          <GrDocumentDownload />
        </span>{" "}
        <span className="mt-[-3px]">Download Cv</span>{" "}
      </a>
    </motion.section>
  );
}
