import { Header } from "../components/Header"

export function Homepage({ setLightmode, setIsopen, isOpen }) {
  return (
    <div>
    <title>Home | Etukemka Chibuikem - Junior Front-end Web Developer</title>
    <Header setIsopen={setIsopen} setLightmode={setLightmode} isOpen={isOpen} />
    Homepage
    </div>
  )
}