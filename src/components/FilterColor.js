import { Colors } from "./Colors";
import Heading from "./Heading";

export const FilterColors = ({ activeColor, setActiveColor, allColors }) => {
  return (
    <div>
      <Heading title="Cores" as="h6" className="my-4 font-semibold" />
      <Colors
        colors={allColors}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
      />
    </div>
  );
};
