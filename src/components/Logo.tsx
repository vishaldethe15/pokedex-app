import Image from "next/image";

const Logo = () => {
  return (
    <div className="hidden sm:flex items-center">
      <Image src="/pokelogo.png" alt="Pokemon Logo" width={150} height={150} />
    </div>
  );
};

export default Logo;
