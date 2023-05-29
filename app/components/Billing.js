import React from "react";
import Image from "next/image";
import { bill, google, apple } from "../assets";

function Billing() {
  return (
    <section
      id="product"
      className=" flex md:flex-row flex-col-reverse sm:py-16 py-6"
    >
      <div className="flex-1 flex justify-center items-center md:mr-10 mr-0 md:mt-0 mt-10 relative">
        <Image
          src={bill}
          alt="billing"
          className=" w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className=" flex-1 flex justify-center items-start flex-col ">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Easily control your <br className="sm:block hidden" /> billing &
          invoicing
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className=" flex flex-row flex-wrap sm:mt-10 mt-6   ">
          <Image src={apple} alt="app_store" className=" object-contain cursor-pointer w-[128.86px] h-[42.05px] mr-5" />
          <Image src={google} alt="google_play" className="object-contain cursor-pointer w-[128.86px] h-[42.05px] mr-5" />
        </div>
      </div>
    </section>
  );
}

export default Billing;
