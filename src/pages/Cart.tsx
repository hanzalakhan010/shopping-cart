import { CartContext } from "@/contexts/CartContext";
import { useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="p-6 bg-gray-50 min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Shopping Cart</h1>
            <Separator className="mb-6" />

            <div className="space-y-4">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500">Your cart is empty.</p>
                ) : (
                    cartItems.map((item, index) => (
                        <Card key={index}>
                            <CardContent className="flex justify-between items-center py-4">
                                <span className="font-medium">Product {index + 1}</span>
                                <div className="flex gap-2">
                                    <Button variant="default" size="sm">
                                        +
                                    </Button>
                                    <Button variant="secondary" size="sm">
                                        -
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                        Remove
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>

            {cartItems.length > 0 && (
                <div className="mt-6 flex justify-end gap-4">
                    <Button variant="secondary">Clear Cart</Button>
                    <Button variant="default">Checkout</Button>
                </div>
            )}
        </div>
    );
};

export default Cart;
