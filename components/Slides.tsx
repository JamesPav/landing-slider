import { Data } from "@/app/page";
import React from "react";
import SlideCard from "./SlideCard";

type Props = {
  data: Data[];
};

const Slides = ({ data }: Props) => {
  return (
    <div className="flex w-full gap-6">
      {data.map((data) => {
        return <SlideCard key={data.img} data={data} />;
      })}
    </div>
  );
};

export default Slides;
