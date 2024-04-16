import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={`/`}>
      <div className="flex h-[100%] items-center">
        <h1 className="text-[28px] bold">TeeShop</h1>
      </div>
    </Link>
  );
};

export default Logo;
