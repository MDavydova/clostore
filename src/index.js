import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter} from "react-router-dom";
import {UserProvider} from "./context/user.contaxt";
import {ProductsProvider} from "./context/products.contaxt";
import {CartProvider} from "./context/cart.context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <UserProvider>
              <ProductsProvider>
                  <CartProvider>
                      <App />
                  </CartProvider>
              </ProductsProvider>
          </UserProvider>
      </BrowserRouter>
  </React.StrictMode>
);

