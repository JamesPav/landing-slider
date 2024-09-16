"use client";
import { Righteous } from "next/font/google";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import BackgroundImage from "@/components/BackgroundImage";
import Header from "@/components/Header";
import SlideInfo from "@/components/SlideInfo";
import Slides from "@/components/Slides";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState<Data>(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState<CurrentSlideData>({
    data: initData,
    index: 0,
  });
  return (
    <main
      className={`${inter.className} realtive min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/1.png",
    location: "Costa Rica",
    description:
      "The journey to Rich Coast typically starts in the country of Costa Rica in the Central American region of North America",
    title: "NAYARA CAMP",
  },
  {
    img: "/2.png",
    location: "Columbia",
    description:
      "Columbia Forest Products is North America's Largest manufacturer of quality, decorative hardwood",
    title: "TOWN OF CATAGENA",
  },
  {
    img: "/3.png",
    location: "Masai Mara",
    description:
      "From laid-back beachside luxury to the thrilling buzz of the city, every destination marches to its own beat",
    title: "VILLA ROSE",
  },
  {
    img: "/4.png",
    location: "Angkor Wat",
    description: "A Stunning Ancient Jungle City",
    title: "Cambodia",
  },
  {
    img: "/7.png",
    location: "Bali",
    description: "Tropical Beaches, volcano hikes, ancient temples and more",
    title: "Indonesia",
  },
];

const initData = sliderData[0];
