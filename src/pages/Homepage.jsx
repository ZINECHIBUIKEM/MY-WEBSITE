import { useRef, useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../utils/ScrollToTop"
import { Turninglabel } from "../utils/Turninglabel"
import { motion, useScroll, useTransform } from "framer-motion"
import { InfiniteScroll } from "../utils/InfiniteScroll"
import { CursorFollower } from "../utils/CursorFollower"
import { PortfolioDisplay } from "../components/PortfolioDisplay"
import { Works } from "../components/Works"
import topBlack from "../assets/icons/top-black.svg"
import topWhite from "../assets/icons/top-white.svg"
import HBBlack from "../assets/icons/HBBlack.png"
import HBWhite from "../assets/icons/HBWhite.png"
import Oblitzblack from "../assets/icons/Oblitzblack.png"
import Oblitzwhite from "../assets/icons/Oblitzwhite.png"
import Chrome3dblack from "../assets/icons/Chrome3dblack.png"
import Chrome3dwhite from "../assets/icons/Chrome3dwhite.png"
import Gkblack from "../assets/icons/Gkblack.png"
import Gkwhite from "../assets/icons/Gkwhite.png"
import ADMIN from "../assets/ADMIN.jpg"
import MotionGraphics from "../assets/videos/logo-motion-graphic.mp4"

export function Homepage({ lightmode, setLightmode, setIsopen, isOpen }) {
  const footer = useRef(null);
  const top = useRef(null);
  const about = useRef(null);

  const [showScrolltotop, setShowscrolltotop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowscrolltotop(window.scrollY > 300)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className={`pt-45 ${lightmode ? "bg-white" : "bg-black"}`}>
      <title>Home | Etukemka Chibuikem - Junior Front-end Web Developer</title>

      <Header setIsopen={setIsopen} setLightmode={setLightmode} lightmode={lightmode} isOpen={isOpen} />

      <CursorFollower lightmode={lightmode} />
      <div className="flex flex-col w-screen px-[2vw] cursor-default min-h-screen lg:px-[5vw]">
        <div>
          <div ref={top} className="mb-[5vh] cursor-default">
            <strong className={`text-5xl ${lightmode ? "text-black" : "text-white"}`}>
              Engineering <span className="transition-all duration-300 ease-in-out opacity-55 hover:opacity-100">Beautiful</span> Experiences
            </strong>
          </div>

          <div className="w-full h-auto lg:w-[30vw] pb-[5vh]">
            <video src={MotionGraphics} className="object-cover rounded-lg" autoPlay loop muted playsInline />
          </div>

          <InfiniteScroll lightmode={lightmode} />

          <div className="mx-5 my-20 text-black">
            <PortfolioDisplay lightmode={lightmode} />
          </div>

          <Turninglabel lightmode={lightmode} />

          <div className={`font-bold text-4xl px-2 ${lightmode ? "text-black" : "text-white"}`}>
            Crafting <span className="opacity-55">Digital</span> Experiences that Move, <span className="opacity-55">Think</span>, and Scale...
          </div>

          <div className="px-5 py-10">
            <article className={`font-light tracking-wide ${lightmode ? "text-black" : "text-white"}`}>
              We believe every great website begins with a clear idea. Before any code is written, the focus is on understanding the purpose—what problem is being solved, who it’s for, and how it should feel to use. This foundation ensures that every project is not just functional, but meaningful.

              From there, ideas are translated into clean, user-focused designs. Through strong UI/UX principles, layouts are crafted to be clear, balanced, and intentional, with careful attention to typography, spacing, and visual hierarchy. Motion is also considered early, ensuring that interactions feel natural and enhance the overall experience.

              Once the design direction is established, everything is brought to life through code. Structured, responsive interfaces are built using modern technologies, with interactivity and scalability in mind. Each stage of development is an opportunity to refine, improving usability, performance, and overall quality.

              Beyond the interface, functionality is extended to create complete systems that handle real users and real data. This approach ensures that every product is not only visually compelling but also powerful and reliable.

              In the end, what begins as a simple idea becomes a fully realized digital experience—designed with intention, built with precision, and refined with care. We don’t just build websites; we create products that feel as good as they function.

            </article>
          </div>
          <div className="flex flex-row justify-between px-[10vw] py-10 ">
            <button onClick={() => {
              about.current?.scrollIntoView({
                behavior: "smooth"
              })
            }} className={lightmode ? "text-[#ffffff] transition-all ease-in-out duration-100 bg-black text-nowrap rounded-4xl hover:text-black hover:bg-black/0 hover:cursor-pointer" : "text-[#1D1D1F] transition-all ease-in-out duration-100 bg-white rounded-4xl hover:text-white hover:bg-white/0 hover:cursor-pointer text-nowrap"}>
              About me
            </button>


            <button className={lightmode ? "text-[#000000] transition-all ease-in-out duration-100 bg-white ring ring-black text-nowrap rounded-4xl hover:text-black hover:cursor-pointer hover:bg-black/0 lg:flex hover:ring-white/0" : "text-[#ffffff] transition-all ease-in-out duration-100 bg-black ring-1 ring-white cursor-pointer text-nowrap rounded-4xl hover:cursor-pointer hover:text-white hover:ring-white/0"}>
              Discover My Work
            </button>
          </div>

          <div className={lightmode ? "flex bg-black/10 h-px" : "flex bg-white/10 h-px"} />


          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 my-15">
            <Works lightmode={lightmode} time={"2025 - Present"} role={"Lead Web Developer"} company={"Heartbetween Initiative"} number={"01"} />

            <Works lightmode={lightmode} time={"2022 - 2025"} role={"Junior Web Developer"} company={"Bedrock Initiative"} number={"02"} />

            <Works lightmode={lightmode} time={"2020 - 2022"} role={"Junior Visual Designer"} company={"TeemWoks"} number={"03"} />
          </div>

           <div className={lightmode ? "flex bg-black/10 h-px mb-10" : "flex bg-white/10 h-px mb-10"} />

          <div ref={about} className={`text-2xl scroll-mt-24 font-bold ${lightmode ? "text-black" : "text-white"}`}>About me</div>

          <div className={`pt-5 font-light px-5 py-10 tracking-wide ${lightmode ? "text-black" : "text-white"}`}>
            My journey into tech began in 2020, starting from a place of creativity. I initially worked as a graphic designer, building visual identities and working on a variety of design projects that helped me understand branding from the ground up. During this phase, I gained hands-on experience with tools like Photoshop and developed a strong eye for detail, composition, and visual storytelling.

            As my curiosity grew, I expanded into motion graphics, using After Effects to bring designs to life through animation. This transition deepened my understanding of how visuals can communicate ideas dynamically, not just statically.

            In 2022, I took a significant step forward by diving into UI/UX design. I formally studied UI/UX through Udemy, where I learned how to design digital experiences that are not only visually appealing but also user-centered and functional. Working on multiple UI/UX projects helped me bridge the gap between design and real-world product thinking.

            Toward the end of my UI/UX journey, I was introduced to frontend development—and that changed everything.

            I began learning HTML and CSS, then progressed into JavaScript, where I started building interactive web experiences. From there, I advanced into modern tools and frameworks like Tailwind CSS and React, allowing me to create scalable, responsive, and dynamic interfaces.

            As I continued growing, I expanded my skill set beyond the frontend. I began learning Node.js and am currently deepening my backend development knowledge with Express.js and PostgreSQL. My goal is to become a well-rounded full-stack developer capable of building complete, high-performance applications from scratch.

            Today, I combine my background in design with my development skills to create digital products that are both functional and visually compelling. I am constantly learning, building, and refining my craft—one project at a time.
          </div>

          <div className="relative flex items-center justify-center px-10 mt-10 mb-10 rounded-lg">
            <motion.div style={{ y }} className="absolute flex flex-col items-center justify-center -bottom-[15vh] -right-1 bg-black/35 backdrop-blur-sm ring-1 ring-white/5 shadow-xl shadow-black-30 w-[40vw] h-[5vh] rounded-2xl">
              <span className={`text-xs ${lightmode ? "text-white" : "text-white"}`}>Etukemka Chibuikem</span>
              <span className={`text-[8px] ${lightmode ? "text-white" : "text-white"}`}>Front-end Developer</span>
            </motion.div>
            <img src={ADMIN} className={`rounded-4xl ring-offset-1 w-[70vw]  ${lightmode ? "ring-black/60 ring-1 shadow-[4px_6px_0px_0px_rgba(0,0,0,0.4)]" : "ring-white/10 ring-1 shadow-[4px_6px_0px_0px_rgba(245,245,245,0.2)]"}`} />
          </div>



          <p className={`text-sm pb-10 pt-10 ${lightmode ? "text-black/80" : "text-white/80"}`}>
            Trusted by these amazing companies
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 mb-[10vh]">
            <div className="flex items-center justify-center shrink-0">
              <img src={lightmode ? HBBlack : HBWhite} className="w-15 min-w-15" />
            </div>
            <div className="flex items-center justify-center shrink-0">
              <img src={lightmode ? Chrome3dblack : Chrome3dwhite} className="w-14 min-w-14" />
            </div>
            <div className="flex items-center justify-center shrink-0">
              <img src={lightmode ? Gkblack : Gkwhite} className="w-15 min-w-15" />
            </div>
            <div className="flex items-center justify-center shrink-0">
              <img src={lightmode ? Oblitzblack : Oblitzwhite} className="w-15 min-w-15" />
            </div>


          </div>





        </div>
      </div>

      {showScrolltotop && <ScrollToTop isOpen={isOpen} top={top} lightmode={lightmode} topBlack={topBlack} topWhite={topWhite} />}

      <div ref={footer} >
        <Footer lightmode={lightmode} />
      </div>

    </div>

  )
}