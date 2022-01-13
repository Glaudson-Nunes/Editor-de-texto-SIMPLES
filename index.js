



function texth1(input) {

    let h = document.getElementById("h1");

    h.innerHTML = input.value;

}

window.onload = function click() {


    let butao1 = document.getElementById("b1");
    let butao2 = document.getElementById("b2");
    let butao3 = document.getElementById("b3");
    let butao4 = document.getElementById("b4");
    let butao5 = document.getElementById("b5");
    let butao6 = document.getElementById("b6");
    let butao7 = document.getElementById("b7");
    let butao8 = document.getElementById("b8");
    let butao9 = document.getElementById("b9");
    let butao10 = document.getElementById("b10");
    let butao11 = document.getElementById("b11");
    let butao12 = document.getElementById("b12");
    let butao13 = document.getElementById("b13");
    let butao14 = document.getElementById("b14");
    let butao15 = document.getElementById("b15");
    let butao16 = document.getElementById("b16");
    let butao17 = document.getElementById("b17");
    let butao18 = document.getElementById("b18");
    let butao19 = document.getElementById("b19");

    let c = document.getElementById("cor1");
    let c2 = document.getElementById("cor2");
    let c3 =document.getElementById("cor3");
    let c4 = document.getElementById("cor4");
    let c5 = document.getElementById("cor5");
    let c6 = document.getElementById("cor6");
    let c7 = document.getElementById("cor7");
    let c8 = document.getElementById("cor8");
    let c9 = document.getElementById("cor9");
    let c10 = document.getElementById("cor10");
    let red = document.getElementById("redefinir");


    c.addEventListener("click",cor1);
    c2.addEventListener("click",cor2);
    c3.addEventListener("click",cor3);
    c4.addEventListener("click",cor4);
    c5.addEventListener("click",cor5);
    c6.addEventListener("click",cor6);
    c7.addEventListener("click",cor7);
    c8.addEventListener("click",cor8);
    c9.addEventListener("click",cor9);
    c10.addEventListener("click",cor10);
    red.addEventListener("click", redefinir);






    butao1.addEventListener("click", ocultar);
    butao2.addEventListener("click", visivel);
    butao3.addEventListener("click", limpar);
    butao4.addEventListener("click", fontP);
    butao5.addEventListener("click", fontM);
    butao6.addEventListener("click", fontG);
    butao7.addEventListener("click", redefinirFONT);
    butao8.addEventListener("click", MAIUSCULO);
    butao9.addEventListener("click", minusculo);
    butao10.addEventListener("click",EspaçoL);
    butao11.addEventListener("click",SemEspaço);
    butao12.addEventListener("click", EspaçoL2);
    butao13.addEventListener("click",MudarFont1);
    butao14.addEventListener("click",MudarFont2);
    butao15.addEventListener("click",MudarFont3);
    butao16.addEventListener("click",MudarFont4);
    butao17.addEventListener("click",MudarFont5);
    butao18.addEventListener("click",MudarFont6);
    butao19.addEventListener("click",FontPadrao);



    butao1.addEventListener("mousemove", cor);
    butao1.addEventListener("mouseout",corOf);

    butao2.addEventListener("mousemove", cor);
    butao2.addEventListener("mouseout",corOf);

    butao3.addEventListener("mousemove", cor);
    butao3.addEventListener("mouseout",corOf);


    butao4.addEventListener("mousemove", cor);
    butao4.addEventListener("mouseout",corOf);


    butao5.addEventListener("mousemove", cor);
    butao5.addEventListener("mouseout",corOf);


    butao6.addEventListener("mousemove", cor);
    butao6.addEventListener("mouseout",corOf);


    butao7.addEventListener("mousemove", cor);
    butao7.addEventListener("mouseout",corOf);

    butao8.addEventListener("mousemove", cor);
    butao8.addEventListener("mouseout",corOf);

    butao9.addEventListener("mousemove", cor);
    butao9.addEventListener("mouseout",corOf);

    butao10.addEventListener("mousemove", cor);
    butao10.addEventListener("mouseout", corOf);

    butao11.addEventListener("mouseover", cor);
    butao11.addEventListener("mouseout",corOf);

    butao12.addEventListener("mouseover", cor);
    butao12.addEventListener("mouseout",corOf);

    butao13.addEventListener("mousemove", cor);
    butao13.addEventListener("mouseout",corOf);

    butao14.addEventListener("mousemove", cor);
    butao14.addEventListener("mouseout",corOf);

    butao15.addEventListener("mousemove", cor);
    butao15.addEventListener("mouseout",corOf);

    butao16.addEventListener("mousemove", cor);
    butao16.addEventListener("mouseout",corOf);

    butao17.addEventListener("mousemove", cor);
    butao17.addEventListener("mouseout",corOf);

    butao18.addEventListener("mousemove", cor);
    butao18.addEventListener("mouseout",corOf);

    butao19.addEventListener("mousemove", cor);
    butao19.addEventListener("mouseout",corOf);



}

