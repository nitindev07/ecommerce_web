import React from "react";
import woman from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-cover bg-center h-[800px]">
      <div className="container flex justify-around items-center mx-auto py-24 h-full ">
        <div className="flex flex-col">
          <div className="flex items-center gap-x-2">
            <div className="h-[2px] bg-red-500 w-[30px]"></div>
            <div>New Trends</div>
          </div>
          <h1 className="text-[70px] leading-[1.1] uppercase font-light text-primary">
            autumn sale stylish <br />
            <span className="font-semibold">womens</span>
          </h1>
          <Link
            to={"/"}
            className="uppercase self-start border-b border-primary font-semibold ">
            discover more
          </Link>
        </div>

        <div className="hidden lg:block">
          <img src={woman} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
