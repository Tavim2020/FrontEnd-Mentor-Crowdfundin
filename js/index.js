// botão do bookmark
var bookmark = document.querySelector('#bookmark');
var contadorDeClique = 0;

bookmark.addEventListener('click', ()=>{
    var img = bookmark.children[0];
    var titleBookmark = bookmark.children[1];
    contadorDeClique++;
    img.style.transition = '2s';
    titleBookmark.style.transition = '2s';
    bookmark.style.transition = '2s';
    bookmark.style.backgroundColor = "#F4F8F9";

    img.setAttribute('src', "../images/icon-bookmark-verde.svg");
    titleBookmark.style.color = "#307D75";

    img.style.transform = 'translateX(255%)';


    if(contadorDeClique === 2){
        bookmark.style.backgroundColor = "#F4F4F4";
        img.setAttribute('src', "../images/icon-bookmark.svg");
        titleBookmark.style.color = "#7B7B7B";

        img.style.transition = '2s';
        img.style.transform = 'translateX(0%)';

        contadorDeClique = 0;
    }
})



// botão do back this project

var buttonThisProject = document.querySelector('#buttonBack');


// variaveis globais do nosso projeto
var background = document.querySelector('.background-color');
var modal = document.querySelector('.modal');

buttonThisProject.addEventListener('click', ()=>{
    modal.classList.remove('hidden');
    background.style.filter = 'brightness(50%)';
})


// modal effects


// botão para fechar modal
var buttonCloseModal = document.querySelector('.button-close-modal');


buttonCloseModal.addEventListener('click', ()=>{
    modal.classList.add('hidden');
    background.style.filter = 'brightness(100%)';
})


// botoes do "input"(div criada representando o input)
var inputRadio = document.querySelectorAll('.inputRadio');
var containerFirst = document.querySelector('.container-first');
var titleContainer = document.querySelectorAll('.title-container');
var treeContainer = document.querySelectorAll('.container-default-modal');
var containerClicked = document.querySelectorAll('.container-clicked');
var hr = document.querySelectorAll('.hr');
var validateChecked = 0;



inputRadio[0].addEventListener('click', ()=>{

    inputRadio[0].children[0].classList.remove('hidden');
    inputRadio[1].children[0].classList.add('hidden');
    inputRadio[2].children[0].classList.add('hidden');

    containerFirst.style.border = '0.08vw solid #35B6AA';

    treeContainer[0].style.border = '0.08vw solid #ECECEC';
    treeContainer[1].style.border = '0.08vw solid #ECECEC';

    titleContainer[0].style.color = '#64A399';
    titleContainer[1].style.color = '#000';
    titleContainer[2].style.color = '#000';

    hr[0].classList.add('hidden');
    containerClicked[0].classList.add('hidden');
    hr[1].classList.add('hidden');
    containerClicked[1].classList.add('hidden');
    
})


inputRadio[1].addEventListener('click', ()=>{

    inputRadio[0].children[0].classList.add('hidden');
    inputRadio[1].children[0].classList.remove('hidden');
    inputRadio[2].children[0].classList.add('hidden');

    containerFirst.style.border = '0.08vw solid #ECECEC';

    treeContainer[0].style.border = '0.08vw solid #35B6AA';
    treeContainer[1].style.border = '0.08vw solid #ECECEC';

    titleContainer[0].style.color = '#000';
    titleContainer[1].style.color = '#64A399';
    titleContainer[2].style.color = '#000';

    hr[0].classList.remove('hidden');
    containerClicked[0].classList.remove('hidden');
    hr[1].classList.add('hidden');
    containerClicked[1].classList.add('hidden');

})

inputRadio[2].addEventListener('click', ()=>{

    inputRadio[0].children[0].classList.add('hidden');
    inputRadio[1].children[0].classList.add('hidden');
    inputRadio[2].children[0].classList.remove('hidden');

    containerFirst.style.border = '0.08vw solid #ECECEC';

    treeContainer[0].style.border = '0.08vw solid #ECECEC';
    treeContainer[1].style.border = '0.08vw solid #35B6AA';

    titleContainer[0].style.color = '#000';
    titleContainer[1].style.color = '#000';
    titleContainer[2].style.color = '#64A399';

    hr[0].classList.add('hidden');
    containerClicked[0].classList.add('hidden');
    hr[1].classList.remove('hidden');
    containerClicked[1].classList.remove('hidden');

})




// botões do select
var buttonSelected = document.querySelectorAll('.button-select');


