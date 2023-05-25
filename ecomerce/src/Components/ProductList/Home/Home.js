import { useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"
import { Container } from "./HomeStyle"
import { Header } from "./HomeStyle"

export default function Home({ productList }) {

  const [ordination, setOrdination] = useState("");

  function onChangeSelect (){

  } 

  return (
    <HomeStyle>
      <Header>
        <spam>Quantidade de produtos: {productList.length} </spam>
        <spam>Ordenar:
          <select value={ordination} onChange={()=>onChangeSelect()}>
            <option></option>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select></spam>
      </Header>
      <Container>
        <ProductCard productList={productList[0]} />
        <ProductCard productList={productList[1]} />
        <ProductCard productList={productList[2]} />
      </Container>
    </HomeStyle>
  )
}