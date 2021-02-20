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