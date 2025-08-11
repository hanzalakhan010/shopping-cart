import { Link } from "react-router"
import { ShoppingCart } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "@/contexts/CartContext";
const NavBar = () => {
    const { cartItems } = useContext(CartContext)
    return (<nav>
        <Link to='/cart'>
        <ShoppingCart />{cartItems.length}</Link>
    </nav>)
}

export default NavBar;