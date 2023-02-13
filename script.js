function biloto() {
    let numero = document.querySelector("input#numeral")
    let tabela = document.querySelector("select#res")
    let conta = 1

    if (numero.value.length == 0) {
        window.alert("[ERRO] Impossivel calcular")
    } else {
        tabela.innerHTML = ""
        do {
            let criaItem = document.createElement("option")
            criaItem.text = `${Number((numero).value)} x ${conta} = ${Number((numero).value) * conta}`
            criaItem.value = `tab${conta}`
            tabela.appendChild(criaItem)
            conta++
        } while (conta <= 10)
    }
}
