import { CartStyle } from "./CartStyle"
import Item from "../Items/Items"

export default function Cart() {
    return (
      <CartStyle>
        <p>Cart</p>
        <Item/>
      </CartStyle>
    )
  }