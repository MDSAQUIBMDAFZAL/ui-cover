import React from "react";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-black">
      {/* Background image tile */}
      <div className="absolute inset-0 bg-[url('/image.png')] bg-repeat opacity-30 z-0" />

      {/* Grid Overlay Rectangle */}
      <div
        className="absolute z-10 bg-[url('/grid.svg')] bg-repeat opacity-20"
        style={{
          width: "714px",
          height: "714px",
          top: "10px",
          left: "51px",
        }}
      />

      {/* Purple glowing square */}
      <div
        className="absolute z-0"
        style={{
          width: "706px",
          height: "636px",
          backgroundColor: "#A287F4",
          opacity: 0.8,
          bottom: "-150px",
          right: "-100px",
          transform: "rotate(33.88deg)",
          filter: "blur(224px)",
        }}
      />

      {/* green glowing square */}
      <div
        className="absolute z-0"
        style={{
          width: "777.01px",
          height: "507.79px",
          backgroundColor: "#12E6C8",
          opacity: 0.8,
          top: "-618px",
          left: "454px",
          transform: "rotate(22.69deg)",
          filter: "blur(240.53px)",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 flex flex-col pl-[180px] pt-[141px]">
        {/* Button */}
        <button className="text-black bg-[#FFBB37] uppercase w-[357px] h-[81px] rounded-[15px] border shadow-[4px_4px_0px_0px_#555555] font-mono font-normal text-[30.42px] leading-[30.42px]">
          Assignment
        </button>

        {/* Title */}
        <h1 className="text-white uppercase font-sora font-bold text-[128px] leading-[172px] mt-[99px] mb-[150px]">
          UI Developer
          <br />
          Assignment
        </h1>

        {/* Company */}
        <h6 className="text-white uppercase font-mono font-normal text-[36px] leading-[36px] mb-[17px]">
          Company
        </h6>
        <p className="text-white font-mono font-normal text-[36px] leading-[36px] capitalize">
          Juspay Technologies Private Limited
        </p>
      </div>
    </div>
  );
};

export default Home;
