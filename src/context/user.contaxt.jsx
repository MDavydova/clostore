import {createContext, useState, useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
})

export const ProductContext = createContext({
    currentProduct: null,
    setCurrentProduct: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser}

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if(user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })

        return unsubscribe
    }, [])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const ProductProvider = ({children}) => {
    const [currentProduct, setCurrentProduct] = useState(null);
    const value = {currentProduct, setCurrentProduct}

    useEffect(() => {

    }, [])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}
