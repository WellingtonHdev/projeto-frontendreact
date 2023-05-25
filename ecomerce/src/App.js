import { useState } from "react"
import { AppStyled } from "./AppStyled"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"
import GlobalStyled from "./GlobalStyled"
import { productList } from "./assents/ProductsList"


export default function app() {
  
  const [cart, setCart] = useState("");
  const [amount, setAmount] = useState("");
  const [minFilter, setMinFilter] = useState("");
  const [maxFilter, setMaxFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <AppStyled>
      <GlobalStyled/>
      <Filters />
      <Home productList={productList} />
      <Cart />
    </AppStyled>
  )
}
