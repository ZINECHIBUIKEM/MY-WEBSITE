import Turninglabelblack from "../assets/icons/Turninglabel.svg"
import Turninglabelwhite from "../assets/icons/Turninglabelwhite.svg"
import meBlack from "../assets/icons/meBlack.png"
import meWhite from "../assets/icons/meWhite.png"

export function Turninglabel({ lightmode }) {
  return (
    <div className="relative flex items-center justify-center py-10 mb-10">
      <img src={lightmode ? Turninglabelblack : Turninglabelwhite} className="absolute flex animate-spin [animation-duration:10s] linear w-25" rounded-full />
      <img src={lightmode ? meBlack : meWhite} className="w-10 opacity-85" />
    </div>
  )
}