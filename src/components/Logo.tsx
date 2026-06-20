import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      {/* Icon */}
      <div className="relative w-8 h-8 flex-shrink-0 bg-transparent">
        <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-[1px] bg-brand-green">
          {/* Top Left - Filled */}
          <div className="bg-brand-green w-full h-full"></div>
          {/* Top Right */}
          <div className="bg-brand-black w-full h-full"></div>
          {/* Bottom Left */}
          <div className="bg-brand-black w-full h-full"></div>
          {/* Bottom Right */}
          <div className="bg-brand-black w-full h-full"></div>
        </div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-wider leading-none text-white uppercase">
          Zellix
        </span>
        <span className="text-[0.6rem] font-bold tracking-[0.2em] text-brand-green mt-0.5">
          3D PRINT
        </span>
      </div>
    </Link>
  );
}
