import React from "react";

function Heading({ title, as = "h1", uppercase, className }) {
  const Element = as || "h1";

  return (
    <Element
      className={`font-black text-black/95 ${uppercase ? "uppercase" : ""} ${
        as === "h1" ? "text-3xl sm:text-4xl md:text-6xl" : ""
      } ${as === "h2" ? "text-5xl" : ""} ${as === "h3" ? "text-4xl" : ""} ${
        as === "h4" ? "text-3xl" : ""
      } ${as === "h5" ? "text-2xl" : ""} ${as === "h6" ? "text-xl" : ""} ${
        className || ""
      }`}
    >
      {title}
    </Element>
  );
}

export default Heading;
