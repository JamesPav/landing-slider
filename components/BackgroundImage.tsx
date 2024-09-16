import { CurrentSlideData, Data } from "@/app/page";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  transitionData: Data;
  currentSlideData: CurrentSlideData;
};

const BackgroundImage = ({ transitionData, currentSlideData }: Props) => {
  return (
    <>
      {transitionData && (
        <motion.img
          key={transitionData.img}
          layoutId={transitionData.img}
          alt="Transition image"
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.6 },
          }}
          className="absolute left-0 top-0 z-10 h-full w-full object-cover brightness-50"
          src={transitionData.img}
        />
      )}
      <motion.img
        key={(currentSlideData.data.img = "transition")}
        alt="Current image"
        className="absolute left-0 top-0 h-full w-full object-cover brightness-50"
        src={currentSlideData.data.img}
      />
    </>
  );
};

export default BackgroundImage;
