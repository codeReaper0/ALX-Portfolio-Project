"use client";
import Link from "next/link";
import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function HeroDetails() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  return (
    <>
      <h4 className="text-3xl font-medium text-center mt-10 mb-3">
        Experience
      </h4>
      <h2 className="text-6xl font-medium text-center mb-10 max-w-3xl mx-auto">
        <span className="block mb-3">Luxury at its best,</span>
        <span className="block">Welcome to your home away from home!</span>
      </h2>

      <div className="bg-white text-black mx-20 p-10 font-sans">
        <form className="grid grid-cols-4 gap-8 justify-between items-end">
          <div className="flex flex-col gap-1">
            <label htmlFor="">Check In*</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date ? date : new Date())}
              minDate={new Date()}
              showDisabledMonthNavigation
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              placeholderText="Select Arrvial Date"
              className="border-b border-b-black px-1 py-2 focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Check Out*</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date ? date : new Date())}
              minDate={new Date()}
              showDisabledMonthNavigation
              dateFormat="MM/dd/yyyy h:mm aa"
              showTimeInput
              placeholderText="Select Departure Date"
              className="border-b border-b-black px-1 py-2 focus:outline-none w-full"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="">Room</label>
            <select
              name=""
              id=""
              className="border border-black px-1 py-2 focus:outline-none w-full"
            >
              <option selected disabled>
                Select Room Type
              </option>
              <option value="">Superior Room</option>
              <option value="">Signature Room</option>
              <option value="">Executive Room</option>
              <option value="">Presidential Suite</option>
            </select>
          </div>

          <Link href="/" className="h-max">
            <button className="py-3 focus:outline-none text-white bg-[#02253E] hover:bg-[#d07d00] w-full transition-all duration-300 ease-in-out">
              Search
            </button>
          </Link>
        </form>
      </div>
    </>
  );
}
