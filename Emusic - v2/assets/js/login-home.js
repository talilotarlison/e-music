
// Redirecionamento  do usuario para pagina inicial caso logado no sistema
const logado = localStorage.getItem("tokenlogin");
const homeLogin = "./../../index.html";
const homePage = "./assets/pages/home.html";

// Verifica se usario esta logado e redireciona para pagina inical
if (logado) {
  document.body.style.display = "none";
  window.location.replace(homePage);
}

