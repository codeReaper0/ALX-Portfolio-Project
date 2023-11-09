import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#02253E] font-marcellus p-16 pb-10 text-white">
      <div className="flex gap-20">
        <div className="">
          <Link href="/">
            <h1 className="flex flex-col">
              <span className="text-4xl">HOME</span>
              <span className="text-sm"> of Luxury</span>
            </h1>
          </Link>
        </div>

        <div className="space-y-4">
          <p className="text-xl">+234 801 123 4567</p>
          <p className="text-xl">admin@hotel.com</p>
          <address className="text-xl">
            123, Tella Way, <br />
            Off Lekki Road, <br />
            Lagos Island, Lagos
          </address>
        </div>

        <div className="">
          <h2 className="text-xl mb-4">Other Links</h2>

          <div className="flex flex-col gap-6">
            <Link href="/">About Us</Link>
            <Link href="/">Our Facilities</Link>
            <Link href="/policy">Privacy Policy</Link>
          </div>
        </div>
      </div>

      <p className="mt-10 text-xl text-center">
        &copy;Tella Home of Luxury 2023
      </p>
    </footer>
  );
}
