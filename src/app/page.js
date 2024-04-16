import Filters from "@/components/Filters";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div className="flex justify-between px-[3vw] lg:px-[7vw]">
      <Filters />
      <Products />
    </div>
  );
}
