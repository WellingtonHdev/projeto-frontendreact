import { AppStyled } from "./AppStyled"
import Filters from "./Components/Filters/Filters"
import Home from "./Components/ProductList/Home/Home"
import ProductCard from "./Components/ProductList/ProductCard/ProductCard"
import Cart from "./Components/ShoppingCart/Cart/Cart"
import Items from "./Components/ShoppingCart/Items/Items"
import GlobalStyled from "./GlobalStyled"
import { productList } from "./assents/ProductsList"


export default function app() {
  console.log(productList)
  return (
    <AppStyled>
      <GlobalStyled/>
      <Filters />
      <Home productList={productList} />
      <Cart />
    </AppStyled>
  )
}
