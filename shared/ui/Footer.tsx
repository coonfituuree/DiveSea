import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full h-[345px] bg-[#141416]">
      <div className="flex justify-between items-center max-sm:items-baseline px-24 py-16 max-sm:p-6 max-sm:flex-col">
        <div className="flex items-center gap-2">
          <Image
            src="/Wave.svg"
            alt="logo"
            width={65}
            height={65}
            className="logo"></Image>
          <div className="text-center text-white text-2xl font-bold">DiveSea</div>
        </div>

        <div className="flex text-[#B9B9B9] gap-16 max-sm:flex-col max-sm:gap-3 max-sm:mt-6">
          <div>Privacy Policy</div>
          <div>Term & Conditions</div>
          <div>About Us</div>
          <div>Contact</div>
        </div>
      </div>

      <div className="ml-26 max-sm:ml-6">
        <div className="text-[#999999]">© 2023 EATLY All Rights Reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
