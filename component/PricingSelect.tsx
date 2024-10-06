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
      className={`cursor-pointer rounded-2xl border-[3px] bg-white p-4 ${
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
        <div className="flex items-center">
          <div
            className={`mr-2 size-4 min-w-4 ${
              selectedValue === value ? "bg-malibu-300" : "bg-gray-300"
            } rounded-full`}
          />
          <h2 className="md:text-lg text-xs font-semibold">{title}</h2>
        </div>
        <span className="ml-4 text-2xl font-semibold text-malibu-300">
          €{price}
        </span>
      </div>
      <ul className="mt-2 list-inside list-disc text-[0.5rem] md:text-lg p-0 md:pl-1">
        {descriptions.map((description: any, index: number) => (
          <li key={index}>{description}</li>
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
      window.location.href = "https://buy.stripe.com/7sIdUwepV7Qf8oM8ww";
    } else if (selectedValue === "option2") {
      window.location.href = "https://buy.stripe.com/00g3fSgy3gmL48weUX";
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
        "Gratis verzending",
        "Mogelijkheid voor het zelf (na overleg) wijzigen van je formule",
        "14-daagse tevredenheidsgarantie",
      ],
    },
    {
      title: "Eenmalige aankoop",
      value: "option2",
      price: "98",
      descriptions: [
        " Een potje (voor 30 dagen)",
        "Ideale manier om uit te testen of het iets voor je is",
        "Gratis verzending",
      ],
    },
  ];

  return (
    <div className="flex flex-col space-y-4 px-4">
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
        className="flex w-full items-center justify-center rounded-3xl bg-gradient-to-r from-malibu-300 to-froly-400 px-4 py-3 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gradient-to-r hover:from-froly-400 hover:to-malibu-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-malibu-300"
      >
        Nu Afrekenen <MoveRight className="ml-2 h-4" />
      </button>
    </div>
  );
};

export default PricingSelect;
