export default function Polygon() {
  return (
    <div className="w-[160px] h-[90px]  rounded-md relative">
      <div className="w-[20px] aspect-square bg-yellow-400 absolute top-[-10px] z-[1] left-0 right-0 mx-auto transform rotate-45"></div>
      <div className="size-full bg-yellow-400 z-20"></div>
    </div>
  );
}
