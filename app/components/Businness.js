import React from "react";
import Button from "./Button";
import Image from "next/image";
import { features } from "../constants";

function FeaturCard({ icon, title, content }) {
  return (
    <div className=" flex flex-row items-center justify-start rounded-[20px] p-6 feature-card">
      <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
        <Image
          src={icon}
          alt="star"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
      <div className=" flex flex-col flex-1 ml-3 ">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
}

function Businness() {
  return (
    <section
      id="features"
      className=" flex flex-col md:flex-row items-center justify-between sm:py-16 py-6"
    >
      <div className=" flex flex-col justify-center flex-1  items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className=" flex-1 flex justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
        {features.map((feature) => (
          <FeaturCard key={feature.id} {...feature} />
        ))}
      </div>
    </section>
  );
}

export default Businness;
