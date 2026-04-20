export function Works({ lightmode, time, role, company, number }) {
  return (
      <div className={`flex flex-col px-8 py-10 mx-5 rounded-xl ${lightmode ? "bg-black" : "bg-[#1D1D1F]"}`}>
        <div className="flex flex-row items-center justify-start mb-3 text-sm font-light">
          {time}
        </div>

        <div className="flex flex-row justify-start mb-10 text-3xl text-start">{role}</div>


        <div className="flex flex-row items-center justify-between pt-5">
          <div className="px-4 text-sm font-light rounded-2xl ring-1 ring-white/50 py-">{company}</div>
          <div className="text-sm">{number}</div>
        </div>

      </div>
  )
}