"use client";

import React, { useState } from "react";
import FilterPrice from "./FilterPrice";
import Heading from "./Heading";
import { SlidersHorizontal, X } from "lucide-react";
import { Separator } from "./Separator";
import { FilterColors } from "./FilterColor";
import { FilterSizes } from "./FilterSizes";
import { Button } from "./Button";
import { useAppContext } from "@/context";

const Filters = () => {
  const {
    getData,
    getByFilter,
    setSearching,
    showFilters,
    setShowFilters,
    activePrice,
    setActivePrice,
    activeSize,
    setActiveSize,
    activeColor,
    setActiveColor,
  } = useAppContext();

  const allSizes = [
    { id: 1, attributes: { name: "P", slug: "P" } },
    { id: 2, attributes: { name: "M", slug: "M" } },
    { id: 3, attributes: { name: "G", slug: "G" } },
    { id: 4, attributes: { name: "GG", slug: "GG" } },
    { id: 5, attributes: { name: "XG", slug: "XG" } },
    { id: 6, attributes: { name: "XGG", slug: "XGG" } },
  ];

  const allColors = [
    { id: 1, attributes: { color: "", slug: "" } },
    {
      id: 2,
      attributes: { color: "red", slug: "red" },
    },
    { id: 3, attributes: { color: "green", slug: "Verde" } },
    { id: 4, attributes: { color: "blue", slug: "Azul" } },
    { id: 5, attributes: { color: "black", slug: "Preto" } },
    { id: 6, attributes: { color: "gray", slug: "Cinza" } },
    { id: 7, attributes: { color: "yellow", slug: "Amarelo" } },
    { id: 8, attributes: { color: "purple", slug: "Roxo" } },
    { id: 9, attributes: { color: "pink", slug: "Rosa" } },
    { id: 10, attributes: { color: "brown", slug: "Marrom" } },
  ];

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    getByFilter("");
    setShowFilters(false);
  };

  const handleOnReset = () => {
    setActivePrice(0);
    setActiveSize("");
    setActiveColor("");
    setSearching("");
    getData();
    setShowFilters(false);
  };

  return (
    <div
      className={`${
        showFilters
          ? "w-[238px] h-[85vh] fixed gap-8 left-[20px] top-[80px]"
          : "w-[238px] hidden sm:block h-[85vh] relative gap-8 pt-[30px]"
      }`}
    >
      <form
        onSubmit={handleOnSubmit}
        className="absolute left-0 z-10 h-fit rounded-xl border border-gray-200 bg-white px-4 py-2 sm:static w-[238px]"
      >
        <div className="flex w-full items-center justify-between">
          <Heading
            title="Filtros"
            as="h6"
            className="font-semibold capitalize"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden"
          >
            {showFilters ? <X /> : <SlidersHorizontal />}
          </button>
          <SlidersHorizontal className="hidden md:block" />
        </div>
        <Separator />
        <FilterPrice
          activePrice={activePrice}
          setActivePrice={setActivePrice}
        />
        <Separator />
        <FilterColors
          allColors={allColors}
          activeColor={activeColor}
          setActiveColor={setActiveColor}
        />
        <Separator />
        <FilterSizes
          allSizes={allSizes}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
        />
        <div className="my-4 flex justify-between gap-2">
          <Button type="submit" className="px-6">
            Aplicar
          </Button>

          <Button
            onClick={() => handleOnReset()}
            variant="outline"
            type="reset"
            className="px-6"
          >
            Limpar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Filters;
