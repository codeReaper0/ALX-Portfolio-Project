"use client";
import React, {Fragment, useState, useContext} from "react";
import {Dialog, Transition} from "@headlessui/react";
import {CartContext, CartContextValue} from "@/contexts/cart";
import {XCircleIcon} from "@heroicons/react/24/outline";

export default function Checkout() {
  const {clearCart} = useContext(CartContext) as CartContextValue;

  const [isOpen, setIsOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  function closeSuccessModal() {
    setIsSuccessOpen(false);
    clearCart();
  }

  function submitModal() {
    setIsOpen(false);
    setIsSuccessOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="px-4 py-2 bg-white text-gray-800 text-xs font-bold uppercase rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-700"
      >
        Checkout
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-auto max-h-[83vh] rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="button"
                    onClick={closeModal}
                    className="flex justify-end w-full"
                  >
                    <XCircleIcon className="w-6 h-6" />
                  </Dialog.Title>

                  <div className="w-full mx-auto">
                    <div className="bg-white rounded-lg p-4">
                      <h2 className="text-lg font-medium mb-6">Information</h2>
                      <form action="">
                        <fieldset>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Name
                              </label>
                              <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone Number
                              </label>
                              <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email
                              </label>
                              <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500 mb-6"
                              />
                            </div>
                          </div>
                        </fieldset>
                        <fieldset>
                          <h2 className="text-lg font-medium mb-6">
                            Payment Information
                          </h2>
                          <div className="grid grid-cols-2 gap-6">
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Card Number
                              </label>
                              <input
                                type="text"
                                name="card-number"
                                id="card-number"
                                placeholder="0000 0000 0000 0000"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Expiration Date
                              </label>
                              <input
                                type="text"
                                name="expiration-date"
                                id="expiration-date"
                                placeholder="MM / YY"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                CVV
                              </label>
                              <input
                                type="text"
                                name="cvv"
                                id="cvv"
                                placeholder="000"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                            <div className="col-span-2 sm:col-span-1">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Card Holder
                              </label>
                              <input
                                type="text"
                                name="card-holder"
                                id="card-holder"
                                placeholder="Full Name"
                                className="w-full py-3 px-4 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500"
                              />
                            </div>
                          </div>
                          <div className="mt-8">
                            <div
                              onClick={submitModal}
                              className="w-full bg-[#000e19] text-white text-center font-medium py-3 rounded-lg focus:outline-none cursor-pointer"
                            >
                              Submit
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

      <Transition appear show={isSuccessOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => {}}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-auto max-h-[83vh] rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="button"
                    onClick={closeSuccessModal}
                    className="flex justify-end w-full"
                  >
                    <XCircleIcon className="w-6 h-6" />
                  </Dialog.Title>

                  <div className="w-full mx-auto">
                    <div className="bg-white p-6  md:mx-auto">
                      <svg
                        viewBox="0 0 24 24"
                        className="text-green-600 w-16 h-16 mx-auto my-6"
                      >
                        <path
                          fill="currentColor"
                          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
                        ></path>
                      </svg>
                      <div className="text-center">
                        <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                          Payment Done!
                        </h3>
                        <p className="text-gray-600 my-2">
                          Thank you for completing your secure online payment.
                        </p>
                        <p> Have a great day! </p>
                        <button
                          onClick={closeSuccessModal}
                          className="text-center px-12 bg-[#000e19] text-white font-semibold py-3 rounded-lg mt-6"
                        >
                          GO BACK
                        </button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