buttonSelected[0].addEventListener('click', ()=>{

    modal.classList.remove('hidden');
    background.style.filter = 'brightness(50%)';
    window.location.href = '#modal';

})

buttonSelected[1].addEventListener('click', ()=>{

    modal.classList.remove('hidden');
    background.style.filter = 'brightness(50%)';
    window.location.href = '#modal';

})




// botões do modal de confirmação
var buttonContinue = document.querySelectorAll('.confirm');
var money = document.querySelectorAll('.money');
var moneyTotal = document.querySelector('.total-cash strong');

var barraVerde = document.querySelector('.content');  

var BarraTotalValue = 100000; //multiplicação em cruz

var subModal = document.querySelector('.subModal');



buttonContinue[0].addEventListener('click', ()=>{

    // pegando o texto Strong para transformar em numero sem virgula e sifrao e armaznear como Number
    var numberTotal = moneyTotal.innerHTML.replace(/[$]/, "");
    var notFloat = numberTotal.replace(/,/, "");
    var newMoneyTotalString = Number(notFloat);

    // pegando o valor para acrescentar
    var dinheiro = Number(money[0].children[1].innerHTML);

    // somando os valores e convertendo em String
    var totalCalc = newMoneyTotalString + dinheiro;
    var totalCalcString = String(totalCalc);

    // calculo da barrinha que carrega apos o acrescimo de valor
    var porcentagem = (dinheiro * 100) / (BarraTotalValue * 1) ;
    
    // variavel que ira atualiza a barrinha
    var valueBarra = numberTotal.replace(/,/, ".");
    var porcentagemBarra = Number(valueBarra);
    var totalBarra = porcentagemBarra + porcentagem;
    

    if(totalCalcString < 100000){
        var floatTotal = totalCalcString[0] + totalCalcString[1] + ',' + totalCalcString[2] + totalCalcString[3] + totalCalcString[4];

        moneyTotal.innerHTML = '$' + floatTotal;
        barraVerde.style.width = `${totalBarra}%`;
    }
    else if(totalCalcString >= 100000){
        var floatTotal = totalCalcString[0] + totalCalcString[1]  + totalCalcString[2] + ',' + totalCalcString[3] + totalCalcString[4] + totalCalcString[5];

        moneyTotal.innerHTML = '$' + floatTotal;
        moneyTotal.style.color = '#64A399';
        barraVerde.style.width = '100%';
    }
    modal.classList.add('hidden');
    subModal.classList.remove('hidden');
    
})

buttonContinue[1].addEventListener('click', ()=>{
    
    // pegando o texto Strong para transformar em numero sem virgula e sifrao e armaznear como Number
    var numberTotal = moneyTotal.innerHTML.replace(/[$]/, "");
    var notFloat = numberTotal.replace(/,/, "");
    var newMoneyTotalString = Number(notFloat);

    // pegando o valor para acrescentar
    var dinheiro = Number(money[1].children[1].innerHTML);

    // somando os valores e convertendo em String
    var totalCalc = newMoneyTotalString + dinheiro;
    var totalCalcString = String(totalCalc);

    // calculo da barrinha que carrega apos o acrescimo de valor
    var porcentagem = (dinheiro * 100) / (BarraTotalValue * 1) ;
   
    // variavel que ira atualiza a barrinha
    var valueBarra = numberTotal.replace(/,/, ".");
    var porcentagemBarra = Number(valueBarra);
    var totalBarra = porcentagemBarra + porcentagem;

    
    if(totalCalcString < 100000){
        var floatTotal = totalCalcString[0] + totalCalcString[1] + ',' + totalCalcString[2] + totalCalcString[3] + totalCalcString[4];

        moneyTotal.innerHTML = '$' + floatTotal;
        barraVerde.style.width = `${totalBarra}%`;
    }
    else if(totalCalcString >= 100000){
        var floatTotal = totalCalcString[0] + totalCalcString[1]  + totalCalcString[2] + ',' + totalCalcString[3] + totalCalcString[4] + totalCalcString[5];

        moneyTotal.innerHTML = '$' + floatTotal;
        moneyTotal.style.color = '#64A399';
        barraVerde.style.width = '100%';
    }

    modal.classList.add('hidden');
    subModal.classList.remove('hidden');
    
})


// submodal events
var buttonSubModal = document.querySelector('.button-gotIt');
buttonSubModal.addEventListener('click', ()=>{
    subModal.classList.add('hidden');
    background.style.filter = 'brightness(100%)';
    window.location.href = '#subModal';
})