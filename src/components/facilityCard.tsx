import React from "react";
import Gym from "public/assets/images/gym.jpg";
import Spa from "public/assets/images/spa.jpg";
import Pool from "public/assets/images/pool.jpg";
import Image from "next/image";

const facilities = [
  {
    name: "Wellness & Spa",
    image: Spa,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at aspernatur accusantium quidem illo neque dignissimos molestias reprehenderit aliquam. Dolorum quidem optio odit veniam nostrum est tempore fugiat voluptatibus!",
  },
  {
    name: "Fitness Center",
    image: Gym,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at aspernatur accusantium quidem illo neque dignissimos molestias reprehenderit aliquam. Dolorum quidem optio odit veniam nostrum est tempore fugiat voluptatibus!",
  },
  {
    name: "Swimming Pool",
    image: Pool,
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum a at aspernatur accusantium quidem illo neque dignissimos molestias reprehenderit aliquam. Dolorum quidem optio odit veniam nostrum est tempore fugiat voluptatibus!",
  },
];

export default function FacilityCard() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-6">
      {facilities.map((facility) => {
        return (
          <div key={facility.name} className="h-[450px] group relative">
            <Image
              src={facility.image}
              alt="facility"
              width={4000}
              height={4000}
              className="absolute w-full h-full object-cover inset-0"
            />
            <div className="backdrop-brightness-[.60] group-hover:backdrop-brightness-[.40] w-full h-full flex flex-col items-center justify-end p-10 transition-all duration-300 ease-in-out">
              <h4 className="text-2xl mb-4 transition-all duration-300 ease-linear">
                {facility.name}
              </h4>
              <p className="text-center hidden group-hover:block font-sans transition-all duration-300 ease-linear">
                {facility.details}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
