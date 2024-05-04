// import jet from "../assets/icons/jet-fighter-up-solid.svg";

type CircleProps = {
  icons?: boolean;
  value: string | number;
  row?: boolean;
};

export default function Circle({ value, icons = true, row = true }: CircleProps) {
  return (
    <button className="size-full rounded-[100%] relative overflow-hidden bg-primaryy-400 flex justify-center items-center">
      {icons ? (
        row ? (
          <img src={value as string} alt="4" className=" max-h-9 md:max-h-12" />
        ) : (
          <img
            src={value as string}
            alt="icon"
            className=" max-h-5  sm:max-h-7 md:max-h-9"
          />
        )
      ) : row ? (
        <span className="text-white text-[2.5rem] sm:text-[3.5rem] font-bold transition-opacity opacity-100">
          {value}
        </span>
      ) : (
        <span className="text-white text-2xl sm:text-[2.75rem] font-bold transition-opacity opacity-100">
          {value}
        </span>
      )}

      <div className=" absolute size-full top-0 left-0 bg-neutral-700 transition-all duration-200 ease-in-out hover:bg-neutral-400 opacity-1"></div>
    </button>
  );
}
