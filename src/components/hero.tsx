import React from "react";
import Header from "./header";
import HeroDetails from "./heroDetails";

export const Hero = () => {
  return (
    <section className="bg-[url('/assets/images/hero.jpeg')] bg-cover text-white font-marcellus">
      <div className="backdrop-brightness-[.40] py-20">
        <HeroDetails />
      </div>
    </section>
  );
};
