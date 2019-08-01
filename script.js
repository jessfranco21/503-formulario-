let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let confirmarEmail = document.querySelector("#confirmarEmail");
let password = document.querySelector("#senha");
let botao = document.querySelector("button");
let sexo = document.querySelector("select");
let texto = document.querySelector("h3");
//let h1 = document.querySelector("h1");
//let limpar = document.querySelector("#Limpar")

if(email.value == confirmarEmail){
    
}

function cadastrar(){
    localStorage.setItem("nome", nome.value);
    localStorage.setItem("email", email.value); 
    localStorage.setItem("confirmarEmail", confirmarEmail.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("sexo", sexo.value);

    if(email.value != "" && email.value === confirmarEmail.value){
        console.log("funcionou");
        texto.innerHTML = ("");
    }
    else{
        texto.innerHTML = ("Erro em seu Email ou Email incompleto");
        console.log("erro");
    }
}


botao.onclick = cadastrar;