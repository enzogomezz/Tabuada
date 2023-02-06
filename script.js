function biloto() {
    let numero = Number(document.querySelector("input#numeral").value)
    let conta = 1
    let res = document.querySelector("div#res")
    res.innerHTML = ""
    do {
        let opres = numero*conta
        console.log(`${conta} x ${numero} = ${opres}`)
        res.innerHTML += `${conta} x ${numero} = ${opres} </br>`
        conta++
    } while (conta <= 10)
}