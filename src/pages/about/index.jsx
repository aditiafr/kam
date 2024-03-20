import React, { useEffect } from "react";
import OurJourney from "./OurJourney";

const About = () => {
  useEffect(() => {
    document.title = "Kreasi Agro Mandiri - About";
  }, []);

  const imgIcon = [
    {
      h3: ">50.000Kg",
      p: "Product Shipped",
      alt: "icon-1",
      nameImg: "/images/about/icon-1.png",
    },
    {
      h3: "±10.000 m2",
      p: "Farm Field",
      alt: "icon-2",
      nameImg: "/images/about/icon-2.png",
    },
    {
      h3: "±30 Farm Partners",
      p: "",
      alt: "icon-3",
      nameImg: "/images/about/icon-3.png",
    },
  ];

  const dataTeam = [
    {
      img: "/images/about/ceo.png",
      jabatan: "CEO",
      nama: "Raihan Mahesa",
      desc: "Experienced in managing various business fields, from manufacturing, automotive workshops, to exports, makes him aware of all kinds of business issues.",
    },
    {
      img: "/images/about/operational.png",
      jabatan: "Operational",
      nama: "Priyono",
      desc: "With an education background based in an area that produces vegetables and all kinds of tubers, he gave him the idea of marketing agricultural products to domestic and foreign markets, Collaborating with farmers to establish partnerships to meet product supply, until finally establishing his own company.",
    },
    {
      img: "/images/about/finance.png",
      jabatan: "Finance",
      nama: "Vicky Ardiansyah",
      desc: "Export manager with experience in export plan and export activities. Vicky has a strong research knowledge specifically related to defining the product requirements to buyers, strong skill for making sure commodities meet destination standards, finding ways to reduce costs, negotiating, manage documents, payments processes.",
    },
    {
      img: "/images/about/partnership.png",
      jabatan: "Partnership",
      nama: "Fachri Iskandar",
      desc: "International Business Development Manager with a passion for connecting Indonesian resources to the global market. Excellent communication skills and a strategic mindset that help him identify and pursue new business opportunities around the world.",
    },
    {
      img: "/images/about/strategy.png",
      jabatan: "Strategy",
      nama: "Arbi Ramadhan",
      desc: "Ex- Leading Startup Product manager with experience in product and ux research, Arbi has strong research knowledge related to the field, strong data analytical skills to build a product from scratch resulting an impact both for users and company.",
    },
  ];

  return (
    <>
      {/* TAB 1 */}
      <div
        className="w-full bg-cover bg-center pt-[180px]"
        style={{ backgroundImage: "url(/images/about/background.png)" }}
      >
        <div className="container">
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center text-white">
              <h1 className="text-[42px] lg:text-[64px] font-bold">About Us</h1>
              <p className="text-sm lg:text-xl">
                Harvesting Freshness, Delivering Quality
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 lg:gap-[150px] w-full mt-[180px] mb-[100px]">
              {imgIcon.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col text-center items-center justify-center text-white"
                >
                  <img src={item.nameImg} alt={item.alt} className="w-[32px]" />
                  <h3 className="font-semibold lg:text-xl text-sm mt-4">{item.h3}</h3>
                  <p className="lg:text-xl text-sm">{item.p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* TAB 2 */}
      <div className="w-full py-[80px] lg:py-[140px] bg-[#1CA449]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[24px] lg:gap-[100px]">
            <div className="flex flex-col gap-[24px] text-center lg:text-start lg:flex-row items-center lg:gap-[100px] w-full">
              <h2 className="text-[30px] lg:text-[36px] font-bold text-white">
                Harvesting
                <br />
                Freshness
              </h2>
              <p className="text-md lg:text-2xl text-white">
                We carefully grow and gather our produce using eco-friendly
                methods, making sure each harvest is not only abundant but also
                kind to the environment, ensuring a bountiful and
                environmentally-friendly experience.
              </p>
            </div>
            <div className="w-full">
              <img
                src="/images/about/img-kebun-1.png"
                alt="img-kebun-1"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-[24px] lg:gap-[100px] mt-[80px] lg:mt-[100px]">
            <div className="flex flex-col-reverse lg:flex-row text-center lg:text-start items-center justify-center gap-[24px] lg:gap-[100px]">
              <p className="text-md lg:text-2xl text-white">
                We prioritize delivering excellence by consistently providing
                high-quality products and services, ensuring every interaction
                reflects our commitment to superior quality and customer
                satisfaction.
              </p>
              <h2 className="text-[30px] lg:text-[36px] font-bold text-white">
                Delivering <br />
                Quality
              </h2>
            </div>
            <div className="w-full">
              <img
                src="/images/about/img-kacang.png"
                alt="img-kacang"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TAB 3 */}
      <OurJourney />

      {/* TAB 4 */}
      <div className="w-full bg-[#1CA449] py-[140px]">
        <div className="container">
          <div className="flex flex-col w-full text-white gap-20">
            <div className="flex flex-col lg:flex-row items-center justify-center text-center lg:text-start gap-4 lg:gap-0">
              <h2 className="lg:text-[36px] text-[30px] font-bold lg:w-1/3 w-full">
                Kreasi Team
              </h2>
              <p className="text-lg lg:text-xl w-full">
                Our team thrives on collaboration, pooling diverse talents and
                perspectives to create a dynamic synergy that propels us towards
                shared goals, fostering a supportive environment where
                everyone's contributions are valued and celebrated.
              </p>
            </div>
            {dataTeam.map((item, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center lg:text-start text-center gap-4 lg:gap-0"
              >
                <div className="img lg:w-1/3">
                  <img src={item.img} alt={item.jabatan} />
                </div>
                <div className="flex flex-col w-full">
                  <h2 className="text-[30px] lg:text-[36px] font-bold">
                    {item.jabatan}
                  </h2>
                  <h2 className="text-[30px] lg:text-[36px]">{item.nama}</h2>
                  <p className="text-lg lg:text-xl">{item.desc}</p>
                </div>
              </div>
            ))}
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

export default About;
