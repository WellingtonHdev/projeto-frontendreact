import { ProductCardStyle, ProductCardText } from "./ProductCardStyle"
import { ImgStyle } from "./ProductCardStyle"

export default function ProductCard({ productList }) {
  console.log(productList)
  return (

    <ProductCardStyle>
      <div>
        <ImgStyle> <img src={productList.imageUrl} width="100%" /> </ImgStyle>
      </div>
      <ProductCardText>
        <p>{productList.name} </p>
        <p>Valor: {productList.value}R$</p>
        <button>Adicionar ao carrinho</button>
      </ProductCardText>
    </ProductCardStyle>
  )
}