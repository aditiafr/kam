import React, { useState } from "react";
import ImagePopup from "../gallery/ImagePopup";
// import MyCarousel from "./myCarousel";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  const [selectedProductDescription, setSelectedProductDescription] = useState(
    "Find our best honey sweet potato with the best skin texture and color, also comes with excellent taste. Our products are freshly provided directly from our farm and our trusted partners with a strict quality control process."
  );
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryImg = [
    {
      nama: "img-1",
      namaImg: "/images/home/gallery/img-1.png",
    },
    {
      nama: "img-2",
      namaImg: "/images/home/gallery/img-2.png",
    },
    {
      nama: "img-3",
      namaImg: "/images/home/gallery/img-3.png",
    },
    {
      nama: "img-4",
      namaImg: "/images/home/gallery/img-4.png",
    },
    {
      nama: "img-5",
      namaImg: "/images/home/gallery/img-5.png",
    },
    {
      nama: "img-6",
      namaImg: "/images/home/gallery/img-6.png",
    },
    {
      nama: "img-7",
      namaImg: "/images/home/gallery/img-7.png",
    },
    {
      nama: "img-8",
      namaImg: "/images/home/gallery/img-8.png",
    },
    {
      nama: "img-9",
      namaImg: "/images/home/gallery/img-9.png",
    },
    {
      nama: "img-10",
      namaImg: "/images/home/gallery/img-10.png",
    },
  ];

  const productImg = [
    {
      nama: "Honey Sweet Potato",
      alt: "img-hsp",
      nameImg: "/images/product/vegetables/hsp.png",
      description:
        "Find our best honey sweet potato with the best skin texture and color, also comes with excellent taste. Our products are freshly provided directly from our farm and our trusted partners with a strict quality control process. ",
    },
    {
      nama: "Purple Sweet Potato",
      alt: "img-psp",
      nameImg: "/images/product/vegetables/psp.png",
      description:
        "Savor the healthful indulgence of our Purple Sweet Potato—cherished for its unique flavor and visually striking violet hues, while also delivering a boost of antioxidants and essential nutrients. Directly sourced for freshness, each undergoes rigorous quality control, promising a culinary experience that marries extraordinary taste with vibrant aesthetics and nutritional benefits.",
    },
    {
      nama: "Japanese Sweet Potato",
      alt: "img-jsp",
      nameImg: "/images/product/vegetables/jsp.png",
      description:
        "Savor the exquisite flavor and smooth skin of our Japanese Sweet Potato. Directly sourced for freshness from our farm and trusted partners, each undergoes strict quality control. Elevate your dining experience with this authentic culinary gem.",
    },
    {
      nama: "Potato",
      alt: "img-potato",
      nameImg: "/images/product/vegetables/potato.png",
      description:
        "Discover the timeless appeal of our classic Potato—renowned for its versatile taste and comforting texture. Sourced directly for optimum freshness, each potato undergoes stringent quality control, ensuring a reliable ingredient for a myriad of culinary delights. Elevate your dishes with the wholesome simplicity of this kitchen staple.",
    },
    {
      nama: "Baby Potato",
      alt: "img-baby-potato",
      nameImg: "/images/product/vegetables/baby-potato.png",
      description:
        "Experience the tender charm of our Baby Potatoes—a petite delight loved for their buttery taste and delicate texture. Sourced for freshness, each undergoes stringent quality control, promising a delightful addition to your culinary creations.",
    },
    {
      nama: "Shallot",
      alt: "img-shallot",
      nameImg: "/images/product/vegetables/shallot.png",
      description:
        "Elevate your dishes with the subtle sweetness of our Shallots. Handpicked for optimum flavor, each undergoes meticulous quality control, ensuring a versatile ingredient that adds depth and richness to your culinary repertoire.",
    },
    {
      nama: "Ginger",
      alt: "img-ginger",
      nameImg: "/images/product/vegetables/ginger.png",
      description:
        "Embrace the zesty warmth of our Ginger—a kitchen essential celebrated for its robust flavor. Sourced directly for freshness, each ginger root undergoes rigorous quality control, promising a culinary journey filled with aromatic and spicy delights.",
    },
    {
      nama: "Cassava",
      alt: "img-cassava",
      nameImg: "/images/product/vegetables/cassava.png",
      description:
        "Discover the hearty goodness of our Cassava—a starchy treasure loved for its versatility. Sourced for freshness, each undergoes strict quality control, ensuring a reliable ingredient that brings a touch of wholesome comfort to your table.",
    },
    {
      nama: "Taro",
      alt: "img-taro",
      nameImg: "/images/product/vegetables/taro.png",
      description:
        "Indulge in the velvety taste of our Taro—a root vegetable celebrated for its unique flavor and creamy texture. Sourced for freshness, each taro undergoes meticulous quality control, promising a culinary experience that marries exceptional taste with a touch of exotic flair.",
    },
    {
      nama: "Fine Bean",
      alt: "img-fine-bean",
      nameImg: "/images/product/vegetables/fine-bean.png",
      description:
        "Delight in the crisp freshness of our Fine Beans—a vibrant addition to your plate known for their tender texture and vibrant green color. Sourced directly for peak freshness, each fine bean undergoes stringent quality control, ensuring a wholesome and nutritious side to your meals.",
    },
    {
      nama: "Fresh Bean",
      alt: "img-fresh-bean",
      nameImg: "/images/product/vegetables/fresh-bean.png",
      description:
        "Elevate your dishes with the wholesome goodness of our Fresh Beans—a garden-fresh delight loved for their crispness and vibrant flavor. Sourced for freshness, each bean undergoes rigorous quality control, promising a delectable addition to your culinary creations.",
    },
    {
      nama: "Petai",
      alt: "img-petai",
      nameImg: "/images/product/vegetables/petai.png",
      description:
        "Experience the bold and nutty taste of our Petai—a unique tropical bean celebrated for its distinctive flavor. Sourced for freshness, each Petai undergoes meticulous quality control, promising a culinary adventure filled with bold and savory notes.",
    },
    {
      nama: "WaterCress",
      alt: "img-watercress",
      nameImg: "/images/product/vegetables/watercress.png",
      description:
        "Immerse yourself in the peppery freshness of our Watercress—a nutrient-packed green loved for its crisp texture and vibrant taste. Sourced directly for peak freshness, each bunch undergoes stringent quality control, promising a wholesome and flavorful addition to your salads and dishes.",
    },
  ];

  const handleProductDescriptionChange = (index) => {
    setSelectedProductDescription(productImg[index].description);
  };

  return (
    <>
      {/* TAB 1 */}
      <div className="relative bg-[#1CA449] lg:pt-[80px] lg:pb-[380px] pb-[100px] pt-[50px] lg:py-[100px] w-full">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full text-white text-center lg:text-start gap-4">
            <div className="w-full flex flex-col">
              <h1 className="text-[24px] lg:text-[52px] font-bold">
                HARVESTING
                <span className="px-2 ml-2 bg-gradient-to-br from-[#3BF478] to-[#1CA449]">
                  FRESHNESS
                </span>
              </h1>
              <h1 className="text-[24px] lg:text-[52px] font-bold">
                DELIVERING
                <span className="px-2 ml-2 bg-gradient-to-br from-[#3BF478] to-[#1CA449]">
                  QUALITY.
                </span>
              </h1>
            </div>
            <div className="content-2">
              <p className="text-xl">
                Kreasi transforms Indonesian agriculture to unlock its full
                potential by modernizing the farming practices
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full relative lg:bottom-[350px] bottom-[80px]">
          <div className="container">
            <img
              src="/images/home/image.png"
              alt="images-mountain"
              className="w-full lg:p-4 p-2 rounded-xl bg-[#1CA449]"
            />
          </div>
        </div>
      </div>

      {/* TAB 2 */}
      <div className="w-full lg:pb-[220px] lg:pt-0 py-[100px]">
        <div className="container">
          <div className="flex flex-col lg:flex-row items-center justify-beetwen gap-16">
            <div className="flex flex-row items-center justify-center w-full relative">
              <div className="relative lg:absolute lg:p-[170px] p-[100px] rounded-full bg-[#1CA449] lg:bottom-0 bottom-[60px] left-[50px]" />
              <div className="relative lg:absolute lg:p-[130px] p-[80px] rounded-full bg-[#1CA449] lg:top-0 top-[60px] lg:right-0" />
              <img
                src="/images/home/img-1-tab2.png"
                alt="img1-tab2"
                className="absolute lg:left-0 left-3 w-[120px] lg:w-auto"
              />
              <img
                src="/images/home/img-3-tab2.png"
                alt="img3-tab2"
                className="absolute lg:right-0 right-3 w-[120px] lg:w-auto"
              />
              <img
                src="/images/home/img-2-tab2.png"
                alt="img2-tab2"
                className="absolute w-[140px] lg:w-auto"
              />
            </div>
            <div className="w-full flex items-center justify-center text-center lg:text-start">
              <div className="content">
                <h1 className="text-[46px] lg:text-[64px] font-bold text-[#1CA449]">
                  What we do
                </h1>
                <p className="text-lg lg:text-2xl">
                  Kreasi is one of the leading exporter from Indonesia
                  established in 2019, and focused on providing fresh vegetables
                  and fruits to South East Asia region. We have shipped over Rp
                  500 million worth of products to more than 10 customers.
                </p>
                <Link to="/about">
                  <button className="bg-[#1CA449] py-3 px-6 lg:text-xl text-md mt-6 rounded-lg text-white font-bold hover:bg-white hover:border-[#1CA449] border hover:text-[#1CA449] transition duration-300 ease-in-out">
                    Find out more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB 3 */}
      <div className="w-full bg-[#1CA449] py-[100px] lg:py-[120px]">
        <div className="container">
          <div className="flex flex-col-reverse gap-10 lg:gap-0 lg:flex-row items-center justify-between">
            <div className="content-1 text-white w-full text-center lg:text-start">
              <h1 className="text-[36px] lg:text-[64px] font-semibold lg:mb-0 mb-4">
                Our Products
              </h1>
              <p className="text-lg lg:text-2xl">
                {selectedProductDescription}
              </p>
              <Link to="/product">
                <button className="bg-white py-3 lg:py-4 px-6 text-md lg:text-lg mt-6 rounded-lg text-[#1CA449] font-bold hover:bg-[#1ca449] hover:border-white border hover:text-white transition duration-300 ease-in-out">
                  Discover More
                </button>
              </Link>
            </div>
            <div className="flex items-center justify-center lg:w-1/2 w-full">
              <Carousel
                className="w-auto"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                  <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                      <span
                        key={i}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                          }`}
                        onClick={() => {
                          setActiveIndex(i);
                          handleProductDescriptionChange(i); // Memperbarui deskripsi produk saat indeks gambar berubah
                        }}
                      />
                    ))}
                  </div>
                )}
                prevArrow={({ handlePrev }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={() => {
                      handlePrev();
                      setActiveIndex(
                        (activeIndex - 1 + productImg.length) %
                        productImg.length
                      );
                      handleProductDescriptionChange(
                        (activeIndex - 1 + productImg.length) %
                        productImg.length
                      );
                    }}
                    className="!absolute top-2/4 left-4 -translate-y-2/4 bg-gray-200 bg-opacity-70 rounded-full hover:bg-opacity-80 lg:bg-transparent lg:w-full w-[42px] lg:h-full h-[42px] shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="lg:w-10 w-7 lg:h-10 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5 8.25 12l7.5-7.5"
                        stroke="gray"
                      />
                    </svg>
                  </IconButton>
                )}
                nextArrow={({ handleNext }) => (
                  <IconButton
                    variant="text"
                    color="white"
                    size="lg"
                    onClick={() => {
                      handleNext();
                      setActiveIndex((activeIndex + 1) % productImg.length);
                      handleProductDescriptionChange(
                        (activeIndex + 1) % productImg.length
                      );
                    }}
                    className="!absolute top-2/4 !right-4 -translate-y-2/4 bg-gray-200 bg-opacity-70 rounded-full hover:bg-opacity-80 lg:bg-transparent lg:w-full w-[42px] lg:h-full h-[42px] shadow-xl"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="lg:w-10 w-7 lg:h-10 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        stroke="gray"
                      />
                    </svg>
                  </IconButton>
                )}
              >
                {productImg.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center gap-6 py-10"
                    // Memperbarui deskripsi produk yang dipilih saat mengklik gambar
                    onClick={() =>
                      setSelectedProductDescription(item.description)
                    }
                  >
                    <img
                      src={item.nameImg}
                      alt={item.alt}
                      className="rounded-[32px] w-[380px] h-[480px] object-cover shadow-md shadow-[#38744c]"
                    />
                    <h3 className="lg:text-[32px] text-[28px] text-white mb-2">{item.nama}</h3>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* TAB 4 */}
      <div className="w-full bg-white py-[100px] lg:py-[150px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[42px] lg:text-[64px] font-bold text-[#1CA449]">
              Accomplishment
            </h1>
            <div className="flex flex-col lg:flex-row items-center justify-between mt-[120px] gap-24 w-full">
              <div className="flex flex-col gap-12 w-full text-center">
                <img src="/images/home/img-1-tab4.png" alt="w-full" />
                <h3 className="text-[32px] text-[#1CA449]">
                  {">"}50.000Kg
                  <br />
                  Products Shipped
                </h3>
              </div>
              <div className="flex flex-col gap-12 w-full text-center">
                <img src="/images/home/img-2-tab4.png" alt="w-full" />
                <h3 className="text-[32px] text-[#1CA449]">
                  Rp500 Milion of
                  <br />
                  Products Worth
                </h3>
              </div>
              <div className="flex flex-col gap-12 w-full text-center">
                <img src="/images/home/img-3-tab4.png" alt="w-full" />
                <h3 className="text-[32px] text-[#1CA449]">
                  ±30 Farm Partners
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB 5 */}
      <div className="w-full bg-[#1CA449] py-[100px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[55px]">
            <h1 className="text-[42px] lg:text-[64px] font-bold text-white">
              Gallery
            </h1>
            <ImagePopup galleryImg={galleryImg} />
            <Link to="/gallery">
              <button className="bg-white py-3 px-12 text-md lg:text-lg rounded-lg text-[#1CA449] font-bold hover:bg-[#1ca449] hover:border-white border hover:text-white">
                See more
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* TAB 6 */}
      <div className="w-full bg-white py-[100px] lg:py-0">
        <div className="container">
          <div className="flex items-center justify-center">
            <div className="img-petani w-full hidden lg:block">
              <img src="/images/home/petani.png" alt="img-petani" />
            </div>
            <div className="w-full text-center lg:text-start">
              <h1 className="text-[42px] lg:text-[64px] text-[#1CA449] font-bold">
                Connect With Us
              </h1>
              <p className="text-lg lg:text-2xl mt-6">
                Reach us if you have any questions regarding anything related to
                the company, we will help you to find the solutions for your
                business needs!
              </p>
              <a
                aria-label="WhatsApp."
                href="https://wa.me/6282113277327?text=Halo%20ada%20yang%20bisa%20kami%20bantu?%0A%0Ahttps://kreasiagromandiri.com/"
                target="_blank" rel="noreferrer"
              >
                <button className="bg-[#1CA449] py-3 mt-8 px-10 text-md lg:text-lg rounded-lg text-white font-bold hover:bg-white hover:border-[#1ca449] border hover:text-[#1ca449] transition duration-300 ease-in-out">
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

export default Home;
