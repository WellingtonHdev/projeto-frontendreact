import { useEffect, useState } from "react"
import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"
import { Container } from "./HomeStyle"
import { Header } from "./HomeStyle"

export default function Home({ productList }) {

  const [ordination, setOrdination] = useState("");
  const [newListHome, setNewListHome] = useState(productList)

  function onChangeSelect (e){
    let newOrdination = productList
    if(e === "Crescente"){
      newOrdination = newOrdination.sort((a, b)=> a.value - b.value);
    }
    if(e === "Decrescente" ){
      newOrdination = newOrdination.sort((a, b)=> b.value - a.value);
    }
    setNewListHome(newOrdination)
    setOrdination(e);
  } 

  useEffect(()=>{
    onChangeSelect(ordination);
  }, [productList]);

  return (
    <HomeStyle>
      <Header>
        <spam>Quantidade de produtos: {productList.length} </spam>
        <spam>Ordenar:
          <select value={ordination} onChange={(e)=>onChangeSelect(e.target.value)}>
            <option></option>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select></spam>
      </Header>
      <Container>
        {newListHome.map((product, index) => (
          <ProductCard key={index} productList={product} />
        ))}
      </Container>
    </HomeStyle>
  )
}