function ocultar() {

    let h = document.getElementById("h1");
    h.style.display = "none";


}

function visivel() {

    let h = document.getElementById("h1");
    h.style.display = "block";

}

function limpar() {

    let h = document.getElementById("h1");
    h.innerHTML = "";


}

function cor(){

    this.style.backgroundColor = "red"

}

function corOf(){

    this.style.backgroundColor = "rgb(170, 0, 0)";

}


function cor1(){

    let h = document.getElementById("h1");

    h.style.color = "red";
}

function cor2(){

    let h = document.getElementById("h1");

    h.style.color = "yellow";

}

function cor3(){

    let h = document.getElementById("h1");

    h.style.color = "green";

}

function cor4(){

    let h = document.getElementById("h1");

    h.style.color = "yellowgreen";

}

function cor5(){

    let h = document.getElementById("h1");

    h.style.color = "white";

}

function cor6(){

    let h = document.getElementById("h1");

    h.style.color = "BlueViolet";

}

function cor7(){

    let h = document.getElementById("h1");

    h.style.color = "Violet";

}

function cor8(){

    let h = document.getElementById("h1");

    h.style.color = "Gold";

}

function cor9(){

    let h = document.getElementById("h1");

    h.style.color = "DarkOrange";


}

function cor10(){

    let h = document.getElementById("h1");

    h.style.color = "PowderBlue";

}

function redefinir(){

    let h = document.getElementById("h1");

    h.style.color = "black";

}




function fontP(){

    let h = document.getElementById("h1");
    h.style.fontSize = "10px";

}

function fontM(){

    let h = document.getElementById("h1");
    h.style.fontSize = "20px";

}

function fontG(){

    let h = document.getElementById("h1");
    h.style.fontSize = "40px";

}

function redefinirFONT(){

    let h = document.getElementById("h1");
    h.style.fontSize = "1.1em";


}

function MAIUSCULO(){

    let h = document.getElementById("h1");

    h.style.textTransform = "UpperCase";

}


function minusculo(){

    let h = document.getElementById("h1");

    h.style.textTransform = "lowercase";

}

function EspaçoL(){

    let h = document.getElementById("h1");

    h.style.letterSpacing = "5px";

}

function EspaçoL2(){

    let h = document.getElementById("h1");

    h.style.letterSpacing = "10px";


}

function SemEspaço(){

    let h = document.getElementById("h1");

    h.style.letterSpacing = "0px";

}

function MudarFont1(){


    let h = document.getElementById("h1");

    h.style.fontFamily = " Impact";

}

function MudarFont2(){

    let h = document.getElementById("h1");

    h.style.fontFamily = " monospace";

}

function MudarFont3(){

    let h = document.getElementById("h1");

    h.style.fontFamily = " apple-system";

}

function MudarFont4(){

    let h = document.getElementById("h1");

    h.style.fontFamily = " Georgia, Times";

}

function MudarFont5(){

    let h = document.getElementById("h1");

    h.style.fontFamily = "  unset";

}

function MudarFont6(){

    let h = document.getElementById("h1");

    h.style.fontFamily = " Times";


}

function FontPadrao(){

    let h = document.getElementById("h1");

    h.style.fontFamily = " Arial, Helvetica, sans-serif";

}