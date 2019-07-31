let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmarEmail = document.querySelector("#confirmarEmail");
let password = document.querySelector("#senha");
let botao = document.querySelector("button");



    function cadastrar(){
        localStorage.setItem("nome", nome.value);
        localStorage.setItem("email", email.value); 
        localStorage.setItem("confirmarEmail", confirmarEmail.value);
        localStorage.setItem("password", password.value);
        
    }

botao.onclick= cadastrar;