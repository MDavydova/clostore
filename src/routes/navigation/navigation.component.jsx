import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Fragment, useContext } from "react";
import './navigation.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user.contaxt";
import {CartContext} from "../../context/cart.context";
import {signOutUser} from '../../utils/firebase.utils'
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
    const {currentUser} = useContext(UserContext)
    const {isCartOpen} = useContext(CartContext)

    return (
        <Fragment>
            <div className="navigation">
                <Link className="logo-container" to="/">
                    <Logo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>

                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                        )
                    }

                    <CartIcon/>
                </div>
                { isCartOpen && <CartDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
