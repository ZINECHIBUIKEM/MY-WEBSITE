import { HamburgerMenu } from "../utils/HamburgerMenu";
import { Rightbar } from "./Rightbar";
import whiteZ from "../assets/icons/white-z.png";
import sun from "../assets/icons/sun.svg";
import moon from "../assets/icons/moon.svg";

export function Header({ setIsopen, isOpen, lightmode, setLightmode }) {

  function toggleMode() {
    setLightmode(!lightmode);
  }

  return (
    <>
      <div className="fixed flex flex-row px-[10vw] items-center justify-between right-0 top-0 w-screen backdrop-blur-lg z-20 h-20 bg-[#1D1D1F]/90">
        <div>
          <img src={whiteZ} className="w-13" />
        </div>

        <div className="flex flex-row shrink-0 w-auto gap-[5vw] items-center cursor-pointer lg:gap-[5vw]">

          <button className="hidden text-[#1D1D1F] transition-all ease-in-out duration-100 bg-white rounded-4xl lg:flex">Lets talk</button>

          <div className="flex items-center justify-center w-8 h-8" onClick={toggleMode}>
            {lightmode ? <img src={moon} className="w-6" /> : <img src={sun} className="w-6" />}
          </div>


          <HamburgerMenu setIsopen={setIsopen} isOpen={isOpen} />
        </div>
      </div>

      <Rightbar isOpen={isOpen} setIsopen={setIsopen} />
    </>


  )
}