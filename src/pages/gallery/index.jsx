import React, { useEffect } from "react";
import ImagePopup from "./ImagePopup";
import GalleryLightBox from "./GalleryLightbox";

const Gallery = () => {
  useEffect(() => {
    document.title = "Kreasi Agro Mandiri - Gallery";
  }, []);

  const farmImg = [
    {
      nama: "farm-img-1",
      namaImg: "/images/gallery/farm/farm-img-1.png",
    },
    {
      nama: "farm-img-2",
      namaImg: "/images/gallery/farm/farm-img-2.png",
    },
    {
      nama: "farm-img-3",
      namaImg: "/images/gallery/farm/farm-img-3.png",
    },
    {
      nama: "farm-img-4",
      namaImg: "/images/gallery/farm/farm-img-4.png",
    },
    {
      nama: "farm-img-5",
      namaImg: "/images/gallery/farm/farm-img-5.png",
    },
    {
      nama: "farm-img-6",
      namaImg: "/images/gallery/farm/farm-img-6.png",
    },
    {
      nama: "farm-img-7",
      namaImg: "/images/gallery/farm/farm-img-7.png",
    },
    {
      nama: "farm-img-8",
      namaImg: "/images/gallery/farm/farm-img-8.png",
    },
    {
      nama: "farm-img-9",
      namaImg: "/images/gallery/farm/farm-img-9.png",
    },
    {
      nama: "farm-img-10",
      namaImg: "/images/gallery/farm/farm-img-10.png",
    },
    {
      nama: "farm-img-11",
      namaImg: "/images/gallery/farm/farm-img-11.png",
    },
    {
      nama: "farm-img-12",
      namaImg: "/images/gallery/farm/farm-img-12.png",
    },
    {
      nama: "farm-img-13",
      namaImg: "/images/gallery/farm/farm-img-13.png",
    },
    {
      nama: "farm-img-14",
      namaImg: "/images/gallery/farm/farm-img-14.png",
    },
    {
      nama: "farm-img-15",
      namaImg: "/images/gallery/farm/farm-img-15.png",
    },
    {
      nama: "farm-img-16",
      namaImg: "/images/gallery/farm/farm-img-16.png",
    },
    {
      nama: "farm-img-17",
      namaImg: "/images/gallery/farm/farm-img-17.png",
    },
    {
      nama: "farm-img-18",
      namaImg: "/images/gallery/farm/farm-img-18.png",
    },
    {
      nama: "farm-img-19",
      namaImg: "/images/gallery/farm/farm-img-19.png",
    },
    {
      nama: "farm-img-20",
      namaImg: "/images/gallery/farm/farm-img-20.png",
    },
  ];

  const productionImg = [
    {
      nama: "production-img-1",
      namaImg: "/images/gallery/production/production-img-1.png",
    },
    {
      nama: "production-img-2",
      namaImg: "/images/gallery/production/production-img-2.png",
    },
    {
      nama: "production-img-3",
      namaImg: "/images/gallery/production/production-img-3.png",
    },
    {
      nama: "production-img-4",
      namaImg: "/images/gallery/production/production-img-4.png",
    },
    {
      nama: "production-img-5",
      namaImg: "/images/gallery/production/production-img-5.png",
    },
    {
      nama: "production-img-6",
      namaImg: "/images/gallery/production/production-img-6.png",
    },
    {
      nama: "production-img-7",
      namaImg: "/images/gallery/production/production-img-7.png",
    },
    {
      nama: "production-img-8",
      namaImg: "/images/gallery/production/production-img-8.png",
    },
    {
      nama: "production-img-9",
      namaImg: "/images/gallery/production/production-img-9.png",
    },
    {
      nama: "production-img-10",
      namaImg: "/images/gallery/production/production-img-10.png",
    },
    {
      nama: "production-img-11",
      namaImg: "/images/gallery/production/production-img-11.png",
    },
    {
      nama: "production-img-12",
      namaImg: "/images/gallery/production/production-img-12.png",
    },
  ];

  const shippingImg = [
    {
      nama: "shipping-img-1",
      namaImg: "/images/gallery/shipping/shipping-img-1.png",
    },
    {
      nama: "shipping-img-2",
      namaImg: "/images/gallery/shipping/shipping-img-2.png",
    },
    {
      nama: "shipping-img-3",
      namaImg: "/images/gallery/shipping/shipping-img-3.png",
    },
    {
      nama: "shipping-img-4",
      namaImg: "/images/gallery/shipping/shipping-img-4.png",
    },
    {
      nama: "shipping-img-5",
      namaImg: "/images/gallery/shipping/shipping-img-5.png",
    },
    {
      nama: "shipping-img-6",
      namaImg: "/images/gallery/shipping/shipping-img-6.png",
    },
    {
      nama: "shipping-img-7",
      namaImg: "/images/gallery/shipping/shipping-img-7.png",
    },
    {
      nama: "shipping-img-8",
      namaImg: "/images/gallery/shipping/shipping-img-8.png",
    },
    {
      nama: "shipping-img-9",
      namaImg: "/images/gallery/shipping/shipping-img-9.png",
    },
    {
      nama: "shipping-img-10",
      namaImg: "/images/gallery/shipping/shipping-img-10.png",
    },
    {
      nama: "shipping-img-11",
      namaImg: "/images/gallery/shipping/shipping-img-11.png",
    },
    {
      nama: "shipping-img-12",
      namaImg: "/images/gallery/shipping/shipping-img-12.png",
    },
    {
      nama: "shipping-img-13",
      namaImg: "/images/gallery/shipping/shipping-img-13.png",
    },
    {
      nama: "shipping-img-14",
      namaImg: "/images/gallery/shipping/shipping-img-14.png",
    },
    {
      nama: "shipping-img-15",
      namaImg: "/images/gallery/shipping/shipping-img-15.png",
    },
    {
      nama: "shipping-img-16",
      namaImg: "/images/gallery/shipping/shipping-img-16.png",
    },
    {
      nama: "shipping-img-17",
      namaImg: "/images/gallery/shipping/shipping-img-17.png",
    },
    {
      nama: "shipping-img-18",
      namaImg: "/images/gallery/shipping/shipping-img-18.png",
    },
    {
      nama: "shipping-img-19",
      namaImg: "/images/gallery/shipping/shipping-img-19.png",
    },
    {
      nama: "shipping-img-20",
      namaImg: "/images/gallery/shipping/shipping-img-20.png",
    },
  ];

  return (
    <>
      {/* TAB 1 */}
      <div className="w-full py-[80px] lg:py-[120px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="title">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Farm
              </h1>
            </div>
            <ImagePopup galleryImg={farmImg} />
          </div>
        </div>
      </div>

      {/* TAB 2 */}
      <div className="w-full py-[120px] bg-[#1CA449] rounded-2xl">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="title">
              <h1 className="text-[42px] lg:text-[64px] text-white font-bold">
                Production
              </h1>
            </div>
            <ImagePopup galleryImg={productionImg} />
          </div>
        </div>
      </div>

      {/* TAB 3 */}
      <div className="w-full py-[120px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[30px]">
            <div className="title">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Shipping
              </h1>
            </div>
            <ImagePopup galleryImg={shippingImg} />
          </div>
        </div>
      </div>

      {/* TAB 4 */}
      <div className="relative w-full bg-white lg:py-0 py-[100px]">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="img-petani w-full absolute opacity-30 lg:relative lg:opacity-100 hidden lg:block">
              <img src="/images/home/petani.png" alt="img-petani" />
            </div>
            <div className="w-full text-center lg:text-start">
              <h1 className="text-[40px] lg:text-[64px] text-[#1CA449] font-bold">
                Find your needs?
              </h1>
              <p className="text-lg lg:text-2xl mt-6">
                Reach us if you have any questions regarding anything related to
                the products, we will help you to find the solutions for your
                business needs!
              </p>
              <a
                aria-label="WhatsApp."
                href="https://wa.me/6282113277327?text=Halo%20ada%20yang%20bisa%20kami%20bantu?%0A%0Ahttps://kreasiagromandiri.com/"
                target="_blank"
              >
                <button className="bg-[#1CA449] py-3 mt-8 px-10 text-lg rounded-lg text-white font-bold hover:bg-white hover:border-[#1ca449] border hover:text-[#1ca449]">
                  Contact Us (WhatsApp)
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
