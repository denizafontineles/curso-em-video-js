function verifica() {
    let data = new Date()
    let anoAtual = data.getFullYear()
    let anoNasc = document.getElementById('idade')
    let resultado = document.getElementById('resultado')

    if (anoNasc.value == 0 || Number(anoNasc.value) > anoAtual) {
        alert('[ERRO] Verifique os dados!')
    } else {
        let sexo = document.getElementsByName('sexo')
        let calculaIdade = anoAtual - Number(anoNasc.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'imagem')

        if (sexo[0].checked) {
            genero = 'Homem'
            if (calculaIdade >= 0 && calculaIdade < 10) {
                img.setAttribute('src', 'http://lillo.com.br/wp-content/uploads/2017/04/a-crianca-de-2-anos.jpg')

            } else if (calculaIdade < 21) {
                img.setAttribute('src', 'https://midianinja.org/files/2018/11/45309862_962755413932716_4836410247931232256_n.jpg')


            } else if (calculaIdade < 50) {
                img.setAttribute('src', 'https://abrilveja.files.wordpress.com/2016/05/autismo-adulto-homem-aprendizado-20120201-original.jpeg')
            }

        } else if (sexo[1].checked) {
            genero = 'Mulher'
            if (calculaIdade >= 0 && calculaIdade < 10) {
                img.setAttribute('src', 'http://portalfmb.org.br/wp-content/uploads/2017/12/cover_article_2407_es_ES-770x473.jpg')
            } else if (calculaIdade < 21) {
                img.setAttribute('src', 'https://img.freepik.com/fotos-gratis/mulher-rosto-sorridente-com-cabelos-encaracolados_1139-582.jpg?size=626&ext=jpg')

            } else if (calculaIdade < 50) {
                img.setAttribute('src', 'http://www.dicasdemulher.com.br/wp-content/uploads/2015/03/as-melhores-cores-de-cabelo-para-mulheres-acima-dos-40.jpg')

            }
        }
        resultado.setAttribute('class', 'resultado')
        resultado.innerHTML = `Resultado ${genero} com idade ${calculaIdade} anos.`
        resultado.appendChild(img)
    }
}