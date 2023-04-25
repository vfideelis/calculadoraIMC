var altura;
var peso;
var imc;
var resultado;


function calcular(event){
    event.preventDefault();

    peso= parseFloat(document.getElementById("peso").value);
    altura = parseFloat(document.getElementById("altura").value);

   imc= peso / (altura * altura);
 
   resultado = document.getElementById("resultado");

   //console.log(imc);
   
   if(imc < 17){
    resultado.innerHTML = "<br/> Seu resultado foi: " + imc.toFixed(2) + "<br/> Cuidado você está muito abaixo do peso!";
   }else if (imc > 17 && imc <= 18.49){
    resultado.innerHTML = "<br/> Seu resulatdo foi: " +imc.toFixed(2)+ "<br/> Abaixo do peso!"; 
 }else if(imc > 18.5 && imc <= 24.99){
    resultado.innerHTML = "<br/> Seu resultado foi : " +imc.toFixed(2)+ "<br/> Você está no peso ideal!"
 }else if (imc > 25 && imc <= 29.99){
    resultado.innerHTML = "<br/> Seu resultado foi: "+imc.toFixed(2)+ "<br/> Você está com sobrepeso!"
 }else if (imc > 30 && imc <= 34.99){
    resultado.innerHTML ="<br/> Seu resultado foi: "+imc.toFixed(2)+ "<br/> CUIDADO, obesidade grau I!"
 }else if(imc > 35 && imc <= 39.99){
    resultado.innerHTML = "<br/> Seu resultado foi: "+imc.toFixed(2)+ "<br/> CUIDADO, obesidade II!"
 }else if(imc >40){
    document.innerHTML = "<br/> Seu resultado foi: "+imc.toFixed(2)+ "<br/> CUIDADO, obesidade III!"
 }

 document.getElementById("peso").value = "";
 document.getElementById("altura").value = "";
 
}