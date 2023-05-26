import { CartStyle } from "./CartStyle"
import Item from "../Items/Items"

export default function Cart({ amout, setAmout, cart, setCart }) {
    return (
      <CartStyle>
        <p>Cart</p>
        <Item/>
      </CartStyle>
    )
  }