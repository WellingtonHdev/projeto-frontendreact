import { ProductCardStyle } from "./ProductCardStyle"
import { ImgStyle } from "./ProductCardStyle"

export default function ProductCard() {
  return (

    <ProductCardStyle>
      <div>
        <ImgStyle>ProductCard</ImgStyle>
      </div>
      <div>
        <p>Nome do Produto:</p>
        <p>Valor:</p>
        <button>Adicionar ao carrinho</button>
      </div>
    </ProductCardStyle>
  )
}