import linkedin from "../assets/icons/linkedin.svg";
import behance from "../assets/icons/behance.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";


export function Footer() {
  return (
    <footer className="flex flex-col items-center pt-15 pb-10 bg-[#1D1D1F] w-screen">
      <span className="text-white text-4xl font-bold hover:cursor-pointer">Ready to <span className="transition-opacity ease-in-out duration-300 opacity-30 hover:opacity-100">work</span> on the next big solution</span>


      <div className="flex flex-row pt-15 px-7 gap-[10vw]">
        <a href="https://linkedin.com/in/etukemka-chibuikem-890a58328" target="_blank">
          <div className="flex justify-center items-center border border-white rounded-full w-10 h-10 cursor-pointer">
            <img src={linkedin} className="w-4" />
          </div>
        </a>
        <a href="https://github.com/ZINECHIBUIKEM" target="_blank">
          <div className="flex justify-center items-center border border-white rounded-full w-10 h-10 cursor-pointer">
            <img src={github} className="w-6" />
          </div>
        </a>
        <a href="https://www.instagram.com/zinexpression?igsh=N3E4NDZtdjZudXox" target="_blank">
          <div className="flex justify-center items-center border border-white rounded-full w-10 h-10 cursor-pointer">
            <img src={instagram} className="w-4" />
          </div>
        </a>
        <a href="https://www.behance.net/etukemkchibuik1" target="_blank">
          <div className="flex justify-center items-center border border-white rounded-full w-10 h-10 cursor-pointer">
            <img src={behance} className="w-4" />
          </div>
        </a>
      </div>

      <div className="bg-amber-50/10 w-[80vw] h-px mt-20" />


      <div className="flex flex-col px-7 pt-20 w-full items-start gap-2 cursor-default">
        <span className="font-bold text-3xl">
          Location
        </span>
        <span className="opacity-50">
          Imo, Nigeria.
        </span>
      </div>
      <div className="flex flex-col px-7 pt-20 w-full items-start gap-2">
        <span className="font-bold text-3xl cursor-default">
          Contact
        </span>
        <span className="opacity-50">
          +234 810 108 9190
        </span>
        <span className="opacity-50">
          Etukemkachibuikem@gmail.com
        </span>
      </div>

      <div className="bg-amber-50/10 w-[80vw] h-px mt-20" />


      <span className="transition-all ease-in-out duration-300 text-white text-[12px] font-thin mt-20 cursor-pointer opacity-50 hover:opacity-100">
        © 2026 @zinexpression. All rights reserved.
      </span>
    </footer>
  )
}