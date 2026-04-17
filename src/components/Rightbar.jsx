import linkedin from "../assets/icons/linkedin.svg";
import behance from "../assets/icons/behance.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";


export function Rightbar({ isOpen, setIsopen }) {

  function closeRightbar() {
    setIsopen(false);
  }
  return (
    <div className="flex transition-all duration-500 ease-in-out h-screen lg:hidden">
      <div className={`fixed flex flex-col items-start px-[8vw] pt-2 backdrop-blur-lg transition-all ease-in-out duration-300 right-0 top-20 w-[80vw] bg-[#1D1D1F]/90 h-screen z-10 ${isOpen ? "" : "translate-x-205"}`}>
        <span className="text-4xl font-bold">
          ZINE
        </span>
        <ul className="flex flex-col items-start pt-5 pb-20 gap-5">
          <li className="text-lg hover:cursor-pointer">
            Home
          </li>
          <li className=" hover:cursor-pointer">
            About
          </li>
          <li className="hover:cursor-pointer">
            Portfolio
          </li>
          <li className="hover:cursor-pointer">
            Contact
          </li>
        </ul>

        <div className="flex flex-col items-start gap-2 pb-10 w-full">
          <span className="font-bold text-2xl">INFORMATION</span>
          <h3 className="transition-all ease-in-out duration-300 cursor-pointer opacity-60 hover:opacity-100">+234 810 108 9190</h3>
          <h3 className="transition-all ease-in-out duration-300 cursor-pointer opacity-60 hover:opacity-100">Etukemkachibuikem@gmail.com</h3>
          <h3 className="transition-all ease-in-out duration-300 cursor-pointer opacity-60 hover:opacity-100">Imo, Nigeria.</h3>
        </div>
        <div className="flex flex-col items-start my-10 w-full">
          <span className="font-bold text-2xl">FOLLOW ME</span>
          <div className="flex flex-row w-[80%] justify-between mt-5">
            {/* IMPORT ICONS COMPONENTS FOR SOCIAL MEDIA */}
            <a href="https://github.com/ZINECHIBUIKEM" target="_blank">
              <div className="flex justify-center items-center border border-white rounded-full w-10 h-10">
                <img src={github} className="w-6" />
              </div>
            </a>

            <a href="https://linkedin.com/in/etukemka-chibuikem-890a58328" target="_blank">
              <div className="flex justify-center items-center border border-white rounded-full w-10 h-10">
                <img src={linkedin} className="w-4" />
              </div>
            </a>

            <a href="https://www.instagram.com/zinexpression?igsh=N3E4NDZtdjZudXox" target="_blank">
              <div className="flex justify-center items-center border border-white rounded-full w-10 h-10">
                <img src={instagram} className="w-4" />
              </div>
            </a>

            <a href="https://www.behance.net/etukemkchibuik1" target="_blank">
              <div className="flex justify-center items-center border border-white rounded-full w-10 h-10">
                <img src={behance} className="w-4" />
              </div>
            </a>

          </div>
        </div>
      </div>


      <div className={`fixed transition-all ease-in-out duration-300 bg-black/0 opacity-0 top-0 right-0 z-0 w-screen h-screen ${isOpen ? "bg-black/70 opacity-100" : "hidden"}`} onClick={closeRightbar} />
    </div>
  )
}