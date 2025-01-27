const linha = document.getElementById('linhas')
const area = document.getElementById('txtArea')
const nomeArquivo = document.getElementById('titulo')
area.focus()

//mudar a cor do texto
api.setColor((event, color) => {
    area.style.color = color
})

//linhas
function numerarLinhas() {
    let linhaNumerada = ""
    let arrayLinhas = area.value.split('\n')
    for(let i = 0; i < arrayLinhas.length; i++) {
        linhaNumerada += i + 1 + '<br>'
        linha.innerHTML = linhaNumerada
    }
}

numerarLinhas()

area.addEventListener('input', () => {
    numerarLinhas()
})

area.addEventListener('scroll', () => {
    linha.scrollTop = area.scrollTop
})

//Novo arquivo | Abrir arquivo
api.setFile((event, file) => {
    area.value = file.content
    nomeArquivo.innerHTML = `${file.name} - Mini Dev Editor`
    numerarLinhas()
})