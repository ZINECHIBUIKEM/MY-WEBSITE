import { HamburgerMenu } from "../utils/HamburgerMenu";
import { Rightbar } from "./Rightbar";
import whiteZ from "../assets/icons/white-z.png";
import blackZ from "../assets/icons/black-z.png"
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

export function Header({ setIsopen, isOpen, lightmode, setLightmode }) {

  function toggleMode() {
    setLightmode(!lightmode);
  }

  const headerLogo = lightmode ? blackZ : whiteZ;

  return (
    <>
      <div className={`fixed flex flex-row px-[10vw] items-center justify-between shadow-lg/3 right-0 top-0 w-screen backdrop-blur-lg z-20 min-h-15 h-[10vh] ${lightmode ? "bg-white/20" : "bg-[#1D1D1F]/90"}`} >
        <div>
          <img src={headerLogo} className="w-13" />
        </div>

        <div className="flex flex-row shrink-0 w-auto gap-[5vw] items-center cursor-pointer lg:gap-[5vw]">
          <a href="https://wa.me/+2348101089190?text=Hi%20there,%20I%20want%20to%20talk%20about%20building%20a%20website." target="_blank">
            <button className={lightmode ? "hidden text-[#ffffff] transition-all ease-in-out duration-100 bg-black rounded-4xl hover:text-black hover:bg-black/0 lg:flex" : "hidden text-[#1D1D1F] transition-all ease-in-out duration-100 bg-white rounded-4xl hover:text-white hover:bg-white/0 lg:flex"}>
              Lets talk
            </button>
          </a>


          <div className="flex items-center justify-center w-8 h-8" onClick={toggleMode}>
            {lightmode ? <img src={moon} className="w-6" /> : <img src={sun} className="w-6" />}
          </div>


          <HamburgerMenu setIsopen={setIsopen} isOpen={isOpen} lightmode={lightmode} />
        </div>
      </div>

      <Rightbar isOpen={isOpen} setIsopen={setIsopen} lightmode={lightmode} />
    </>


  )
}