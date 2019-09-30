function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value < 1800 || fano.value > ano ){

        window.alert('[ERRO] Verifique os dados e tente novamente!')
        
    }
    else{

        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src','bebe.jpg')    //criança
            }
            else if(idade < 21){
                img.setAttribute('src','jov-menino.jpg')
                    //jovem
            }
            else if(idade < 50){
                img.setAttribute('src','homem.jpg')
                    //adulto
            }
            else {
                img.setAttribute('src','idoso.jpg')
                    //idoso
            }                 

        }
        else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <= 10){
                img.setAttribute('src','bebe.jpg')
                //criança
            }
            else if(idade < 21){
                img.setAttribute('src','jov-menina.jpg')
                //jovem
            }
            else if(idade < 50){
                img.setAttribute('src','mulher.jpg')
                //adulto
            }
            else {
                img.setAttribute('src','idosa.jpg')
                //idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Selecionado ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}