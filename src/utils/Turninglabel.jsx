import Turninglabelblack from "../assets/icons/Turninglabel.svg"
import Turninglabelwhite from "../assets/icons/Turninglabelwhite.svg"
import meBlack from "../assets/icons/meBlack.png"
import meWhite from "../assets/icons/meWhite.png"

export function Turninglabel({ lightmode }) {
  return (
    <div className="relative flex items-center justify-center py-10 mb-10">
      <img src={lightmode ? Turninglabelblack : Turninglabelwhite} className="absolute flex animate-spin [animation-duration:10s] linear w-35" rounded-full />
      <img src={lightmode ? meBlack : meWhite} className="opacity-90 w-15" />
    </div>
  )
}