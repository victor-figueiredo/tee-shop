import { useState } from "react";
import Heading from "./Heading";

export default function FilterPrice({ activePrice, setActivePrice }) {
  const maxPrice = 1000;

  const handlePriceChange = (e) => {
    setActivePrice(Number(e.target.value));
  };

  return (
    <>
      <Heading title="Preço" as="h6" className="font-semibold capitalize" />

      <input
        type="range"
        min={0}
        max={maxPrice}
        step={1}
        value={activePrice}
        onChange={handlePriceChange}
        className="mt-4 w-full accent-black/95"
      />

      <div className="mb-4 flex items-center justify-between text-[12px] font-semibold">
        <span>${activePrice}</span>
        <span>$1000</span>
      </div>
    </>
  );
}
