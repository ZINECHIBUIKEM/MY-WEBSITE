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
      <div className="fixed flex flex-row px-10 items-center justify-between right-0 top-0 w-screen backdrop-blur-lg z-20 h-20 bg-[#1D1D1F]/90">
        <div>
          <img src={whiteZ} className="w-13" />
          
        </div>
        <div className="flex flex-row shrink-0 w-auto gap-10 cursor-pointer">
          {lightmode ? <img src={moon} className="w-6" onClick={toggleMode} /> : <img src={sun} className="w-6" onClick={toggleMode} />}
          
          

          <HamburgerMenu setIsopen={setIsopen} isOpen={isOpen} />
        </div>
      </div>

      <Rightbar isOpen={isOpen} setIsopen={setIsopen} />
    </>


  )
}