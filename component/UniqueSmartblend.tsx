"use client";

import "tippy.js/dist/tippy.css"; // optional for styling

import { useTranslations } from "next-intl";
import React from "react";

import BlendTableItems from "./BlendTableItems";

const UniqueSmartBlend = ({ answersData }:any) => {
  return (
    <div className="mt-4 rounded-lg bg-white lg:px-2 lg:py-3 lg:shadow">
      <div className="relative overflow-hidden rounded border-shuttle-gray-100 bg-lightbg lg:border lg:border-dashed lg:p-2">
        <dl className="grid grid-cols-1 gap-5">
          <div className="relative flex flex-col justify-between overflow-hidden rounded-lg bg-white p-4 shadow-lg sm:px-6">
            <div>
              <div className="flex items-center justify-center truncate text-2xl font-semibold text-shuttle-gray-600">
                <div className="text-center">Jouw Unieke Smartblend</div>
              </div>
              <div className="mx-auto mt-2 max-w-2xl text-center text-base font-medium tracking-tight text-shuttle-gray-600">
                <p>
                  Je persoonlijke aanbeveling is gebaseerd op je bloedwaarden,
                  verstrekte informatie via de vragenlijst en ons unieke
                  algoritme wat gebaseerd is op duizenden wetenschappelijk
                  onderzoeken.
                </p>
                <p className="mt-1">
                  Druk op een ingrediënt om meer te weten te komen over de stof
                  en waarom deze onderdeel uitmaakt van jouw persoonlijke
                  supplementformule.
                </p>
              </div>
            </div>
            <BlendTableItems answersData={answersData} />
          </div>
        </dl>
      </div>
    </div>
  );
};

export default UniqueSmartBlend;
