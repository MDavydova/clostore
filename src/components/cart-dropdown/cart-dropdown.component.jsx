import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CartDropdownContainer, EmptyMessage, CartItems} from "./cart-dropdown.styles";
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
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => (
                         <CartItem key={item.id} cartItem={item}/>
                    )) : (
                        <EmptyMessage>Your cart is empty</EmptyMessage>
                    )
                }
            </CartItems>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={navigateHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown
