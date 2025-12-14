import { cn } from "@/shared/lib/utils";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Explore } from "@/types/explore";
import { ArrowRight } from "lucide-react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function ExploreMarketplace({ className, children }: Props) {
  const ExploreList: Explore[] = [
    {
      id: 1,
      time: "07h 09m 12s",
      image: "/explore/sun-glass.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 2,
      time: "07h 09m 12s",
      image: "/explore/sun-glass2.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 3,
      time: "07h 09m 12s",
      image: "/explore/sun-glass3.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 4,
      time: "07h 09m 12s",
      image: "/explore/sun-glass2.png",
      name: "NuEvey",
      currentBid: "1.75",
    },
    {
      id: 5,
      time: "07h 09m 12s",
      image: "/explore/sun-glass.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 6,
      time: "07h 09m 12s",
      image: "/explore/sun-glass2.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 7,
      time: "07h 09m 12s",
      image: "/explore/sun-glass3.png",
      name: "Sun-Glass",
      currentBid: "1.75",
    },
    {
      id: 8,
      time: "07h 09m 12s",
      image: "/explore/sun-glass2.png",
      name: "NuEvey",
      currentBid: "1.75",
    },
  ];
  return (
    <main className={cn("mt-6", className)}>
      <Container className="flex flex-col items-center justify-center">
        <div className="text-4xl font-bold">Explore Marketplace</div>

        {/* <div className="flex mt-12 gap-4 font-medium">
          <button className="w-16 h-14 rounded-xl border-2 border-solid border-black cursor-pointer">
            All
          </button>
          <button className="flex px-4 h-14 items-center justify-center gap-1 rounded-xl border-2 border-black cursor-pointer">
            <Image
              src="/category.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Category
          </button>
          <button className="flex px-4 h-14 items-center justify-center gap-1 rounded-xl border-2 border-black cursor-pointer">
            <Image
              src="/collection.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Collection
          </button>
          <button className="flex px-4 h-14 items-center justify-center gap-1 rounded-xl border-2 border-black cursor-pointer">
            <Image
              src="/price.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Price
          </button>
        </div> */}

        <div className="grid grid-cols-3 gap-4 mt-12 font-medium max-md:px-6">
          <button className="h-14 px-4 flex items-center justify-center gap-1 rounded-xl border-2 border-black">
            <Image
              src="/price.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Category
          </button>

          <button className="h-14 flex items-center justify-center gap-1 rounded-xl border-2 border-black">
            <Image
              src="/price.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Collection
          </button>

          <button className="h-14 flex items-center justify-center gap-1 rounded-xl border-2 border-black">
            <Image
              src="/price.svg"
              alt=""
              width={12}
              height={12}
              className="w-6 h-6"
            />
            Price
          </button>
        </div>

        <div className="grid grid-cols-4 max-lg:grid-cols-2 max-md:grid-cols-1 grid-rows-2 gap-8 justify-center mt-16">
          {ExploreList.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center w-64 max-md:w-96 h-full py-4 bg-white shadow-[0_0_25px_rgba(0,0,0,0.2)] rounded-2xl items-center gap-3 max-md:gap-6">
              <div className="relative">
                <div className="absolute top-3 left-[53%] bg-[rgba(28,29,32,0.35)] rounded-xl text-white text-sm px-2 py-2 max-md:text-2xl max-md:left-[50%] max-md:top-4">
                  {item.time}
                </div>
                <Image
                  src={item.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="w-60 h-60 max-md:w-92 max-md:h-92 "
                />
              </div>

              <div className="font-bold text-lg mr-auto px-4 max-md:text-3xl">
                {item.name}
              </div>

              <div className="flex items-center justify-center gap-8 max-md:gap-22 max-md:mb-2">
                <div className="flex flex-col ">
                  <div className="text-[#94A3B8] text-sm font-semibold max-md:text-xl">
                    Current Bid
                  </div>
                  <div className="flex gap-1 font-semibold max-md:text-xl">
                    <Image
                      src="/collection/eth.svg"
                      alt=""
                      width={10}
                      height={10}
                    />
                    {item.currentBid}
                  </div>
                </div>

                <button className="ml-auto text-white font-semibold bg-black px-4 py-3 rounded-2xl max-md:text-xl max-md:py-5 max-md:px-6 cursor-pointer transition-all duration-300 hover:bg-white hover:text-black">
                  Place Bid
                </button>
              </div>
            </div>
          ))}
          <div className="flex mt-2 max-sm:mt-0 col-start-4 max-md:col-start-1 ml-auto items-center gap-2 text-[#ACADB9] font-medium cursor-pointer hover:text-black transition-colors">
            Explore All
            <ArrowRight size={20} />
          </div>
        </div>
      </Container>
    </main>
  );
}
