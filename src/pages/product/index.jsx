import React, { useEffect } from "react";

const Product = () => {
  useEffect(() => {
    document.title = "Kreasi Agro Mandiri - Product";
  }, []);

  const imgVegetable = [
    {
      nama: "Honey Sweet Potato",
      alt: "img-hsp",
      nameImg: "/images/product/vegetables/hsp.png",
    },
    {
      nama: "Purple Sweet Potato",
      alt: "img-psp",
      nameImg: "/images/product/vegetables/psp.png",
    },
    {
      nama: "Japanese Sweet Potato",
      alt: "img-jsp",
      nameImg: "/images/product/vegetables/jsp.png",
    },
    {
      nama: "Potato",
      alt: "img-potato",
      nameImg: "/images/product/vegetables/potato.png",
    },
    {
      nama: "Baby Potato",
      alt: "img-baby-potato",
      nameImg: "/images/product/vegetables/baby-potato.png",
    },
    {
      nama: "Shallot",
      alt: "img-shallot",
      nameImg: "/images/product/vegetables/shallot.png",
    },
    {
      nama: "Ginger",
      alt: "img-ginger",
      nameImg: "/images/product/vegetables/ginger.png",
    },
    {
      nama: "Cassava",
      alt: "img-cassava",
      nameImg: "/images/product/vegetables/cassava.png",
    },
    {
      nama: "Taro",
      alt: "img-taro",
      nameImg: "/images/product/vegetables/taro.png",
    },
    {
      nama: "Fine Bean",
      alt: "img-fine-bean",
      nameImg: "/images/product/vegetables/fine-bean.png",
    },
    {
      nama: "Fresh Bean",
      alt: "img-fresh-bean",
      nameImg: "/images/product/vegetables/fresh-bean.png",
    },
    {
      nama: "Petai",
      alt: "img-petai",
      nameImg: "/images/product/vegetables/petai.png",
    },
    {
      nama: "WaterCress",
      alt: "img-watercress",
      nameImg: "/images/product/vegetables/watercress.png",
    },
  ];

  const imgFruits = [
    {
      nama: "Honey Sweet Potato",
      alt: "img-bn",
      nameImg: "/images/product/fruits/bn.png",
    },
    {
      nama: "Green Kabocha",
      alt: "img-green-kabocha",
      nameImg: "/images/product/fruits/green-kabocha.png",
    },
    {
      nama: "Orange Kabocha",
      alt: "img-orange-kabocha",
      nameImg: "/images/product/fruits/orange-kabocha.png",
    },
    {
      nama: "Pumkin",
      alt: "img-pumpkin",
      nameImg: "/images/product/fruits/pumpkin.png",
    },
    {
      nama: "Rock Melon",
      alt: "img-rock-melon",
      nameImg: "/images/product/fruits/rock-melon.png",
    },
    {
      nama: "Honey Melon",
      alt: "img-honey-melon",
      nameImg: "/images/product/fruits/honey-melon.png",
    },
    {
      nama: "Watermelon",
      alt: "img-watermelon",
      nameImg: "/images/product/fruits/watermelon.png",
    },
    {
      nama: "Salak",
      alt: "img-salak",
      nameImg: "/images/product/fruits/salak.png",
    },
    {
      nama: "Avocado",
      alt: "img-avocado",
      nameImg: "/images/product/fruits/avocado.png",
    },
    {
      nama: "PineApple",
      alt: "img-pineapple",
      nameImg: "/images/product/fruits/pineapple.png",
    },
  ];

  const imgPackaging = [
    {
      nama: "Carton Packed",
      alt: "img-carton",
      nameImg: "/images/product/packaging/carton.png",
    },
    {
      nama: "Loose",
      alt: "img-loose",
      nameImg: "/images/product/packaging/loose.png",
    },
    {
      nama: "Plastic Packed",
      alt: "img-plastic",
      nameImg: "/images/product/packaging/plastic.png",
    },
  ];

  return (
    <>
      {/* TAB 1 */}
      <div
        className="relative w-full bg-cover bg-center py-[100px] lg:py-[200px]"
        style={{ backgroundImage: "url(/images/product/background.png)" }}
      >
        {/* <div className="absolute inset-0 bg-white bg-opacity-10"></div> */}
        <div className="container relative">
          <div className="flex flex-col items-center justify-center text-center gap-4 ">
            <h1 className="text-[36px] lg:text-[64px] font-bold text-[#1CA449]">
              Our Product Values
            </h1>
            <p className="text-center lg:px-[100px] text-md lg:text-2xl">
              We always harvest fresh products with strict quality control
              within the production process. We believe within the freshness of
              our products there is quality that we delivers, so that our
              customer can feel and taste the best quality agriculture products
              from Indonesia.
            </p>
          </div>
        </div>
      </div>

      {/* TAB 2 */}
      <div className="w-full bg-white py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[40px]">
            <div className="header">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Vegetables
              </h1>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-between mt-10">
              {imgVegetable.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 mb-10"
                >
                  <img src={item.nameImg} alt={item.alt} />
                  <h3 className="text-[30px] text-black font-semibold mb-2">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TAB 3 */}
      <div className="w-full bg-white py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[40px]">
            <div className="header">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Fruits
              </h1>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-between mt-10">
              {imgFruits.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-4 mb-10"
                >
                  <img src={item.nameImg} alt={item.alt} />
                  <h3 className="text-[30px] text-black font-semibold mb-2">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TAB 4 */}
      <div className="w-full bg-white py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[40px]">
            <div className="header">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Packaging
              </h1>
            </div>
            <div className="w-full flex flex-wrap items-center justify-center lg:justify-between mt-10">
              {imgPackaging.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-12 mb-10"
                >
                  <img src={item.nameImg} alt={item.alt} />
                  <h3 className="text-[30px] text-black font-semibold mb-2">
                    {item.nama}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TAB 5 */}
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

export default Product;
