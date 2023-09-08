const logado = localStorage.getItem("tokenlogin");
const homeLogin = "./../../index.html";
const homePage = "./assets/pages/home.html";

// Verifica se o usuario ta logado no sistema redireciona para pagina inicial de login
if (!logado) {
  // alert("VOCÊ NÃO ESTA LOGADO NO SISTEMA");
  document.body.style.display = "none";
  window.location.replace(homeLogin);
}

// Função que desloga o usuario estiver logado e caso tenha token no local store 
function deslogar() {
  if (logado) {
    localStorage.removeItem("tokenlogin");
    window.location.replace(homeLogin);
  }
}

