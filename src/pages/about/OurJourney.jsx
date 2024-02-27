import React from "react";

const OurJourney = () => {
  return (
    <div className="w-full bg-white py-[100px]">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[30px] lg:text-[36px] font-bold">Our Journey</h2>
          <div className="relative w-full mt-[80px] flex flex-col gap-14">
            <div className="absolute p-[7px] h-[90%] left-[9px] top-[18px] rounded-full bg-[#1CA449]" />
            <div className="flex items-center gap-10">
              <div className="relative p-[16px] rounded-full bg-[#B4B4B4]" />
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="title flex flex-col text-xl lg:w-[220px]">
                  <h3 className="font-bold">Agustus 2023</h3>
                  <h3>Company Founded</h3>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="relative p-[16px] rounded-full bg-[#B4B4B4]" />
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="title flex flex-col text-xl lg:w-[220px]">
                  <h3 className="font-bold">September 2023</h3>
                  <h3>1st Shipment to Singapore</h3>
                </div>
                <div className="image">
                  <img
                    src="/images/about/ourjourney-img-1.png"
                    alt="ourjourney-img-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="relative p-[16px] rounded-full bg-[#B4B4B4]" />
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="title flex flex-col text-xl lg:w-[220px]">
                  <h3 className="font-bold">October 2023</h3>
                  <h3>Launch Farm Partnership Program</h3>
                </div>
                <div className="image">
                  <img
                    src="/images/about/ourjourney-img-2.png"
                    alt="ourjourney-img-2"
                  />
                </div>
                <div className="image">
                  <img
                    src="/images/about/ourjourney-img-3.png"
                    alt="ourjourney-img-3"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="relative p-[16px] rounded-full bg-[#B4B4B4]" />
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="title flex flex-col text-xl lg:w-[220px]">
                  <h3 className="font-bold">September 2023</h3>
                  <h3>2st Shipment to Singapore</h3>
                </div>
                <div className="image">
                  <img
                    src="/images/about/ourjourney-img-1.png"
                    alt="ourjourney-img-1"
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-10">
              <div className="relative p-[16px] rounded-full bg-[#B4B4B4]" />
              <div className="w-full flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="title flex flex-col text-xl lg:w-[220px]">
                  <h3 className="font-bold">September 2023</h3>
                  <h3>3st Shipment to Singapore</h3>
                </div>
                <div className="image">
                  <img
                    src="/images/about/ourjourney-img-4.png"
                    alt="ourjourney-img-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
