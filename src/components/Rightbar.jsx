import linkedin from "../assets/icons/linkedin.svg";
import behance from "../assets/icons/behance.svg";
import instagram from "../assets/icons/instagram.svg";
import github from "../assets/icons/github.svg";
import linkedinBlack from "../assets/icons/linkedin-black.svg";
import behanceBlack from "../assets/icons/behance-black.svg";
import instagramBlack from "../assets/icons/instagram-black.svg";
import githubBlack from "../assets/icons/github-black.svg";


export function Rightbar({ isOpen, setIsopen, lightmode }) {

  function closeRightbar() {
    setIsopen(false);
  };


  return (
    <div className="z-40">
      <div className={`fixed flex flex-col items-start px-[8vw] pt-[12vh] backdrop-blur-lg transition-all ease-in-out duration-500 right-0 top-0 w-[80vw] h-screen lg:w-[50vw] ${lightmode ? "bg-white/90 text-black" : "bg-[#1D1D1F]/90 text-white"} h-screen z-10 ${isOpen ? "" : "translate-x-310"}`}>
        <span className="text-4xl font-bold">
          ZINE
        </span>
        <ul className="flex flex-col items-start gap-5 pt-5 pb-20">
          <li className="opacity-70 hover:opacity-100 hover:cursor-pointer">
            Home
          </li>
          <li className="opacity-70 hover:opacity-100 hover:cursor-pointer">
            About
          </li>
          <li className="opacity-70 hover:opacity-100 hover:cursor-pointer">
            Portfolio
          </li>
          <a href="https://wa.me/8101089190?text=Hi%20there,%20I%20want%20to%20talk%20about%20building%20a%20website." target="_blank">
            <li className="opacity-70 hover:opacity-100 hover:cursor-pointer">
              Contact
            </li>
          </a>

        </ul>

        <div className="flex flex-col items-start w-full gap-2 pb-10">
          <span className="text-2xl font-bold">INFORMATION</span>
          <h3 className="transition-all duration-300 ease-in-out cursor-pointer opacity-70 hover:opacity-100">+234 810 108 9190</h3>
          <h3 className="transition-all duration-300 ease-in-out cursor-pointer opacity-70 hover:opacity-100">Etukemkachibuikem@gmail.com</h3>
          <h3 className="transition-all duration-300 ease-in-out cursor-pointer opacity-70 hover:opacity-100">Imo, Nigeria.</h3>
        </div>
        <div className="flex flex-col items-start w-full my-10">
          <span className="text-2xl font-bold">FOLLOW ME</span>
          <div className="flex flex-row w-[80%] justify-between mt-5">
            {/* IMPORT ICONS COMPONENTS FOR SOCIAL MEDIA */}
            <a href="https://github.com/ZINECHIBUIKEM" target="_blank">
              <div className={`flex justify-center items-center border ${lightmode ? "border-black" : "border-white"} rounded-full w-10 h-10`}>
                <img src={lightmode ? githubBlack : github} className="w-6" />
              </div>
            </a>

            <a href="https://linkedin.com/in/etukemka-chibuikem-890a58328" target="_blank">
              <div className={`flex justify-center items-center border ${lightmode ? "border-black" : "border-white"} rounded-full w-10 h-10`}>
                <img src={lightmode ? linkedinBlack : linkedin} className="w-4" />
              </div>
            </a>

            <a href="https://www.instagram.com/zinexpression?igsh=N3E4NDZtdjZudXox" target="_blank">
              <div className={`flex justify-center items-center border ${lightmode ? "border-black" : "border-white"} rounded-full w-10 h-10`}>
                <img src={lightmode ? instagramBlack : instagram} className="w-4" />
              </div>
            </a>

            <a href="https://www.behance.net/etukemkchibuik1" target="_blank">
              <div className={`flex justify-center items-center border ${lightmode ? "border-black" : "border-white"} rounded-full w-10 h-10`}>
                <img src={lightmode ? behanceBlack : behance} className="w-4" />
              </div>
            </a>

          </div>
        </div>
      </div>


      {lightmode ? <div className={`fixed transition-all ease-in-out duration-300 top-0 right-0 z-0 w-screen h-screen ${isOpen ? "bg-white/80 opacity-100 visible" : "bg-black/0 invisible"}`} onClick={closeRightbar} /> : <div className={`fixed transition-all ease-in-out duration-300 top-0 right-0 z-0 w-screen h-screen ${isOpen ? "bg-black/80 opacity-100 visible" : "bg-black/0 invisible"}`} onClick={closeRightbar} />}
    </div>
  )
}