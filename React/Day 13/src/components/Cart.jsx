import { useContext } from "react";
import { FaTrashAlt, FaPlus, FaMinus } from "react-icons/fa";
import { context } from "../Store";

const Cart = () => {
    const { cart, qtyHandler } = useContext(context)
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
                {
                    cart.map(
                        (product) => {
                            return (
                                <div className="flex items-center justify-between border-b pb-4 mb-4">
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={product.thumbnail}
                                            alt="Product"
                                            className="w-24 h-24 object-cover rounded-lg"
                                        />
                                        <div>
                                            <h2 className="text-xl font-semibold">{product.title}</h2>
                                            <p className="text-gray-600">{product.price}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center border rounded-lg overflow-hidden">
                                            <button onClick={() => qtyHandler(product.id, 1)} className="px-3 py-1 text-gray-700 hover:bg-gray-200">
                                                <FaMinus />
                                            </button>
                                            <input
                                                type="text"
                                                value={product.qty}
                                                readOnly
                                                className="w-12 text-center border-x"
                                            />
                                            <button onClick={() => qtyHandler(product.id, 2)} className="px-3 py-1 text-gray-700 hover:bg-gray-200">
                                                <FaPlus />
                                            </button>
                                        </div>
                                        <p className="text-lg font-bold">$240</p>
                                        <button className="text-red-500 hover:text-red-700">
                                            <FaTrashAlt size={20} />
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    )
                }



                <div className="flex justify-between items-center mt-8">
                    <h2 className="text-2xl font-bold">Total:</h2>
                    <p className="text-2xl font-bold">$240</p>
                </div>

                <div className="mt-6 text-right">
                    <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
