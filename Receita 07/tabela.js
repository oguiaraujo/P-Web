const montarTabela = (dados, divId = "dadosDiv", colunas = null) => {
  if (!dados || dados.length === 0) {
    document.getElementById(divId).innerHTML = "<p>Nenhum dado encontrado</p>"
    return
  }

  const headers = colunas || Object.keys(dados[0])

  let tabela = "<table><thead><tr>"
  headers.forEach(h => {
    tabela += `<th>${h}</th>`
  })
  tabela += "</tr></thead><tbody>"

  dados.forEach(item => {
    tabela += "<tr>"
    headers.forEach(h => {
      tabela += `<td>${item[h] ?? ""}</td>`
    })
    tabela += "</tr>"
  })

  tabela += "</tbody></table>"

  document.getElementById(divId).innerHTML = tabela
}
