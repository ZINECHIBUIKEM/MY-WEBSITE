import Weather1 from "../assets/Portfolio/1.png";
import Weather2 from "../assets/Portfolio/2.png";
import Weather3 from "../assets/Portfolio/3.png";
import Blue1 from "../assets/Portfolio/4.png";
import Blue2 from "../assets/Portfolio/5.png";
import Blue3 from "../assets/Portfolio/6.png";
import NW1 from "../assets/Portfolio/7.png";
import NW2 from "../assets/Portfolio/8.png";
import NW3 from "../assets/Portfolio/9.png";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PortfolioDisplay({ lightmode }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // PARALLAX SPEEDS
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -280]);

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center justify-center gap-[10vw] h-[50vh] md:h-[50vh] md:gap-[1vw] rounded-4xl overflow-hidden ${lightmode ? "bg-black" : "bg-[#1D1D1F]"
        }`}
    >
      {/* COLUMN 1 */}
      <a href="https://weather-app-zinecast.vercel.app/" target="_blank">
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[50vh] w-[30vw] shrink-0">

          <motion.div style={{ y: y1 }} className="transition-all duration-300 min-w-35 max-w-70">
            <img src={Weather1} className="rounded-3xl hover:scale-105" />
          </motion.div>

          <motion.div style={{ y: y1 }} className="transition-all duration-300 min-w-35 max-w-70">
            <img src={Blue2} className="rounded-3xl hover:scale-105" />
          </motion.div>

          <motion.div style={{ y: y1 }} className="transition-all duration-300 min-w-35 max-w-70">
            <img src={NW3} className="rounded-3xl hover:scale-105" />
          </motion.div>

          <motion.div style={{ y: y1 }} className="transition-all duration-300 min-w-35 max-w-70">
            <img src={Weather1} className="rounded-3xl hover:scale-105" />
          </motion.div>
        </div>
      </a>

      {/* COLUMN 2 */}
      <a href="https://zinechibuikem.github.io/BLUE-MAIL-PROJECT/" target="_blank">
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[50vh] w-[30vw] shrink-0">

          <motion.div style={{ y: y3 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={Blue1} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y3 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={Weather2} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y3 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={NW3} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y3 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={Blue1} className="rounded-3xl" />
          </motion.div>
        </div>
      </a>

      {/* COLUMN 3 */}
      <a href="https://weather-app-zinecast.vercel.app/" target="_blank">
        <div className="flex flex-col gap-[5vh] items-center justify-between h-[50vh] w-[30vw] shrink-0">

          <motion.div style={{ y: y2 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={NW1} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={Weather2} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={Blue3} className="rounded-3xl" />
          </motion.div>

          <motion.div style={{ y: y2 }} className="transition-all duration-300 min-w-35 max-w-70 hover:scale-105">
            <img src={NW1} className="rounded-3xl" />
          </motion.div>
        </div>
      </a>
    </div>
  );
}