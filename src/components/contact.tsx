import Link from "next/link";
import React from "react";

export default function Contact() {
  return (
    <section className="bg-[#efefef] font-marcellus py-20" id="contact">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl text-center mb-10">CONTACT US</h2>
        <div className="bg-white text-black mx-20 p-10 font-sans">
          <form className="space-y-8">
            <div className="flex flex-col gap-1">
              <label htmlFor="">Your Name*</label>
              <input
                type="text"
                name=""
                id=""
                className="border-b border-b-black px-1 py-2 focus:outline-none w-full"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Your Email*</label>
              <input
                type="text"
                name=""
                id=""
                className="border-b border-b-black px-1 py-2 focus:outline-none w-full"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="">Message*</label>
              <textarea
                name=""
                id=""
                rows={10}
                className="border border-black focus:outline-none w-full p-1"
              />
            </div>

            <div>
              <button
                className="py-3 px-16 focus:outline-none text-white bg-[#02253E] hover:bg-[#d07d00] transition-all duration-300 ease-in-out my-5"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
