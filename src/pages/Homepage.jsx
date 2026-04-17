import { useRef, useState, useEffect } from "react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { ScrollToTop } from "../utils/ScrollToTop"
import topBlack from "../assets/icons/top-black.svg"
import topWhite from "../assets/icons/top-white.svg"
import MotionGraphics from "../assets/videos/logo-motion-graphic.mp4"

export function Homepage({ lightmode, setLightmode, setIsopen, isOpen }) {
  const footer = useRef(null);
  const top = useRef(null);

  const [ showScrolltotop, setShowscrolltotop ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowscrolltotop(window.scrollY > 300)
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-45">
      <title>Home | Etukemka Chibuikem - Junior Front-end Web Developer</title>

      <Header setIsopen={setIsopen} setLightmode={setLightmode} lightmode={lightmode} isOpen={isOpen} />

      <div className="flex flex-col w-screen px-[2vw] cursor-default min-h-screen lg:px-[5vw]">
        <div>
          <div ref={top} className="mb-[5vh] cursor-default">
            <strong className="text-5xl">
              Engineering <span className="opacity-40 hover:opacity-100">Beautiful</span> Experiences
            </strong>
          </div>

          <div className="w-full h-auto pb-[5vh]">
            <video src={MotionGraphics} className="object-cover" autoPlay loop muted playsInline />
          </div>


          <div onClick={() => {
            footer.current?.scrollIntoView({
              behavior: "smooth",
              block: "start"
            })
          }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum consequatur pariatur iste sit iusto necessitatibus aperiam tenetur omnis, excepturi eius ex quaerat tempora? Ut accusantium impedit earum ab, atque, ipsam, deleniti facilis error saepe quidem necessitatibus fugit reprehenderit nulla aliquam? Quidem accusamus esse consectetur assumenda quod perspiciatis in, atque molestiae sit earum quis odio laborum! Voluptas dignissimos ullam quae sunt magnam, reprehenderit minima quia rem quis quisquam amet odio suscipit pariatur vitae, deserunt obcaecati nesciunt omnis id sint corporis, iure magni aut. Tenetur omnis, eius consequatur perspiciatis ullam quas eveniet doloribus officia repudiandae quo? Quaerat inventore voluptate assumenda magni maxime nobis recusandae incidunt! Magni, corrupti unde pariatur, necessitatibus ipsum deleniti molestiae voluptatibus sapiente itaque velit tempora aliquid, corporis quidem iusto expedita distinctio non? Illo officiis corrupti iusto sit fuga sapiente culpa nobis, veritatis optio dolorum, et quisquam blanditiis quam quod architecto est praesentium at id numquam error. Libero officia fuga maxime et alias? Expedita magnam tempora magni delectus tenetur accusantium ea quam minus nulla sapiente fuga beatae similique facere nesciunt, dolores minima eos enim, dolor, suscipit saepe ullam! Culpa sint fuga eveniet dolores labore veritatis alias unde voluptas soluta. Quisquam illum blanditiis et rem ut recusandae, molestias, modi ratione laudantium tempore provident dolorum quasi alias error odio saepe sunt ducimus. Aliquam molestiae recusandae explicabo harum assumenda optio tempore illo! Reprehenderit culpa suscipit beatae voluptate laborum sit nemo, architecto dolores omnis soluta labore nostrum placeat cupiditate. Temporibus minima voluptatibus quibusdam numquam unde, laboriosam rem non ullam et excepturi dolores, ducimus sunt provident, nemo pariatur necessitatibus ipsam officia at molestiae ratione repellendus. Repudiandae, voluptas aliquid neque reprehenderit doloremque eos facere incidunt doloribus ipsa. Sed necessitatibus impedit, vel, officiis odio sint rerum provident ducimus reprehenderit reiciendis est. Voluptate officia porro a ea eius praesentium odit facilis dolorum libero dicta. Dignissimos necessitatibus amet perspiciatis ut atque laudantium perferendis totam facilis ipsa sint sapiente eaque non eligendi, quae qui. Quam accusamus, alias doloremque quidem facilis quia error, illum blanditiis aliquid pariatur voluptates eum dignissimos perspiciatis quis nulla voluptas delectus quibusdam numquam rem sunt ex doloribus, sit iure! Natus sed architecto obcaecati, atque, quos alias totam possimus ut eligendi impedit est? Incidunt veniam consequatur sapiente iure recusandae, fuga mollitia, maiores iusto nihil quaerat eligendi officiis quo dolorem cumque, quasi aperiam animi cum velit voluptates! Atque commodi aliquam maiores omnis minima, praesentium, ab recusandae, nobis exercitationem provident adipisci? Tempora, vitae odio laboriosam libero corporis expedita veniam, fugiat a alias nobis assumenda voluptatibus itaque autem cumque impedit deleniti architecto animi dolor ab repellendus, molestiae iusto cupiditate fuga. Et rerum nam aliquid mollitia, iure obcaecati aliquam suscipit dolorem vitae dignissimos minus saepe? Velit facere blanditiis saepe. Veniam id voluptatum, sequi minus expedita, ipsum eius corporis nostrum quas animi incidunt cupiditate repudiandae possimus voluptate iusto doloremque repellendus dolore accusamus. Accusantium sed similique reprehenderit cupiditate quos nisi voluptate assumenda quo aspernatur dolorem laborum, est culpa ad debitis aliquid, earum sit labore, tempora repellendus sequi odit quaerat nam velit tenetur? Corporis laudantium officiis, reiciendis quae atque minus rerum voluptates possimus optio?
          </div>
        </div>
      </div>

      {showScrolltotop && <ScrollToTop isOpen={isOpen} top={top} lightmode={lightmode} topBlack={topBlack} topWhite={topWhite} />}
      
      <div ref={footer} >
        <Footer />
      </div>

    </div>

  )
}