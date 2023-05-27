import { CartStyle } from "./CartStyle"
import Item from "../Items/Items"

export default function Cart({ amount, removeProduct, cart}) {
    return (
      <CartStyle>
        <h2>Cart</h2>
        {cart.map((product, index)=>(
          <Item key={index} product={product} removeProduct={removeProduct} />
        ) )}
        <span>valor total:{ amount }</span>
        
      </CartStyle>
    )
  }