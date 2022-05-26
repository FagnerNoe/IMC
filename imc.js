const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !=='' && peso !==''){
        const valorIMC = (peso / (altura*altura)).toFixed(2);
        let classificar = '';

        if(valorIMC < 18.5){
            classificar = 'abaixo do peso';
        }else if(valorIMC <25){
            classificar = 'com peso ideal';
        }else if(valorIMC <30){
            classificar = 'levemente acima do peso';
        }else if(valorIMC <35){
            classificar = ' obesidade grau I';
        }else{
            classificar = 'muito gordo,cuidado!!';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce esta ${classificar}`;
    }
        else{
            resultado.textContent =  "Preencha todos os campos!!";
        }

}

calcular.addEventListener('click',imc);

