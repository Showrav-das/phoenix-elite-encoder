import { useState } from "react";
import Heading from "@/components/common/Heading";
import { Product } from "@/types/types";

const categories: string[] = [
  "All",
  "Special",
  "Popular",
  "New/Used",
  "Certified",
];

export function FeaturedProducts({ products }: { products: Product[] }) {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <section className="bg-black ">
      <div className="max-w-6xl mx-auto border-t border-gray-800  px-4 py-12">
        <Heading className="mb-8 italic"> FEATURED PRODUCTS</Heading>

        {/* Categories */}
        <div className="mb-8 flex items-center gap-4 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`whitespace-nowrap rounded px-4 py-2 text-sm font-medium ${
                activeCategory === category
                  ? "bg-red-500 text-white"
                  : category === "See All Products >"
                  ? "text-blue-400"
                  : "text-white"
              }`}
            >
              {category}
            </button>
          ))}
          <button className=" whitespace-nowrap text-sm text-blue-400">
            See All Products {">"}
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="relative rounded-lg bg-gray-900">
              <div className="relative flex justify-between items-center">
                <button className="absolute left-4 top-3 rounded bg-gray-800 p-2">
                  <i className="fa-regular fa-heart h-5 w-5 text-white"></i>
                </button>

                {product.badge && (
                  <span
                    className={`z-10 rounded absolute right-4 top-3 px-2 py-1 text-xs font-bold text-white ${
                      product.badge === "SALE"
                        ? "bg-red-500"
                        : product.badge === "NEW"
                        ? "bg-green-500"
                        : "bg-gray-500"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* product image */}
              <div className="mb-4 aspect-square overflow-hidden rounded-t-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="px-4 mb-4">
                <div className="flex items-center gap-2 border-b border-gray-800 pb-4">
                  <p className="text-[#737F96]">Rating</p>
                  <div>
                    {[...Array(product.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="mt-2 mb-4 text-sm font-medium text-[#838896] border-b border-gray-800 pb-4">
                  {product.name}
                </h3>

                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-red-500">
                    £{product.price}
                  </span>
                  {product.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      £{product.oldPrice}
                    </span>
                  )}
                  <span className="text-sm text-[#CCCCCC]">Inc. VAT</span>
                </div>

                <button className="flex h-auto w-full items-center justify-center bg-gray-800 py-3 text-sm font-medium text-white rounded-3xl hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
