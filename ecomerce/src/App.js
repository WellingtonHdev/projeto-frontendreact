
import React, { useState } from "react"

import { AppStyled } from "./AppStyled"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"
import GlobalStyled from "./GlobalStyled"
import { productList } from "./assents/ProductsList"
import { react } from "@babel/types"


export default function App() {

  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState(0);
  const [maxFilter, setMaxFilter] = useState(0);
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <AppStyled>
      <GlobalStyled />
      <Filters
        minFilter={minFilter}
        setMinFilter={setMinFilter}
        maxFilter={maxFilter}
        setMaxFilter={setMaxFilter}
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter} />
      <Home 
      productList={productList} 
      amount={amount} 
      setAmount={setAmount} 
      cart={cart} 
      setCart={setCart} />
      <Cart 
      amount={amount} 
      setAmount={setAmount} 
      cart={cart} 
      setCart={setCart} />
    </AppStyled>
  )
}
