import Image from "next/image";
import React from "react";
import Ramadan from "../../../public/ramadan.jpg";

const Lazypage = () => {
  const pic: string[] = new Array(10).fill(Ramadan);
  return (
    <div className="bg-slate-950 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-3 py-10">
      {pic.map((item, index) => (
        <Image
          key={index}
          className="size-full sm:w-[400px] sm:h-[300px] mx-auto "
          src={item}
          loading="lazy"
          alt="lazy"
          placeholder="blur"
        />
      ))}
    </div>
  );
};

export default Lazypage;
