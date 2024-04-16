"use client";

import * as Api from "@/api/api";

import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

export function AppWrapper({ children }) {
  const [searching, setSearching] = useState("");
  const [shirts, setShirts] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [activePrice, setActivePrice] = useState(0);
  const [activeSize, setActiveSize] = useState("");
  const [activeColor, setActiveColor] = useState("");

  const getData = async () => {
    const data = await Api.getShirts();
    setShirts(data);
    setSearching("");
  };

  const getByFilter = async (search) => {
    const response = await Api.getShirtsByFilter({
      name: search || searching,
      price: activePrice,
      color: activeColor,
      size: activeSize,
    });
    setShirts(response);
  };

  const getShirtById = async (id) => {
    const data = await Api.getById(id);
    return data;
  };

  const handleShirtSearch = async (search) => {
    setSearching(search);
    getByFilter(search);
  };

  return (
    <AppContext.Provider
      value={{
        shirts,
        searching,
        setSearching,
        handleShirtSearch,
        getData,
        getByFilter,
        getShirtById,
        showFilters,
        setShowFilters,
        activePrice,
        activeSize,
        activeColor,
        setActivePrice,
        setActiveSize,
        setActiveColor,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
