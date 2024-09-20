/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/no-array-index-key */

"use client";

import Cookies from "js-cookie";
import { Check, MoveRight, X } from "lucide-react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";

const Scrollbars = dynamic(() => import("react-custom-scrollbars"), {
  ssr: false,
});

const formatQuantity = (quantity: any) => {
  return parseFloat(quantity)
    .toFixed(3)
    .replace(/\.?0+$/, "");
}; // Fixed semicolon here

const BlendTableItems = () => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [isFullScreenOpen, setIsFullScreenOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/api/quizzes/public`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${Cookies.get("authToken")}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch blend data");
        }

        const result = await response.json();
        setData(result.data.elements);
      } catch (error) {
        console.error("Error fetching blend data:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const openFullScreen = () => {
    setIsFullScreenOpen(true);
  };

  const closeFullScreen = () => {
    setIsFullScreenOpen(false);
  };

  return (
    <>
      {data?.length > 0 && (
        <div className="mt-4 flex w-full flex-col items-center gap-3 rounded-lg">
          <div className="w-full max-w-2xl rounded-3xl bg-gradient-to-b from-white to-malibu-300 p-2">
            <div className="mx-auto mt-4 w-full rounded-2xl bg-white p-1">
              <Scrollbars
                className="size-full"
                style={{ height: 540, width: "100%" }}
              >
                <table className="size-full">
                  <thead className="sticky top-0 bg-white">
                    <tr>
                      <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                        Actief ingrediënt
                      </th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                        Per dosering
                      </th>
                      <th className="border-b border-gray-300 px-4 py-2 text-left text-xs lg:text-sm">
                        RI%
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item: any, idx) => (
                      <tr
                        key={idx}
                        onClick={() => openModal(item)}
                        className="cursor-pointer hover:bg-malibu-50"
                      >
                        <td className="border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                          {item.element}
                        </td>
                        <td className="w-36 border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                          {formatQuantity(item.quantity)} mg
                        </td>
                        <td className="w-28 border-b border-gray-300 px-4 py-2 text-xs lg:text-sm">
                          {item.nrv}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Scrollbars>
            </div>
          </div>
          <div className="mx-auto mt-4 w-full max-w-md lg:mt-6">
            <button
              type="submit"
              onClick={openFullScreen}
              className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
            >
              Bestellen <MoveRight className="ml-2 h-4" />
            </button>
          </div>
        </div>
      )}

      {isModalOpen && selectedItem && (
        <Modal
          ariaHideApp={false}
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          contentLabel="Element Details Modal"
          className="modal max-h-screen w-full max-w-3xl overflow-auto"
          overlayClassName="modal-overlay"
        >
          <button
            type="button"
            onClick={closeModal}
            className="absolute right-4 top-4 flex size-6 cursor-pointer items-center justify-center rounded-full border-none bg-[#78c1f3] text-white hover:bg-[#f37783]"
          >
            <X className="size-4" />
          </button>
          <div className="py-4 pl-4">
            <h2 className="pb-4 text-xl font-bold text-shuttle-gray-600">
              {selectedItem.element}
            </h2>
            <Scrollbars
              className="size-full"
              style={{ height: 540, width: "100%" }}
            >
              <div className="pr-4">
                {/* Uncomment this part when using AdditionalInfo */}
                {/* <AdditionalInfo id={selectedItem.id} /> */}

                <h3 className="mt-4 text-base font-bold text-shuttle-gray-600">
                  Ingrediënten
                </h3>

                <div className="overflow-x-auto">
                  <table className="mt-2 min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          Actief ingrediënt
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          Per dosering
                        </th>
                        <th className="bg-gray-50 px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-shuttle-gray-600">
                          RI%
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      <tr>
                        <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-shuttle-gray-600">
                          {selectedItem.element}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-shuttle-gray-600">
                          {formatQuantity(selectedItem.quantity)} mg
                        </td>
                        <td className="whitespace-nowrap px-6 py-4 text-sm text-shuttle-gray-600">
                          {selectedItem.nrv}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {selectedItem.recommendations && (
                  <div>
                    <h3 className="mt-4 text-base font-bold text-shuttle-gray-600">
                      Waarom zit dit in jouw Smartblend?
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-shuttle-gray-600">
                      {selectedItem.recommendations
                        .split("\n")
                        .map((reason: string, index: number) => (
                          <li key={index}>{reason}</li>
                        ))}
                    </ul>
                  </div>
                )}
              </div>
            </Scrollbars>
          </div>
        </Modal>
      )}

      {isFullScreenOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur">
          <div className="relative flex size-full max-h-screen max-w-5xl rounded-lg bg-gradient-to-b from-malibu-100 to-malibu-200 p-6 shadow-lg lg:max-h-[720px]">
            <button
              type="button"
              onClick={closeFullScreen}
              className="absolute right-4 top-4 z-20 flex size-6 cursor-pointer items-center justify-center rounded-full border-none bg-[#78c1f3] text-white hover:bg-[#f37783]"
            >
              <X className="size-4" />
            </button>
            <div className="flex size-full justify-center">
              <div className="flex w-full flex-col items-center justify-center overflow-y-auto lg:flex-row">
                <div className="hidden w-full flex-col items-center justify-center lg:flex">
                  <ul className="mt-4 list-none">
                    <li className="mb-2 flex items-center">
                      <Check className="mr-2 size-4" />
                      <span>Volledig op maat gemaakt</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <Check className="mr-2 size-4" />
                      <span>Wetenschappelijk onderbouwd</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <Check className="mr-2 size-4" />
                      <span>Zorgvuldig gedoseerd</span>
                    </li>
                    <li className="mb-2 flex items-center">
                      <Check className="mr-2 size-4" />
                      <span>Alleen de beste ingrediënten</span>
                    </li>
                  </ul>
                </div>
                {/* Uncomment this part when using PricingSelect */}
                {/* <div className="flex w-full items-center justify-center"> */}
                {/*   <PricingSelect /> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BlendTableItems;
