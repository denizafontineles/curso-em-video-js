let btnAdd = document.getElementById('btn-add')
let btnFinal = document.getElementById('btn-final')
let selectNum = document.getElementById('sel-num')
let inputText = document.getElementById('input-text')
let msgTotal = document.getElementById('msg-total') 
let arrNum = []

btnAdd.addEventListener('click', adicionar)
btnFinal.addEventListener('click', finalizar)


function temNum(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function emLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function adicionar() {
    if(temNum(inputText.value) && !emLista(inputText.value , arrNum)){
        arrNum.push(Number(inputText.value))
        let option = document.createElement('option')
        option.text += ` Valor ${inputText.value} adicionado`
        selectNum.appendChild(option)
        msgTotal.innerHTML = ``
    }else{
        alert('Valor inválido ou já encontrado.')
    }
    inputText.value = ``
    inputText.focus()
}

function finalizar() {
    if(arrNum.length == 0){
        alert('Adiciona um valor antes de finalizar!')
    }else{
        let resultado = arrNum.length
        let maior = arrNum[0]
        let menor =  arrNum[0]
        let soma = 0
        let media = 0
        for (const key in arrNum) {
            soma += arrNum[key]
            if (arrNum[key] > maior) {
                maior = arrNum[key]
            }
            if(arrNum[key] < menor){
                menor = arrNum[key]
            }
        }
        media = soma / resultado
        msgTotal.innerHTML = ``
        msgTotal.innerHTML += `<p> Ao todo, temos ${resultado} números cadastrados. </p>`
        msgTotal.innerHTML += `<p>O <strong>maior</strong> valor é ${maior} e o <strong> menor</strong> valor é ${menor}</p>`
        msgTotal.innerHTML += `<p> Somando todos os valores, temos ${soma} de total. </p>`
        msgTotal.innerHTML += `<p> A média da soma é ${media}.</p>`

    }
}