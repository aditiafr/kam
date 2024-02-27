import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [useLocation().pathname]);

  return (
    <div className="w-full bg-[#1CA449] py-[50px] text-white">
      <div className="container">
        <div className="flex flex-col items-center justify-center w-full gap-[20px]">
          <div className="flex flex-col lg:flex-row text-center lg:text-start items-center justify-center w-full gap-[20px]">
            <img src="/images/navbar/logo.png" alt="img-logo" />
            <div className="text-md lg:text-lg">
              <h3 className="font-bold">PT. Kreasi Agro Mandiri</h3>
              <p>
                Cikopo Selatan, Sukamanah,
                <br />
                Megamendung Kab. Bogor, Jawa Barat.
                <br />
                Indonesia 16670
              </p>
            </div>
          </div>
          <a
            aria-label="WhatsApp."
            href="https://wa.me/6282113277327?text=Halo%20ada%20yang%20bisa%20kami%20bantu?%0A%0Ahttps://kreasiagromandiri.com/"
            target="_blank"
          >
            <div className="contact flex gap-2 hover:font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                  clipRule="evenodd"
                />
              </svg>
              <p>+62 821-1327-7327 (WA Available)</p>
            </div>
          </a>
          <a
            aria-label="email."
            href="mailto:contact@kreasiagromandiri.com?subject=Contact Us Via Website&body=Name:%0A%0AQuestion:"
            // target="_blank"
          >
            <div className="email flex gap-2 hover:font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
              </svg>
              <p>contact@kreasiagromandiri.com</p>
            </div>
          </a>
          <div className="flex items-center gap-[25px] font-bold text-[12px] lg:text-lg">
            <Link
              to="/"
              className="hover:bg-white hover:text-[#1CA449] py-2 px-4 rounded-md"
            >
              <p>Product</p>
            </Link>
            <Link
              to="/gallery"
              className="hover:bg-white hover:text-[#1CA449] py-2 px-4 rounded-md"
            >
              <p>Gallery</p>
            </Link>
            <Link
              to="/about"
              className="hover:bg-white hover:text-[#1CA449] py-2 px-4 rounded-md"
            >
              <p>About</p>
            </Link>
            <Link to="/contact-us">
              <p className="border py-2 px-8 rounded-lg hover:bg-white hover:text-[#1CA449]">
                Contact Us
              </p>
            </Link>
          </div>
          <h2 className="font-bold lg:text-xl text-[12px] text-center">
            © 2024 PT. AGRO KREASI MANDIRI. All rights reserved.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
