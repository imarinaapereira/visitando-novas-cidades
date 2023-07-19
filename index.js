const nametourist = prompt('Olá turista ,qual seu nome?')

const visited = prompt('Você já visitou alguma cidade?Sim/Não')
let visitedCities = []

switch (visited) {
  case 'sim':
    let nameCity = prompt('Qual o nome da cidade visitada?')
    visitedCities.push(nameCity)
    let outraCidade = prompt('você já visitou alguma outra cidade?Sim/Não')
    while (outraCidade === 'sim') {
      let novaCidade = prompt('Qual o nome da outra cidade visitada?')
      visitedCities.push(novaCidade)
      outraCidade = prompt('você já visitou alguma outra cidade?Sim/Não')
    }
    switch (outraCidade) {
      case 'não':
        alert(`${nametourist} visitou ${visitedCities}`)
    }
}