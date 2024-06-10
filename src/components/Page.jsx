import { BsFillMoonStarsFill } from "react-icons/bs";
import { GoSun } from "react-icons/go";
import Identity from "./Identity";
import AllDetails from "./AllDetails";
export default function Page({ dark, handleDark }) {
  return (
    <main className="w-[100dvw] min-h-[100dvh] bg-[#f1faff] dark:bg-[#15202B] relative overflow-hidden overscroll-y-auto pb-5">
      <div className="size-[200px] md:size-[300px] animate-blob bg-purple-500 fixed z-1 rounded-full top-1/2 left-1/2 translate-x-[-80%] translate-y-[-30%] blur-[80px] dark:blur-[50px]"></div>
      <div className="size-[200px] md:size-[300px] bg-[#eb3b5a] fixed z-1 rounded-full top-0 left-10 translate-x-[-50%] translate-y-[-50%] blur-[80px] dark:blur-[50px]"></div>
      <div className="size-[200px] md:size-[300px] bg-lime-400 fixed z-1 rounded-full top-[100px] right-[-200px] translate-x-[-50%] translate-y-[-50%] blur-[100px] dark:blur-[40px]"></div>
      <header className="w-[100dvw] h-[100px] z-2 p-4 flex justify-between relative">
        <div></div>
        <button
          className="size-10 bg-white/60 hover:bg-white dark:bg- transition-colors text-blue-900 fixed top-5  right-5 z-20 grid justify-center items-center rounded-md "
          onClick={handleDark}
        >
          {dark ? <GoSun /> : <BsFillMoonStarsFill />}
        </button>
      </header>
      <section className='flex flex-col gap-5'>
        <Identity />
      
      </section>
    </main>
  );
}
