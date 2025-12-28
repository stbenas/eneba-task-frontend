import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  priceCents: number;
  currency: string;
  isActive: boolean;
  market: string;
  discountPercent: number;
  cashbackPercent: number;
  likes: number;
  vendorName: string;
  createdAt: string;
  updatedAt: string;
  imageUrl: string;
}

export default function Product({ 
  id,
  name,
  description,
  priceCents,
  currency,
  isActive,
  market,
  discountPercent,
  cashbackPercent,
  likes,
  vendorName,
  createdAt,
  updatedAt,
  imageUrl
}: Product) {
  const originalPrice = priceCents / 100;
  const discountedPrice = discountPercent > 0 
    ? originalPrice * (1 - discountPercent / 100)
    : originalPrice;

  return (
    <div className="flex flex-col max-w-60 min-h-96 border border-[#63e3c2] bg-[#1f0a4d]">
      <div className="relative w-full h-72 overflow-hidden">
        <Image 
          src={imageUrl}
          alt="Product cover image"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
        />
        {/* cashback */}

        {/* vendor */}
        <div className="absolute bottom-0 left-0 w-full backdrop-blur-sm bg-[#00000094] h-6 flex items-center justify-center">
          <p className="text-xs font-bold">{vendorName}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 p-4">
        <h2 className="text-xs font-bold">{name}</h2>
        <p className="font-medium text-[#63e3c2] text-xs">{market.toUpperCase()}</p>

        {/* price */}
        <div className="mt-1">
          <span className="text-xs font-bold text-[#b3aac9]">From&nbsp;
            {discountPercent > 0 && (
              <span>
                <span className="text-xs line-through text-[#b3aac9]">
                  {currency} {originalPrice.toFixed(2)}
                </span>
                &nbsp;
                <span className="text-xs font-bold text-[#84e916]">
                -{discountPercent}%
                </span>
              </span>
            )}
          </span>
          <div className="text-lg font-black">
            {currency} {discountedPrice.toFixed(2)}
          </div>
          {cashbackPercent > 0 && (
            <div className="text-xs font-bold text-[#84e916]">
              Cashback: {currency} {(discountedPrice * cashbackPercent / 100).toFixed(2)}
            </div>
          )}

          {/* likes */}
          <div className="flex flex-row gap-1 items-center mt-2">
            <svg viewBox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg" strokeWidth="1.5"><path d="M12,21.844l-9.588-10A5.672,5.672,0,0,1,1.349,5.293h0a5.673,5.673,0,0,1,9.085-1.474L12,5.384l1.566-1.565a5.673,5.673,0,0,1,9.085,1.474h0a5.673,5.673,0,0,1-1.062,6.548Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            <span className="text-xs font-bold text-[#b3aac9]">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}