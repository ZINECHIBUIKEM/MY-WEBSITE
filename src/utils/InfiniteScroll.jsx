export function InfiniteScroll({ lightmode }) {
  const items = [
    "WEB",
    "DEVELOPER",
    "UIUX",
    "FRONT-END",
    "APIS",
    "MOTION GRAPHICS",
    "REACT",
    "JAVASCRIPT",
    "TAILWIND",
    "EXPRESSJS",
    "POSTGRESQL",
  ];

  return (
    <div className={`my-5 overflow-hidden ${lightmode ? "bg-black" : "bg-white/10"} rounded-4xl mx-[5vw] py-2`}>
      <div className="flex w-max animate-[scroll_20s_linear_infinite] rounded">
        {[...items, ...items].map((item, index) => (
          <span
            key={index}
            className={`mx-6 text-white text-xs font-light whitespace-nowrap`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}