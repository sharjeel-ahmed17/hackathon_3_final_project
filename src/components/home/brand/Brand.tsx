import Image from "next/image";

const Brand = () => {
  return (
    <div className="">
      {/* Flex Container */}
      <div className="flex flex-wrap gap-4 justify-between items-center h-auto md:h-[122px] bg-black px-3 py-3">
        {/* Images */}
        <Image
          width={100}
          height={100}
          src="/images/versace.png"
          alt="Image 1"
          className="object-contain"
        />
        <Image
          width={100}
          height={100}
          src="/images/zara.png"
          alt="Image 2"
          className="object-contain"
        />
        <Image
          width={100}
          height={100}
          src="/images/gucci.png"
          alt="Image 3"
          className="object-contain"
        />
        <Image
          width={100}
          height={100}
          src="/images/parada.png"
          alt="Image 4"
          className="object-contain"
        />
        <Image
          width={100}
          height={100}
          src="/images/calvin.png"
          alt="Image 5"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Brand;
