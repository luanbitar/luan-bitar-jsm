const translateType = {
  special: "especiais",
  normal: "normais",
  laborious: "trabalhosos",
}

function propsMapper({ type, search }) {
  const searchText = search ? ` com nome: ${search}` : ""
  const filterInfo = `Buscando usuários ${translateType[type]}${searchText}`

  return {
    filterInfo,
  }
}

export default propsMapper
