'use client';

import Product from "@/src/components/elements/Product";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";


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
  coverImgUrl: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3001/list?search=${encodeURIComponent(query)}`,
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch");
        }

        const data = await response.json();
        console.log('Raw results:', data)
        
        const products: Product[] = data.map((item: any) => ({
          id: item.id,
          name: item.name,
          description: item.description,
          priceCents: item.priceCents,
          currency: item.currency,
          isActive: item.isActive,
          market: item.market,
          discountPercent: item.discountPercent,
          cashbackPercent: item.cashbackPercent,
          likes: item.likes,
          vendorName: item.vendorName,
          createdAt: item.createdAt,
          updatedAt: item.updatedAt,
          coverImgUrl: item.images.map((img: any) => img.imageUrl)[0],
        }));
        
        setResults(products);
      } catch (error: any) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, [query]);

  if (!query) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-5xl mt-4 mx-auto">
          <p className="text-center font-black text-3xl">Please enter a search query.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm mb-4">Results found: {results.length}</p>
        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#63e3c2]"></div>
          </div>
        ) : results.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {results.map((product) => (
              <Product 
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                priceCents={product.priceCents}
                currency={product.currency}
                isActive={product.isActive}
                market={product.market}
                discountPercent={product.discountPercent}
                cashbackPercent={product.cashbackPercent}
                likes={product.likes}
                vendorName={product.vendorName}
                createdAt={product.createdAt}
                updatedAt={product.updatedAt}
                imageUrl={product.coverImgUrl}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}