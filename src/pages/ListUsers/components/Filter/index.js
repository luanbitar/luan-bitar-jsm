import "./Filter.scss"
import FilterIcon from "assets/filter.svg"

const translateType = {
  special: "especiais",
  normal: "normais",
  laborious: "trabalhosos",
}

function FilterItem({ selectedType, mapType, onClick }) {
  const filterOptionClass = `filter-option ${
    selectedType === mapType ? "-active" : ""
  }`

  return (
    <div className={filterOptionClass} onClick={onClick}>
      {translateType[mapType]}
    </div>
  )
}

function Filter({ type, search, onTypeChange }) {
  const searchText = search ? ` com nome: ${search}` : ""
  const allUsersText = !!translateType[type] ? "" : "todos os "
  const typeText = translateType[type] ? translateType[type] : ""
  const filterInfo = `Buscando ${allUsersText}usuários ${typeText}${searchText}`

  return (
    <section className="filter-container">
      <div className="list-filters">
        <FilterIcon className="filter-icon" />
        <div className="filter-itens">
          {Object.keys(translateType).map(mapType => (
            <FilterItem
              key={mapType}
              selectedType={type}
              mapType={mapType}
              onClick={() => onTypeChange(mapType)}
            />
          ))}
        </div>
      </div>
      <p className="filter-info">{filterInfo}</p>
    </section>
  )
}
export default Filter
