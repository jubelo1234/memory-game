export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col w-full py-6 bg-neutral-800">
      <h2 className="font-bold text-[2rem] text-white sm:text-[2.5rem] text-center leading-none">memory</h2>
      <div className="mt-[3.25rem]  flex flex-col justify-start items-start gap-5 sm:gap-[33px] tablet:gap-7 sm:rounded-[1.25rem] w-[85%] px-6 pt-[1.3rem] max-w-[327px] sm:max-w-[492px] tablet:max-w-[657px] rounded-xl pb-6 sm:py-12 sm:px-14 bg-white">
        <div className="w-full">
          <h2 className="pb-[0.6rem] sm:text-[1.25rem] sm:pb-4  text-neutral-400 font-bold">
            Select Theme
          </h2>
          <div className="flex justify-center items-center gap-[0.65rem] tablet:gap-8 *:text-white *:font-bold *:transition-all *:duration-300 *:ease-in-out *:text-[1rem] *:text-center *:leading-6 *:py-2 *:sm:text-[1.625rem] *:sm:py-[0.85rem] *:rounded-full">
            <button className={` w-[49%] tablet:w-[47%] bg-neutral-300`}>Numbers</button>
            <button className={` w-[49%] tablet:w-[47%] bg-neutral-700`}>Icons</button>
          </div>
        </div>

        <div className="w-full">
          <h2 className="pb-[0.6rem] sm:text-[1.25rem] sm:pb-4  text-neutral-400 font-bold">
            Number of Players
          </h2>
          <div className="flex justify-center items-center gap-[0.65rem] tablet:gap-8 *:text-white *:font-bold *:transition-all *:duration-300 *:ease-in-out *:text-[1rem] *:text-center *:leading-6 *:py-2 *:sm:text-[1.625rem] *:sm:py-[0.85rem] *:rounded-full">
            <button className={` w-[24%] tablet:w-[22%] bg-neutral-700`}>1</button>
            <button className={` w-[24%] tablet:w-[22%] bg-neutral-300`}>2</button>
            <button className={` w-[24%] tablet:w-[22%] bg-neutral-300`}>3</button>
            <button className={` w-[24%] tablet:w-[22%] bg-neutral-300`}>4</button>
          </div>
        </div>
        <div className="w-full">
          <h2 className="pb-[0.6rem] sm:text-[1.25rem] sm:pb-4  text-neutral-400 font-bold">Grid Size</h2>
          <div className="flex justify-center items-center gap-[0.65rem] tablet:gap-8 *:text-white *:font-bold *:transition-all *:duration-300 *:ease-in-out *:text-[1rem] *:text-center *:leading-6 *:py-2 *:sm:text-[1.625rem] *:sm:py-[0.85rem] *:rounded-full">
            <button className={` w-[49%] tablet:w-[47%] bg-neutral-700`}>4x4</button>
            <button className={` w-[49%] tablet:w-[47%] bg-neutral-300`}>6x6</button>
          </div>
        </div>
        <button className="rounded-full font-bold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-primaryy-400 hover:bg-primaryy-300 focus-visible:ring-primaryy-400 leading-none text-white py-3 px-6 text-[1.125rem] sm:py-5 sm:text-[2rem] mt-[12px] tablet:mt-1 w-full">
          Start Game
        </button>
      </div>
    </div>
  );
}
