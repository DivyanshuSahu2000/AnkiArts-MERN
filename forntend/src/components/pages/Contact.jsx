import { RiInstagramFill } from "react-icons/ri";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import React, { useContext } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { ItemContext } from "../../context/ItemContext";
import Loader from "../Loader";

const Contact = () => {
  const { loading } = useContext(ItemContext);
  if (loading) {
    return <Loader />;
  }
  return (
    <div
      className="bg-gray-200 h-[85vh] z-10 text-white inset-0 bg-cover sm:bg-contain bg-center bg-no-repeat opacity-75"
      style={{ backgroundImage: 'url("/Aboutbg.webp")' }}
    >
      <div className="p-5 mx-auto justify-center items-center flex-col flex">
        <h1 className="text-2xl md:text-4xl font-medium  relative after:content-[''] after:block after:w-full after:h-[2px] after:bg-gray-300 after:mt-1">
          Contact Us
        </h1>
        <div className=" p-5 flex flex-col font-medium gap-5">
          <div className="flex flex-col  items-center">
            <div className="flex  gap-0.5 text-[#464c56]">
              <FaMapMarkerAlt size={20} />
              <span>Address</span>
            </div>

            <span>558/34 kailash Building, raebareli Uttar Pradesh</span>
          </div>
          <div className="flex flex-col  items-center">
            <div className="flex  gap-0.5 text-[#464c56]">
              <IoMdMail size={20} />
              <span>G-mail</span>
            </div>
            <a
              href="mailto:ankitasahu581@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>ankitasahu581@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-col  items-center">
            <div className="flex gap-0.5 text-[#464c56]">
              <IoLogoWhatsapp size={20} />
              <span>Whatsapp Number</span>
            </div>

            <span>7912345678</span>
          </div>
          <div className="flex flex-col  items-center">
            <div className="flex gap-0.5 text-[#464c56]">
              <IoMdCall size={20} />
              <span>Call Number</span>
            </div>
            <span>7912345678</span>
          </div>
          <a
            href="https://www.instagram.com/ankiarts1?igsh=MXdsMGdhYWM0dXhhbg=="
            target="_blank"
            onClick={(e) => {
              const confirmGo = window.confirm(
                "You are about to leave this site and open Ankiarts1 Instagram. Continue?"
              );
              if (!confirmGo) {
                e.preventDefault();
              }
            }}
          >
            <div className="flex flex-col  items-center">
              <div className="flex  gap-0.5 text-[#464c56]">
                <RiInstagramFill size={20} />
                <span>Instagram</span>
              </div>
              <span>ankiarts1</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
