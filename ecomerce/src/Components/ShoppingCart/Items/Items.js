import { ItemStyled } from "./ItemsStyle"


export default function Item({ product, removeProduct }) {
  return (
    <ItemStyled>
      <span> {product.quantity} X {product.name} </span>
      <button onClick={() => { removeProduct(product); }} > remover </button>
    </ItemStyled>
  )
}