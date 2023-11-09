import React from "react";
import FacilityCard from "./facilityCard";

export default function Facilities() {
  return (
    <section
      className="bg-[#02253E] font-marcellus py-20 text-white"
      id="facilities"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="">
            <p className="text-xl mb-2">Make your stay memorable</p>
            <h2 className="text-6xl mb-10">Our Facilities</h2>
          </div>

          <button className="h-12 px-6 rounded-2xl border hover:-mt-4 transition-all duration-300 ease-in-out">
            Learn more
          </button>
        </div>

        <FacilityCard />
      </div>
    </section>
  );
}
