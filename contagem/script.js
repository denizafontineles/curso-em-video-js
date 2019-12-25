function clicar() {

    let inputInicio = document.getElementById('input-inicio')
    let inputFim = document.getElementById('input-fim')
    let inputPasso = document.getElementById('input-passo')
    let msg = document.getElementById('msg')

    if (inputInicio.value.length == 0 || inputFim.value.length == 0 || inputPasso.value.length == 0) {
        msg.innerHTML = 'Impossível contar!'
        // alert('[ERRO] Digite um valor!')
    } else {
        msg.innerHTML = "Contando: "
        let inicio = Number(inputInicio.value)
        let fim = Number(inputFim.value)
        let passo = Number(inputPasso.value)
        if(passo <= 0){
            alert('Passo inválido! Passo passa a valer 1')
            passo = 1
        }
        if(inicio < fim){
            for (let index = inicio; index <= fim; index += passo) {
                msg.innerHTML += `${index} \u{1F449}`
            }
        }else{
            for (let index = inicio; index >= fim; index -= passo){
                msg.innerHTML += `${index} \u{1F449}`
            }
        }
        msg.innerHTML += `\u{1F3C1}`
    }
}