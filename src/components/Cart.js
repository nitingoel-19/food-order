import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const distpatch = useDispatch();
    const handleCart = () => {
        distpatch(clearCart());
    }
    const cartItems = useSelector(store => store.cart.items);
    return (
        <>
           <div>
             <h1 className="font-bold text-3xl">Cart Items - {cartItems.length}</h1>
             <button className="bg-green-100 p-2 m-5" onClick={handleCart}>Clear Cart</button>
           </div>
        </>
    );
}

export default Cart;