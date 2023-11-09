"use client";
import React, {useState, useEffect, useContext} from "react";
import Header from "@/components/roomHeader";
import {CartContext, CartContextValue} from "@/contexts/cart";
import Cart from "@/components/cart";
import {rooms} from "@/lib/links";
import Image from "next/image";
import {currencyFormatNumber} from "@/lib/currencyFormat";

export default function Room() {
  const [showModal, setshowModal] = useState(false);
  const {cartItems, addToCart} = useContext(CartContext) as CartContextValue;

  const toggle = () => {
    setshowModal(!showModal);
  };

  useEffect(() => {}, []);

  return (
    <>
      <Header />
      <section className="p-10">
        <div className="flex flex-col justify-center bg-gray-100 pb-10">
          <div className="flex justify-between items-center px-20 py-5">
            <h1 className="text-2xl uppercase font-bold mt-10 text-center mb-10">
              Our Rooms
            </h1>
            {!showModal && (
              <button
                className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                onClick={toggle}
              >
                Cart ({cartItems.length})
              </button>
            )}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-10">
            {rooms.map((room) => (
              <div
                key={room.id}
                className="bg-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <Image
                  src={room.thumbnail}
                  alt={room.title}
                  width={3000}
                  height={3000}
                  className="h-64 w-full object-cover"
                />
                <div className="mt-4 px-10">
                  <h1 className="text-xl uppercase font-bold">{room.title}</h1>
                  <p className="mt-2 text-gray-600 text-sm">
                    <span className="mr-5">{room.adult}</span>
                    <span>{room.children}</span>
                  </p>
                  <p className="mt-2 text-gray-600">
                    {currencyFormatNumber(room.price)}
                  </p>
                  <p className="mt-2 text-green-700 font-medium">
                    {room.rating}
                  </p>
                </div>
                <div className="mt-6 flex justify-between items-center px-10 pb-8">
                  <button
                    className="px-4 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                    onClick={() => {
                      addToCart(room);
                    }}
                  >
                    Book now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <Cart showModal={showModal} toggle={toggle} />
        </div>
      </section>
    </>
  );
}
