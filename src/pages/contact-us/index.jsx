import React, { useEffect } from "react";

const ContactUs = () => {
  useEffect(() => {
    document.title = "Kreasi Agro Mandiri - Contact Us";
  }, []);

  // Destination address
  const destination = encodeURIComponent(
    'Cikopo Selatan, Sukamanah, Megamendung Kab. Bogor, Jawa Barat, Indonesia 16670'
  );

  // Google Maps API URL
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <>
      {/* TAB 1 */}
      <div className="w-full bg-[#1CA449] py-[100px] lg:py-[120px]">
        <div className="container">
          <div className="flex flex-col items-center justify-center gap-[50px] lg:gap-[120px] text-center text-white">
            <div className="header text-center">
              <h1 className="text-[42px] lg:text-[64px] font-bold">
                Get in touch
              </h1>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="phone w-full hover:font-bold">
                <a
                  aria-label="WhatsApp."
                  href="https://wa.me/6282113277327?text=Halo%20ada%20yang%20bisa%20kami%20bantu?%0A%0Ahttps://kreasiagromandiri.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h2 className="text-[28px] lg:text-[36px] font-semibold">
                    Phone
                  </h2>
                  <p className="text-xl mt-2 lg:text-2xl">
                    +62 877-8162-3863 <br />
                    (WA Available)
                  </p>
                </a>
              </div>
              <div className="email w-full hover:font-bold">
                <a
                  aria-label="email."
                  href="mailto:contact@kreasiagromandiri.com?subject=Contact Us Via Website&body=Name:%0A%0AQuestion:"
                >
                  <h2 className="text-[28px] lg:text-[36px] font-semibold">
                    Email
                  </h2>
                  <p className="text-xl mt-2 lg:text-2xl">
                    contact@kreasiagromandiri.com
                  </p>
                </a>
              </div>
              <div className="address w-full hover:font-bold">
                <a href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  <h2 className="text-[28px] lg:text-[36px] font-semibold">
                    Address
                  </h2>
                  <p className="text-xl mt-2 lg:text-2xl">
                    Cikopo Selatan, Megamendung, Bogor, Jawa Barat. Indonesia
                    16670
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TAB 2 */}
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
                rel="noreferrer"
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

export default ContactUs;
