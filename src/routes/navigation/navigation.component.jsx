import { Outlet } from 'react-router'
import { Fragment, useContext } from "react";
import './navigation.styles'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user.contaxt";
import {CartContext} from "../../context/cart.context";
import {signOutUser} from '../../utils/firebase.utils'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "./navigation.styles";


const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer  to="/">
                    <Logo className='logo'/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>

                    {
                        currentUser ? (
                            <NavLink as='span' onClick={signOutUser}>Sign Out</NavLink>
                        ) : (
                            <NavLink to='/auth'>
                                Sign In
                            </NavLink>
                        )
                    }

                    <CartIcon/>
                </NavLinks>
                { isCartOpen && <CartDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
