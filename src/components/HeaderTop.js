"use client";

// import Logo from "./Logo";
import { Search } from "lucide-react";
import Logo from "./Logo";
import { useAppContext } from "@/context";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "next/navigation";

const HeaderTop = () => {
  const [search, setSearch] = useState("");
  const [canSearch, setCanSearch] = useState(true);
  const {
    searching,
    setSearching,
    handleShirtSearch,
    getData,
    getByFilter,
    activePrice,
    activeSize,
    activeColor,
  } = useAppContext();

  const param = useParams();

  useEffect(() => {
    if (param.id) {
      setCanSearch(false);
    } else {
      setCanSearch(true);
    }
  }, [param.id]);

  const handleSearch = (e) => {
    e.preventDefault();
    handleShirtSearch(search);
  };

  const handleClearSearch = () => {
    if (activePrice || activeSize || activeColor) {
      setSearching("");
      getByFilter("");
      return;
    }
    getData();
  };

  useEffect(() => {
    if (searching !== "" && search === "") {
      handleClearSearch();
    }
  }, [search, searching]);

  return (
    <nav className="bg-[#fff] border-b border-gray-200 sm:flex justify-between w-full px-[3vw] lg:px-[7vw] h-[76px] m-0">
      <div className="flex justify-between items-center w-[100%] pt-4 sm:pt-0">
        <Logo />
        {canSearch && (
          <form
            onSubmit={handleSearch}
            className="w-[60%] sm:w-[300px] lg:w-[30%] relative"
          >
            <input
              className="border-gray-200 bg-transparent border-b p-2 pl-3 px-4 w-full"
              type="text"
              placeholder="Busque pelo nome..."
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
            <Search
              className="absolute right-0 top-0 mr-3 mt-3 text-secondary"
              size={20}
              type="submit"
            />
          </form>
        )}
        <div className="hidden sm:block"></div>
      </div>
    </nav>
  );
};

export default HeaderTop;
