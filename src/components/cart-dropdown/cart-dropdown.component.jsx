import './cart-dropdown.styles.scss'
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";
import {useNavigate} from "react-router";

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate()

    const navigateHandler =  () => {
        navigate("/checkout")
    }

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map((item) => {
                    return <CartItem key={item.id} cartItem={item}/>
                })}
            </div>
            <Button onClick={navigateHandler}>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown
