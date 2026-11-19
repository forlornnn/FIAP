// Array de imagens ( caminho correto das imagens)
let imagens=[
    "./src/assets/Jogo01.jpg",
    "./src/assets/Jogo02.jpg",
    "./src/assets/Jogo03.jpg"
];
// posição que vai iniciar as imagens
let posicao= 0;
let tempo = 3000; // 3 segundos

//função do slideshow

function SlideShow(){
    let bannerImg =document.getElementById("imgBanner")
    if(bannerImg){
        bannerImg.src=imagens[posicao];
    }
    // incremento
    posicao++;

    if(posicao == imagens.length){
        posicao=0;
    }
    setTimeout(SlideShow, tempo)

}
// Executando a função
SlideShow();


// MODO CLARO/ESCURO

const btnTema = document.getElementById("btn-tema");
const body = document.body;

btnTema.addEventListener("click",()=>{
    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){
        btnTema.textContent="";
    }else{
        btnTema.textContent="";
    }
})

// MENU HAMBURGUER

const menuIcone = document.getElementById("menu-icone");
const navMenu = document.getElementById("nav-menu");

menuIcone.addEventListener("click",()=>{
    navMenu.classList.toggle("active");
    menuIcone.classList.toggle("open")
})