export function ScrollToTop({ isOpen, top, lightmode, topBlack, topWhite }) {
  return (
    <>
      {!isOpen && <div onClick={() => {
        top.current?.scrollIntoView({
          behavior: "smooth",
          block: "end"
        })
      }} className={`flex fixed bottom-18 right-10 rounded-full w-12 h-12 items-center justify-center ${lightmode ? "bg-white" : "bg-[#1D1D1F]"}`}>
        <img src={lightmode ? topBlack : topWhite} />
      </div>}</>
  )
}