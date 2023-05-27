
import React, { useState, useEffect } from "react"
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
  const [minFilter, setMinFilter] = useState(NaN);
  const [maxFilter, setMaxFilter] = useState(NaN);
  const [searchFilter, setSearchFilter] = useState("");
  const [newList, setNewList] = useState(productList);

  useEffect(() => {
    let listFiltered = productList;
    if (minFilter && maxFilter && minFilter < maxFilter ) {
      listFiltered = listFiltered.filter(item => item.value >= minFilter && item.value < maxFilter );
    }
    
    if (searchFilter) {
      const searchLowerCase = searchFilter.toLowerCase();
      listFiltered = listFiltered.filter(item => item.name.toLowerCase().includes(searchLowerCase));
    }
    
    setNewList(listFiltered);
  }, [maxFilter, minFilter, searchFilter]);



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
        productList={newList} />
      <Cart
        amount={amount}
        setAmount={setAmount}
        cart={cart}
        setCart={setCart} />
    </AppStyled>
  )
}
