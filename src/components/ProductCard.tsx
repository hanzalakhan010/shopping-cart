// import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";

interface Product {
    id: number,
    name: string,
    description: string,
    price: number,
    rating: number,
    image: string
}

const ProductCard = ({ product }: { product: Product }) => {
    const { cartItems,setCartItems } = useContext(CartContext)
    function handleAddToCart() {
        setCartItems((prev) => [...prev, product])
        console.log(cartItems)
    }
    return (
        <Card className="w-72 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover"
            />
            <CardContent className="p-4 space-y-3">
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{product.description}</p>
                <div className="flex items-center space-x-1 text-yellow-500">
                    {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                    ))}
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-blue-600">${product.price}</span>
                    <Button size="sm" className="flex items-center gap-1" onClick={handleAddToCart}>
                        <ShoppingCart size={16} />
                        Add to Cart
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;