import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="hidden sm:flex items-center">
      <Link href={"/"}>
        <Image
          src="/pokelogo.png"
          alt="Pokemon Logo"
          width={150}
          height={150}
        />
      </Link>
    </div>
  );
};

export default Logo;
