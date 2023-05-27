
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

  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
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

  const addCartProduct = (product)=>{
    let newCart = cart.filter(item => item.id !== product.id);
    let productAdd = cart.find(item => item.id === product.id );
    if(productAdd){
      productAdd.quantity=productAdd.quantity+1;
    }else{
      productAdd = {
        ...product,
      };
      productAdd.quantity=1;
    }
    newCart.push(productAdd);
    const totalAmount=newCart.reduce((accumulator, item)=> accumulator+item.value*item.quantity,0);
    setAmount(totalAmount);
    newCart=newCart.sort((a,b)=> a.id - b.id);
    setCart(newCart);
  };

  const removeProduct = (product)=> {
    let removeCartProduct = cart.filter(item => item.id !==product.id);
    let productRemove = cart.find(item => item.id === product.id );
    if(productRemove.quantity > 1){
      productRemove.quantity = productRemove.quantity-1;
      removeCartProduct.push(productRemove);
    }
    const totalAmount=removeCartProduct.reduce((accumulator, item)=> accumulator+item.value*item.quantity,0);
    setAmount(totalAmount);
    removeCartProduct=removeCartProduct.sort((a,b)=> a.id - b.id);
    setCart(removeCartProduct);
  };



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
        productList={newList}
        addCartProduct={addCartProduct} />
      <Cart
        amount={amount}
        removeProduct={removeProduct}
        cart={cart} />
    </AppStyled>
  )
}
