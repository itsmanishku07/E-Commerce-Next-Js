"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Cart({params}) {
    const [quantity,setQuantity] = useState(1);
    const [item, setProduct] = useState([]);
    useEffect(() => {
        async function fatchItem() {
            const res = await fetch("https://dummyjson.com/products/" + params.id);
            const data = await res.json();
            setProduct(data);
        }
        fatchItem();
    }, []);
    return(
        <div className="bg-gray-100 min-h-screen flex flex-col text-black">
            <header className="bg-white shadow p-4">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Shopping Cart</h1>
            <a href="/fatchapi" className="text-blue-600 hover:underline">Continue Shopping</a>
        </div>
    </header>

    <main className="container mx-auto flex-grow py-6">
        <div className="bg-white shadow-md rounded-lg p-6">
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-gray-200 text-gray-800">
                        <th className="p-4 border border-gray-200">Product</th>
                        <th className="p-4 border border-gray-200">Quantity</th>
                        <th className="p-4 border border-gray-200">Price</th>
                        <th className="p-4 border border-gray-200">Total</th>
                        <th className="p-4 border border-gray-200">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-center">
                        <td className="p-4 border border-gray-200 flex items-center space-x-4">
                            <img src={item.images} alt="Product" className="w-16 h-16 object-cover"/>
                            <span className="text-gray-800">{item.title}</span>
                        </td>
                        <td className="p-4 border border-gray-200">
                            <input type="number"  onChange={console.log("Clicked")} min="1" value="1" className="w-16 p-2 border border-gray-300 rounded"/>
                        </td>
                        <td className="p-4 border border-gray-200">${item.price}</td>
                        <td className="p-4 border border-gray-200">${item.price}</td>
                        <td className="p-4 border border-gray-200">
                            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="flex justify-between items-center mt-6">
                <a href="/fatchapi" className="text-blue-600 hover:underline">Add More Products</a>
                <div className="text-right">
                    <p className="text-lg font-bold">Subtotal: <span>${item.price}</span></p>
                    <p className="text-sm text-gray-600">Taxes and shipping calculated at checkout</p>
                    <Link href={`/fatchapi/${item.id}/cart/payment`} >
                    <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Proceed to Checkout</button>
                    </Link>
                </div>
            </div>
        </div>
    </main>
        </div>
    )
}