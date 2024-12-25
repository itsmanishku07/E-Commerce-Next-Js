export default function Header()
{
    return(
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <a href="/" className="text-white text-2xl font-bold">E-Commerce</a>
                    </div>
                    <div>
                        <a href="/cart" className="text-white">Cart</a>
                    </div>
                </div>
            </nav>
        </div>
    )
}