"use strict";
import { Button } from "./Button";

export const Sizes = ({ sizes, title, activeSize, setActiveSize }) => {
  return (
    <div>
      {title && <span className="capitalize text-zinc-400">{title}</span>}
      <div className="mt-2 flex flex-wrap items-center gap-2">
        {sizes?.map((size) => (
          <Button
            type="button"
            key={size.id}
            variant="outline"
            className={`${
              activeSize === size.attributes.slug
                ? "bg-black/95 text-white"
                : "bg-[#f0f0f0]"
            } border-none px-4 py-2 outline-none hover:bg-black/95 hover:text-white`}
            onClick={() => setActiveSize(size.attributes.slug)}
          >
            {size.attributes.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
