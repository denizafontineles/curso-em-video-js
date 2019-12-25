let input = document.getElementById('input')

function clicar(){
    let msg = document.getElementById('msg')
    let imag = document.getElementById('imag')
    let hora = input.value.trim()
    console.log(hora);

    msg.innerText = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        imag.src ="https://i.pinimg.com/originals/45/99/f1/4599f1f6c9f83c3e1d7971400420ae62.jpg"
        document.body.style.background = "#00CED1"
    } else if (hora >= 12 && hora < 18){
        imag.src ="https://data.pixiz.com/output/user/frame/preview/400x400/0/7/2/5/2165270_02fe1.jpg"
        document.body.style.background = "#DAA520"
    } else{
        imag.src = 'https://cdn.pixabay.com/photo/2015/04/08/12/13/landscape-712588_960_720.jpg'
        document.body.style.background = "#191970"
    }
}


