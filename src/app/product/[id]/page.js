"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context";
import { useParams } from "next/navigation";
import Heading from "@/components/Heading";
import Link from "next/link";

const ProductPage = () => {
  const { getShirtById } = useAppContext();
  const [shirt, setShirt] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const param = useParams();

  useEffect(() => {
    if (param.id) {
      getProduct(param.id);
    }
  }, [param.id]);

  const getProduct = async (id) => {
    const data = await getShirtById(id);
    setShirt(data);
    setIsLoading(false);
  };

  return (
    <>
      <div className="flex px-[3vw] lg:px-[7vw] pt-2">
        <Link href="/">
          <p className="font-semibold capitalize hover:underline">Home &gt; </p>
        </Link>
        <p className="font-semibold capitalize text-gray-300">
          {isLoading ? "..." : shirt.title}
        </p>
      </div>
      <div className="w-full h-full min-h-[78vh] px-[7vw] justify-center md:flex gap-16">
        {isLoading ? (
          <>
            <Heading
              title="Buscando"
              as="h6"
              className="font-semibold capitalize"
            />
          </>
        ) : (
          <>
            <div className="w-full md:w-[30%] pt-6 sm:py-16">
              <Image
                className="w-full h-auto"
                src={shirt.img}
                width={400}
                height={400}
                alt={shirt.title}
              />
            </div>

            <div className="space-y-2 py-6 sm:py-16">
              <h2 className="text-secondary font-medium uppercase">
                {shirt.title}
              </h2>
              <p className="text-gray-500">{shirt.desc}</p>
              <p className="text-gray-500 w-full">
                Tamanhos:{" "}
                {shirt.sizes?.map((s, index) => (
                  <b key={index} className="w-[20px] h-[20px]">
                    {s}
                    {shirt.sizes.length - 1 === index ? "" : ", "}
                  </b>
                ))}
              </p>
              <p className="text-gray-500 w-full">
                Cores:{" "}
                {shirt.colors?.map((s, index) => (
                  <b key={index} className="w-[20px] h-[20px]">
                    {s}
                    {shirt.colors.length - 1 === index ? "" : ", "}
                  </b>
                ))}
              </p>
              <div className="font-bold flex gap-4">
                ${shirt.price}
                <del className="text-gray-500 font-normal">
                  ${parseInt(shirt.price) + 50}.00
                </del>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductPage;
