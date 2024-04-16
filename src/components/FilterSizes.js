import Heading from "./Heading";
import { Sizes } from "./Sizes";

export const FilterSizes = ({ allSizes, activeSize, setActiveSize }) => {
  return (
    <div>
      <Heading title="Tamanhos" as="h6" className="my-4 font-semibold" />
      <Sizes
        sizes={allSizes}
        activeSize={activeSize}
        setActiveSize={setActiveSize}
      />
    </div>
  );
};
