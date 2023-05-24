import ProductCard from "../ProductCard/ProductCard"
import { HomeStyle } from "./HomeStyle"
import { Container } from "./HomeStyle"
import { Header } from "./HomeStyle"

export default function Home() {
  return (
    <HomeStyle>
      <Header>
        <spam>Quantidade de produtos: </spam>
        <spam>Ordenar:<select>
          <option>Crescente</option>
          <option>Decrescente</option>
        </select></spam>
      </Header>
      <Container>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Container>
    </HomeStyle>
  )
}