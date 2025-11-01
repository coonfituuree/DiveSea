"use client";
import { ReactNode, useState } from "react";

import Container from "./Container";
import { cn } from "../lib/utils";
import Image from "next/image";

import { Search, Menu, X } from "lucide-react";

type Props = {
  className?: string;
  children?: ReactNode;
};

export default function Header({ className, children }: Props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-4 md:py-6 px-4">
        {/* left side */}
        <div className="flex items-center justify-center gap-2">
          <Image
            src="DiveSeaLogo.svg"
            alt="DiveSea Logo"
            width={53}
            height={53}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <div className="md:text-xl font-medium">DiveSea</div>
        </div>

        {/* center */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          <nav className="flex gap-6 xl:gap-8 text-[#606060]">
            <a
              href="#"
              className="font-medium hover:text-black transition-colors">
              Discover
            </a>
            <a
              href="#"
              className="font-medium hover:text-black transition-colors">
              Creators
            </a>
            <a
              href="#"
              className="font-medium hover:text-black transition-colors">
              Sell
            </a>
            <a
              href="#"
              className="font-medium hover:text-black transition-colors">
              Stats
            </a>
          </nav>

          {/* right side */}
          <div className="flex gap-4 xl:gap-6 items-center">
            <div className="relative w-full max-w-[200px] xl:max-w-sm">
              <Search
                size={20}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2C3CB]"
              />
              <input
                type="text"
                placeholder="Search Art Work / Creator"
                className="w-full rounded-lg bg-[#EDEDED] pl-10 pr-4 py-2.5 xl:py-3 text-sm placeholder:text-[#C2C3CB] focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>

            <button className="bg-[#141416] px-6 xl:w-60 py-2.5 xl:py-4 rounded-2xl cursor-pointer text-white text-xs font-medium transition-all duration-300 hover:bg-white hover:text-black">
              CONNECT WALLET
            </button>
          </div>
        </div>

        {/* responsive button for iphone */}
        <button
          className="lg:hidden p-2 text-gray-600 hover:text-black transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* responidve for iphone 11 */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <Container className="px-4 py-4">
            <nav className="flex flex-col gap-4 mb-4">
              <a
                href="#"
                className="font-medium text-[#606060] hover:text-black transition-colors py-2">
                Discover
              </a>
              <a
                href="#"
                className="font-medium text-[#606060] hover:text-black transition-colors py-2">
                Creators
              </a>
              <a
                href="#"
                className="font-medium text-[#606060] hover:text-black transition-colors py-2">
                Sell
              </a>
              <a
                href="#"
                className="font-medium text-[#606060] hover:text-black transition-colors py-2">
                Stats
              </a>
            </nav>

            <div className="flex flex-col items-center gap-6">
              <div className="relative w-full">
                <Search
                  size={20}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C2C3CB]"
                />
                <input
                  type="text"
                  placeholder="Search Art Work / Creator"
                  className="w-full rounded-lg bg-[#EDEDED] pl-10 pr-4 py-3 text-sm placeholder:text-[#C2C3CB] focus:outline-none focus:ring-2 focus:ring-gray-300"
                />
              </div>

              <button className="bg-[#141416] w-64 py-4 rounded-2xl cursor-pointer text-white text-base font-medium hover:bg-gray-800 transition-colors">
                CONNECT WALLET
              </button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
