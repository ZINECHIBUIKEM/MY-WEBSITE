import linkedin from "../assets/icons/linkedin.svg";
import behance from "../assets/icons/behance.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";


export function Footer({ lightmode }) {
  return (
    <footer className={`flex flex-col items-center justify-between pt-[5vh] lg:pt-[10vh] w-screen h-[90vh] lg:h-[120vh] ${lightmode ? "bg-black" : "bg-[#1D1D1F]" }`}>
      <span className="px-4 text-4xl font-bold text-white hover:cursor-pointer">Ready to <span className="font-extrabold transition-opacity duration-300 ease-in-out opacity-30 hover:opacity-100">work</span> on the next <span className="font-extrabold transition-opacity duration-300 ease-in-out opacity-30 hover:opacity-100">big</span> solution</span>


      <div className="flex flex-row pt-[5vh] lg:pt-[10vh] px-7 gap-[10vw]">
        <a href="https://linkedin.com/in/etukemka-chibuikem-890a58328" target="_blank">
          <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full cursor-pointer">
            <img src={linkedin} className="w-4" />
          </div>
        </a>
        <a href="https://github.com/ZINECHIBUIKEM" target="_blank">
          <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full cursor-pointer">
            <img src={github} className="w-6" />
          </div>
        </a>
        <a href="https://www.instagram.com/zinexpression?igsh=N3E4NDZtdjZudXox" target="_blank">
          <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full cursor-pointer">
            <img src={instagram} className="w-4" />
          </div>
        </a>
        <a href="https://www.behance.net/etukemkchibuik1" target="_blank">
          <div className="flex items-center justify-center w-10 h-10 border border-white rounded-full cursor-pointer">
            <img src={behance} className="w-4" />
          </div>
        </a>
      </div>

      <div className="bg-amber-50/10 w-[80vw] h-px lg:mt-[5vh]" />


      <div className="flex flex-col px-7 lg:pt-[5vh] w-full items-start gap-2 cursor-default">
        <span className="text-3xl font-bold">
          Location
        </span>
        <span className="opacity-50 text-[1rem]">
          Remote, Nigeria.
        </span>
      </div>
      <div className="flex flex-col px-7 lg:pt-[5vh] w-full items-start gap-2">
        <span className="text-3xl font-bold cursor-default">
          Contact
        </span>
        <span className="opacity-50 text-[1rem]">
          +234 810 108 9190
        </span>
        <span className="opacity-50 text-[1rem]">
          etukemkachibuikem@gmail.com
        </span>
      </div>

      <div className="bg-amber-50/10 w-[80vw] h-px lg:mt-[5vh]" />


      <span className="transition-all ease-in-out duration-300 text-white text-[12px] font-thin pb-4 lg:mt-[5vh] cursor-pointer opacity-50 hover:opacity-100">
        © 2026 @zinexpression. All rights reserved.
      </span>
    </footer>
  )
}