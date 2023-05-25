import { FiltersStyled } from "./FiltersStyle";


export default function Filters() {
  return (
    <FiltersStyled>
      
      <h2>Filters</h2>
      <label>
        Valor minímo:
        <br />
      <input type="number" />
      </label>
      <br />
      <label>
      Valor máximo:
      <br />
      <input type="number" />
      </label>
      <br />
      <label>
        Busca por nome:
        <br />
      <input type="text" />
      </label>
    </FiltersStyled>
  )
}
