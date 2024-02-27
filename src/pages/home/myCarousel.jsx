import { Carousel } from "@material-tailwind/react";

const MyCarousel = () => {

    const productImg = [
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

    ]

    return (
        <Carousel
            className="w-[600px]"
            navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                    {new Array(length).fill("").map((_, i) => (
                        <span
                            key={i}
                            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                }`}
                            onClick={() => setActiveIndex(i)}
                        />
                    ))}
                </div>
            )}
        >
            {productImg.map((item, index) => (
                <div key={index} className="flex flex-col items-center justify-center gap-10 py-10">
                    <img src={item.nameImg} alt={item.alt} class="rounded-[50px] w-[380px] h-[480px] object-cover shadow-md shadow-[#38744c]" />
                    <h3 className="text-[32px] text-white">{item.nama}</h3>
                </div>
            ))}
        </Carousel>
    );
}

export default MyCarousel;