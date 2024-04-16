"use client";

import { useAppContext } from "@/context";
import Product from "./Product";
import Skeleton from "@mui/material/Skeleton";
import { SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import Heading from "./Heading";

const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { getData, shirts, showFilters, setShowFilters } = useAppContext();

  useEffect(() => {
    if (isLoading) {
      getData();
      setIsLoading(false);
    }
  }, []);

  return (
    <div className="w-full pl-[10px] py-[10px] sm:py-[20px] lg:py-[30px] sm:pl-[30px]">
      <div className="w-full flex justify-between sm:flex-row sm:justify-end pb-5">
        <div>
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className="sm:hidden"
          >
            <SlidersHorizontal />
          </button>
        </div>
        <span className="text-xl text-secondary font-semibold">
          Total de camisetas: {shirts.length}
        </span>
      </div>
      {isLoading ? (
        <div className="w-full products place-items-center sm:place-items-start gap-10 xl:gap-x-20 xl:gap-y-10">
          <Skeleton
            className="rounded-xl"
            variant="rectangular"
            width={250}
            height={400}
          />
          <Skeleton
            className="rounded-xl"
            variant="rectangular"
            width={250}
            height={400}
          />
          <Skeleton
            className="rounded-xl"
            variant="rectangular"
            width={250}
            height={400}
          />
          <Skeleton
            className="rounded-xl"
            variant="rectangular"
            width={250}
            height={400}
          />
        </div>
      ) : (
        <>
          {shirts.length === 0 ? (
            <div className="w-full h-full items-center">
              <Heading
                title="Nenhuma camiseta foi encontrada."
                as="h6"
                className="font-semibold capitalize"
              />
            </div>
          ) : (
            <>
              <div className="w-full products place-items-center sm:place-items-start gap-10 xl:gap-x-20 xl:gap-y-10">
                {shirts.map((item) => (
                  <Product
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    desc={item.desc}
                    price={item.price}
                    sizes={item.sizes}
                    colors={item.colors}
                    id={item.id}
                  />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Products;
