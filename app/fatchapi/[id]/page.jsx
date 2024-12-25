"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  
  const [item, setProduct] = useState([]);

  useEffect(() => {
    async function fatchItem() {
      const res = await fetch("https://dummyjson.com/products/" + params.id);
      const data = await res.json();
      setProduct(data);
      console.log(data);
    }
    fatchItem();
  }, []);

  return (
    <div key={item.id} className="bg-white  font-sans">
      <div className="container mx-auto p-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/3 p-4">
              <img
                src={item.thumbnail}
                alt="Essence Mascara Lash Princess"
                className="w-full rounded-lg"
              />
            </div>

            <div className="w-full md:w-2/3 p-6">
              <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h1>
              <p className="text-gray-600 mb-4">{item.description}</p>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-xl font-bold text-gray-900">
                  {item.price}
                </span>
                <span className="text-sm text-green-500">
                  {item.discountPercentage}% off
                </span>
              </div>

              <div className="flex items-center space-x-4 mb-4">
                <span className="text-sm text-gray-600">
                  Rating: <span className="text-yellow-500"></span>{" "}
                  {item.rating}
                </span>
                <span className="text-sm text-gray-600">
                  Stock: {item.stock} items
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Category:</span>
                <span className="text-gray-600">{item.category}</span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Brand:</span>
                <span className="text-gray-600">{item.brand}</span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">SKU:</span>
                <span className="text-gray-600">{item.sku}</span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Warranty:</span>
                <span className="text-gray-600">
                  {item.warrantyInformation}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Shipping:</span>
                <span className="text-gray-600">
                  {item.shippingInformation}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">Return Policy:</span>
                <span className="text-gray-600">{item.returnPolicy}</span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">
                  Minimum Order Quantity:
                </span>
                <span className="text-gray-600">
                  {item.minimumOrderQuantity}
                </span>
              </div>

              <div className="mb-4">
                <span className="font-bold text-gray-700">
                  Availability Status:
                </span>
                <span className="text-red-500">{item.availabilityStatus}</span>
              </div>

              <div className="flex items-center space-x-4">
                <Link
                  href={`/fatchapi/${item.id}/cart`}
                  className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600"
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
