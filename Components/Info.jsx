export default function Info(item) {
    return(
        <div className="bg-gray-100 font-sans">
        <div class="container mx-auto p-6">
        <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="flex flex-wrap md:flex-nowrap">
            <div class="w-full md:w-1/3 p-4">
                <img src={item.thumbnail}
                    alt="Essence Mascara Lash Princess" class="w-full rounded-lg"/>
            </div>

            <div class="w-full md:w-2/3 p-6">
                <h1 class="text-2xl font-semibold text-gray-800 mb-2">{item.title}</h1>
                <p class="text-gray-600 mb-4">{item.description}</p>

                <div class="flex items-center space-x-4 mb-4">
                    <span class="text-xl font-bold text-gray-900">{item.price}</span>
                    <span class="text-sm text-green-500">{item.discountPercentage}% off</span>
                </div>

                <div class="flex items-center space-x-4 mb-4">
                    <span class="text-sm text-gray-600">Rating: <span class="text-yellow-500"></span> {item.rating}</span>
                    <span class="text-sm text-gray-600">Stock: {item.stock} items</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Category:</span>
                    <span class="text-gray-600">{item.category}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Brand:</span>
                    <span class="text-gray-600">{item.brand}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">SKU:</span>
                    <span class="text-gray-600">{item.sku}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Warranty:</span>
                    <span class="text-gray-600">{item.warrantyInformation}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Shipping:</span>
                    <span class="text-gray-600">{item.shippingInformation}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Return Policy:</span>
                    <span class="text-gray-600">{item.returnPolicy}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Minimum Order Quantity:</span>
                    <span class="text-gray-600">{item.minimumOrderQuantity}</span>
                </div>

                <div class="mb-4">
                    <span class="font-bold text-gray-700">Availability Status:</span>
                    <span class="text-red-500">{item.availabilityStatus}</span>
                </div>

                <div class="flex items-center space-x-4">
                    {/* <Link href={`/fatchapi/${item.id}`}  */}
                    <a onClick={(e) => handleClick(item.id,e)}
                        class="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600">Buy Now</a>
                </div>
            </div>
        </div>

       
    </div>
</div>

    </div>
    )
}