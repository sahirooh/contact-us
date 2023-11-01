import React from "react";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const ContactForm = () => {
  return (
    <div className="flex w-[1161px] mt-2 gap-[80px] ml-[196px] items-end">
      <div className=" flex flex-col gap-4 max-w-[472px] h-[457px]">
        <div className="flex gap-8">
          <button className="bg-black text-white flex items-center justify-center font-semibold border-solid rounded w-[220px] px-[18px] py-[10px]">
            <MdOutlineMessage className="mr-2 text-xl" />
            VIA SUPPORT CHAT
          </button>
          <button className="bg-black text-white flex items-center justify-center font-semibold border-solid rounded w-[220px] px-[18px] py-[10px]">
            <IoCallOutline className="mr-2 text-xl" />
            VIA CALL
          </button>
        </div>

        <button className="bg-transparent text-black flex items-center justify-center font-semibold border-solid border-black border rounded-[5px] w-full h-11">
          <MdOutlineMessage className="mr-2 text-xl" />
          VIA EMAIL FORM
        </button>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col w-full relative">
            <label
              htmlFor="name"
              className="absolute top-[-12px] left-5 font-semibold text-sm bg-white px-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              className="border-solid border border-black h-11 px-2"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label
              htmlFor="email"
              className="absolute top-[-12px] left-5 font-semibold text-sm bg-white px-2"
            >
              E-Mail
            </label>
            <input
              type="email"
              name="email"
              className="border-solid border border-black h-11 px-2"
            />
          </div>

          <div className="flex flex-col w-full relative">
            <label
              htmlFor="text"
              className="absolute top-[-12px] left-5 font-semibold text-sm bg-white px-2"
            >
              Text
            </label>
            <textarea
              name="text"
              rows={5}
              className="border-solid border border-black px-2"
            />
          </div>

          <div className="flex justify-end">
            <button className="bg-black text-white font-semibold border-solid rounded-[5px] w-[220px] px-[18px] py-[10px]">
              SUBMIT
            </button>
          </div>
        </form>
      </div>

      <div className="flex mt-[-40px]">
        <img src="/images/service.svg" alt="service logo" />
      </div>
    </div>
  );
};

export default ContactForm;
