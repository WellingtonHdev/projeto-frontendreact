import { FiltersStyled } from "./FiltersStyle";


export default function Filters({
  minFilter,
  maxFilter,
  searchFilter,
  setMinFilter,
  setMaxFilter,
  setSearchFilter,
}) {
  return (
    <FiltersStyled>

      <h2>Filters</h2>
      <label>
        Valor minima:
        <br />
        <input type="number" value={minFilter} onChange={(e) => {
          if (e.target.value < 0) {
            alert("Não temos produtos com valor menor que zero")
          } else { setMinFilter(parseFloat(e.target.value)) }

        }} />
      </label>
      <br />
      <label>
        Valor maxima:
        <br />
        <input type="number" value={maxFilter} onChange={(e) =>{
          if (e.target.value < 0) {
            alert("Não temos produtos com valor menor que zero")
          } else{
          setMaxFilter(parseFloat(e.target.value))}}} />
      </label>
      <br />
      <label>
        Busca por nome:
        <br />
        <input type="text" value={searchFilter} onChange={(e) => setSearchFilter(e.target.value)} />
      </label>
    </FiltersStyled>
  )
}
