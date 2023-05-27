export default function Item({product, removeProduct}) {
    return (
      <div>
        <span> {product.quantity}X {product.name} </span>
        <button onClick={()=> {removeProduct(product);}} > remover </button>
      </div>
    )
  }