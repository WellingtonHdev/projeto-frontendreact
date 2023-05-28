import { CustomButton, ProductCardStyle, ProductCardText } from "./ProductCardStyle"
import { ImgStyle } from "./ProductCardStyle"

export default function ProductCard({ product, addCartProduct }) {
  return (

    <ProductCardStyle>
      <div>
        <ImgStyle> <img src={product.imageUrl} width="100%" /> </ImgStyle>
      </div>
      <ProductCardText>
        <p>{product.name} </p>
        <p>Valor: R${product.value}</p>
        <button  onClick={()=>{addCartProduct(product);} } >Adicionar ao carrinho</button>
      </ProductCardText>
    </ProductCardStyle>
  )
}