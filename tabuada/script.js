function tabuada() {
    let inputNum = document.getElementById('input-num') 
    let selTabuada = document.getElementById('sel-tabuada')

    if(inputNum.value.length == 0){
        alert('[ERRO] Digite um número!')
    }else{
        let numero = Number(inputNum.value)
        index = 1
        selTabuada.innerHTML = ''
        while (index <= 10) {
            let option = document.createElement('option')
            option.text = `${numero} x ${index} = ${numero*index}`
            option.value = `tab${index}`
            selTabuada.appendChild(option)
            index++
        }
    }
}