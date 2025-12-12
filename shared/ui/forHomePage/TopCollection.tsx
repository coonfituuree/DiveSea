import React from "react";
import Container from "../Container";
import { cn } from "@/shared/lib/utils";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export default function TopCollection({ className, children }: Props) {
  const TopCollectionList = [
    {
      id: 1,
      image: "collection/icon.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 2,
      image: "collection/icon.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 3,
      image: "collection/icon.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
    {
      id: 4,
      image: "collection/icon.svg",
      collecionName: "Alex Ca",
      byWhom: "by Alex",
      volume: "8,456",
      dailyPercent: "+27.3%",
      floorPrice: "3,5",
      owners: "2.2k",
      items: "500",
    },
  ];
  return (
    <main className={cn("", className)}>
      <Container className="max-w-[1200px] flex flex-col items-center gap-6 mt-20 mb-20">
        <div className="text-3xl font-bold mb-4">Top Collections</div>

        <div className="w-full">
          {/* HEADER */}
          <div className="flex gap-3 w-full text-[#93989A] font-bold">
            <div>Collection</div>

            <div className="flex gap-16 ml-auto">
              <div>Volume</div>
              <div>24h %</div>
              <div>Floor Price</div>
              <div>Owners</div>
              <div>Items</div>
            </div>
          </div>
          <div className="flex flex-col gap-8 w-full mt-6">
            {TopCollectionList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between w-full py-4 border-b border-gray-300">
                <div className="flex items-center gap-4">
                  <Image src={item.image} alt="icon" width={50} height={50} />

                  <div>
                    <div className="font-bold text-black">
                      {item.collecionName}
                    </div>
                    <div className="text-sm">{item.byWhom}</div>
                  </div>
                </div>

                <div className="flex font-bold gap-22 ml-auto">
                  <div className="flex items-center">
                    <Image
                      src={"collection/eth.svg"}
                      alt="eth"
                      width={10}
                      height={16}
                      className="inline-block mr-2"
                    />
                    {item.volume}
                  </div>
                  <div className="text-green-600">{item.dailyPercent}</div>
                  <div className="flex items-center">
                    <Image
                      src={"collection/eth.svg"}
                      alt="eth"
                      width={10}
                      height={16}
                      className="inline-block mr-2"
                    />
                    {item.floorPrice}
                  </div>
                  <div>{item.owners}</div>
                  <div>{item.items}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex mt-2 ml-auto items-center gap-2 text-[#ACADB9] font-medium cursor-pointer hover:text-black transition-colors">
          Explore All
          <ArrowRight size={20} />
        </div>
      </Container>
    </main>
  );
}
