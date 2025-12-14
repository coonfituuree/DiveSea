import { cn } from "@/shared/lib/utils";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { Fragment } from "react";
import { ArrowRight } from "lucide-react";
import { TopCollectionItem } from "@/types/collection";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function TopCollecitonGrid({ className, children }: Props) {
  const headers = [
    "Collection",
    "Volume",
    "24h %",
    "Floor Price",
    "Owners",
    "Items",
  ];
  const TopCollectionList: TopCollectionItem[] = [
    {
      id: 1,
      image: "collection/firstUser.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+ 27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 2,
      image: "collection/secondUser.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+ 27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 3,
      image: "collection/firstUser.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+ 27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 4,
      image: "collection/secondUser.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+ 27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
  ];
  return (
    <main className={cn("", className)}>
      <Container className="max-w-[1100px] flex flex-col items-center gap-8 mt-24 mb-24 px-4">
        <div className="text-2xl md:text-4xl font-bold mb-6">
          Top Collections
        </div>
        <div className="grid grid-cols-3 md:grid-cols-7 gap-2 md:gap-4 w-full font-bold text-xs md:text-lg">
          {/* Header */}
          <div className="col-span-2 md:col-span-2 text-[#93989A]">
            {headers[0]}
          </div>
          <div className="hidden md:flex items-center justify-center col-span-1 text-[#93989A]">
            {headers[1]}
          </div>
          <div className="hidden md:flex items-center justify-center col-span-1 text-[#93989A]">
            {headers[2]}
          </div>
          <div className="flex items-center justify-center col-span-1 text-[#93989A]">
            {headers[3]}
          </div>
          <div className="hidden md:flex items-center justify-center col-span-1 text-[#93989A]">
            {headers[4]}
          </div>
          <div className="hidden md:flex items-center justify-center col-span-1 text-[#93989A]">
            {headers[5]}
          </div>

          {TopCollectionList.map((item) => (
            <Fragment key={item.id}>
              <div className="col-span-2 md:col-span-2 flex items-center gap-2 md:gap-4 py-2 md:py-3">
                <img
                  src={item.image}
                  alt=""
                  className="w-10 h-10 md:w-14 md:h-14"
                />
                <div className="flex flex-col">
                  <span className="text-black font-bold text-sm md:text-lg">
                    {item.collecionName}
                  </span>
                  <span className="text-xs md:text-base text-gray-400">
                    {item.byWhom}
                  </span>
                </div>
              </div>
              {/* List */}

              <div className="hidden md:flex col-span-1 items-center gap-1 justify-center">
                <Image
                  src={"/collection/eth.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                {item.volume}
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-center text-green-600">
                {item.dailyPercent}
              </div>
              <div className="col-span-1 flex items-center justify-center gap-1 text-sm md:text-lg">
                <Image
                  src={"/collection/eth.svg"}
                  alt=""
                  width={12}
                  height={12}
                />
                {item.floorPrice}
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-center">
                {item.owners}
              </div>
              <div className="hidden md:flex col-span-1 items-center justify-center">
                {item.items}
              </div>
            </Fragment>
          ))}
        </div>

        <div className="flex mt-2 max-sm:mt-0 ml-auto max-sm:text-sm items-center gap-2 text-[#ACADB9] font-medium cursor-pointer hover:text-black transition-colors">
          Explore All
          <ArrowRight size={20} />
        </div>
      </Container>
    </main>
  );
}
