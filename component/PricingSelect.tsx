/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { MoveRight } from "lucide-react";
import React, { useState } from "react";

const RadioButton = ({
  title,
  name,
  value,
  selectedValue,
  onChange,
  price,
  descriptions,
}: any) => {
  return (
    <div
      className={`cursor-pointer w-full rounded-2xl border-[3px] bg-white p-4 ${
        selectedValue === value ? "border-malibu-300" : "border-gray-300"
      }`}
      onClick={() => onChange(value)}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={() => onChange(value)}
        className="hidden"
      />
      <div className="flex items-center justify-between">
        <div className="flex w-full items-center">
          <div
            className={`mr-2 size-4 min-w-4 ${
              selectedValue === value ? "bg-malibu-300" : "bg-gray-300"
            } rounded-full`}
          />
          <h2 className="md:text-lg text-[1.1rem] md:w-auto w-56 md:tracking-normal tracking-tighter font-semibold">
            {title}
          </h2>
        </div>
        <span className="ml-0 md:ml-4 text-lg md:text-2xl font-semibold text-malibu-300">
          €{price}
        </span>
      </div>
      <ul className="mt-2 list-outside list-disc pl-5 text-sm md:text-lg">
        {descriptions.map((description: any, index: number) => (
          <li key={index} className="leading-tight">
            {description}
          </li>
        ))}
      </ul>
    </div>
  );
};

const PricingSelect = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handleRadioChange = (value: any) => {
    setSelectedValue(value);
  };

  const handleSubmit = () => {
    if (selectedValue === "option1") {
      window.open("https://buy.stripe.com/fZe03G95B8Uj7kIaEJ", "_blank");
    } else if (selectedValue === "option2") {
      window.open("https://buy.stripe.com/dR68Acgy3daz8oMcMQ", "_blank");
    } else {
      alert("Please select an option");
    }
  };


  const options = [
    {
      title: "Maandelijks Abonnement",
      value: "option1",
      price: "75",
      descriptions: [
        "Eens per drie maanden verstuurd",
        "Maandelijks gefactureerd",
        "Mogelijkheid voor het zelf (na overleg) wijzigen van je formule",
        "Gratis hoog gedoseerde Omega 3  (ter waarde van €25)",
        "Tevredenheidsgarantie: niet tevreden? Geld terug.",
      ],
    },
    {
      title: "Eenmalige aanloop",
      value: "option2",
      price: "98",
      descriptions: [
        "Een potje (voor 30 dagen)",
        "Ideale manier om uit te testen of het iets voor je is",
        "Tevredenheidsgarantie: niet tevreden? Geld terug.",
      ],
    },
  ];

  return (
    <div className="flex w-full flex-col space-y-4 px-0 md:px-4">
      {options.map((option) => (
        <RadioButton
          key={option.value}
          title={option.title}
          name="example"
          value={option.value}
          selectedValue={selectedValue}
          onChange={handleRadioChange}
          price={option.price}
          descriptions={option.descriptions}
        />
      ))}
      <button
        type="button"
        onClick={handleSubmit}
        className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-0 md:px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
      >
        Nu Afrekenen <MoveRight className="ml-2 h-4" />
      </button>
    </div>
  );
};

export default PricingSelect;
