import Weather1 from "../assets/Portfolio/1.png";
import Weather2 from "../assets/Portfolio/2.png";
import Weather3 from "../assets/Portfolio/3.png";
import Blue1 from "../assets/Portfolio/4.png";
import Blue2 from "../assets/Portfolio/5.png";
import Blue3 from "../assets/Portfolio/6.png";
import NW1 from "../assets/Portfolio/7.png";
import NW2 from "../assets/Portfolio/8.png";
import NW3 from "../assets/Portfolio/9.png";
import { motion } from "framer-motion"


export function PortfolioDisplay({ lightmode }) {
  return (
    <div className={`relative flex flex-row items-center justify-center gap-5 h-[80vh] w- rounded-3xl overflow-hidden ${lightmode ? " bg-black" : "bg-[#1D1D1F]"}`}>
      <a href="https://weather-app-zinecast.vercel.app/" target="_blank">
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[90vh] w-[35vw] rounded-2xl shrink-0">
          <div className="transition-all ease-in-out duration-500 h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Weather1} className="transition-all duration-500 ease-in-out rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Weather2} className="rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Weather3} className="rounded-2xl" />
          </div>
        </div>
      </a>

      <a href="https://zinechibuikem.github.io/BLUE-MAIL-PROJECT/" target="_blank" >
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[90vh] w-[35vw] rounded-2xl shrink-0">
          <div className="transition-all ease-in-out duration-500 h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Blue1} className="rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 bg-black h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Blue2} className="rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 bg-black h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={Blue3} className="rounded-2xl" />
          </div>
        </div>
      </a>

      <a href="https://weather-app-zinecast.vercel.app/" target="_blank">
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[90vh] w-[35vw] rounded-2xl shrink-0">
          <div className="transition-all ease-in-out duration-500 bg-white h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={NW1} className="rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 bg-white h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={NW2} className="rounded-2xl" />
          </div>
          <div className="transition-all ease-in-out duration-500 bg-white h-[35vh] w-full rounded-2xl max-w-37.5 hover:scale-110">
            <img src={NW3} className="rounded-2xl" />
          </div>
        </div>
      </a>

    </div>
  )
}