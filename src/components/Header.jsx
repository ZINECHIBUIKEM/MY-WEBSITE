import { HamburgerMenu } from "../utils/HamburgerMenu";
import { Rightbar } from "./Rightbar";

export function Header({ setIsopen, isOpen }) {
  return (
    <>
      <div className="fixed flex flex-row px-5 items-center justify-between right-0 top-0 w-screen z-20 h-20 bg-white/50">
        <div>
          hi
        </div>
        <div>
          <HamburgerMenu setIsopen={setIsopen} isOpen={isOpen} />
        </div>
      </div>

      <Rightbar isOpen={isOpen} setIsopen={setIsopen} />
    </>


  )
}