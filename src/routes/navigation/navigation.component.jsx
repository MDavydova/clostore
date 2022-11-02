import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Fragment, useContext } from "react";
import './navigation.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {UserContext} from "../../context/user.contaxt";

import {signOutUser} from '../../utils/firebase.utils'

const Navigation = () => {
    const {currentUser} = useContext(UserContext)

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
                </div>

                <div className='nav-links-container'>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutUser}>Sign Out</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                        )
                    }
                </div>

            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
