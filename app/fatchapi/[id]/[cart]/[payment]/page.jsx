"use client";
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [item, setProduct] = useState([]);
  useEffect(() => {
    async function fatchItem() {
      const res = await fetch("https://dummyjson.com/products/" + params.id);
      const data = await res.json();
      setProduct(data);
    }
    fatchItem();
  }, []);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md w-full max-w-5xl p-6 flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Complete Your Payment
          </h2>

          <div className="space-y-6">
            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Pay with Card
              </h3>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Card Number
                  </label>
                  <input
                    type="text"
                    style={{ color: "black" }}
                    id="card-number"
                    name="card-number"
                    placeholder="1234 5678 9123 4567"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry-date"
                      style={{ color: "black" }}
                      name="expiry-date"
                      placeholder="MM/YY"
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700">
                      CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      style={{ color: "black" }}
                      name="cvv"
                      placeholder="123"
                      className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Pay with Card
                </button>
              </form>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Pay with UPI
              </h3>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    id="upi-id"
                    style={{ color: "black" }}
                    name="upi-id"
                    placeholder="example@upi"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Pay with UPI
                </button>
              </form>
            </div>

            <div className="border rounded-md p-4">
              <h3 className="text-lg font-medium text-gray-800 mb-4">
                Pay with Net Banking
              </h3>
              <form action="#" method="POST" className="space-y-4">
                <div className="text-black">
                  <label className="block text-sm font-medium text-gray-700">
                    Select Bank
                  </label>
                  <select
                    id="bank"
                    name="bank"
                    className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    required
                  >
                    <option value="hdfc">HDFC Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="axis">Axis Bank</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
                >
                  Pay with Net Banking
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/3 bg-gray-50 border rounded-md shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Payment Summary
          </h3>
          <div className="text-gray-700 mb-4">
            <p className="flex justify-between">
              <span>Subtotal:</span>
              <span>${item.price}</span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Charges:</span>
              <span>$1</span>
            </p>
            <hr className="my-2" />
            <p className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${item.price + 1}</span>
            </p>
          </div>
          <div className="text-sm text-gray-600">
            <p>Note: This payment is non-refundable.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
