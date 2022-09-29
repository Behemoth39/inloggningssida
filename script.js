//Objekt som innehåller alla deklarationer som ska användas på flera ställen
const app = {
  welcome: document.getElementById("wel-msg"),
  login: document.getElementById("log-in"),
  logout: document.getElementById("log-out"),
  username: document.getElementById("user"),
  password: document.getElementById("pass"),
  againBtn: document.getElementById("again-btn"),
  loginBtn: document.getElementById("login-btn"),
  loginForm: document.getElementById("login-form"),
  loginMenu: document.getElementById("login-menu"),
  loginH1: document.getElementById("log-h1"),
  errorMsgUser: document.getElementById("error-msg-login"),
  userLogged: localStorage.getItem("userLogged"),
};

//Rensar text i användarnamn och lösenords rutorna
function clearForm() {
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

//Visar felmeddelande och tillbaka knappen istället för login menyn
function errorMsg() {
  app.loginBtn.classList.add("hidden");
  app.username.classList.add("hidden");
  app.password.classList.add("hidden");
  app.againBtn.classList.add("hidden");
  app.loginH1.classList.add("hidden");
  app.againBtn.classList.remove("hidden");
  app.errorMsgUser.classList.remove("hidden");
}

//Återställer ändringar som funktionen ovan gjort
function removeErrorMsg() {
  app.loginBtn.classList.remove("hidden");
  app.username.classList.remove("hidden");
  app.password.classList.remove("hidden");
  app.againBtn.classList.remove("hidden");
  app.loginH1.classList.remove("hidden");
  app.againBtn.classList.add("hidden");
  app.errorMsgUser.classList.add("hidden");
}

//Vid lyckad inloggning tar den bort login menyn och skriver ut ett textstycke
function removeLoginMenu() {
  app.loginMenu.classList.add("hidden");
  app.login.classList.add("hidden");
  app.logout.classList.remove("hidden");
  app.welcome.textContent += "Välkommen, du är nu inloggad!";
}

//Återställer ändringar som funktion ovan gjort
function addLoginMenu() {
  app.login.classList.remove("hidden");
  app.logout.classList.add("hidden");
  app.welcome.textContent = null;
}

//Öppnar och stänger login menyn från bannern (Logga in)
document.getElementById("log-in").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.toggle("hidden");
});

//Stänger login menyn
document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.add("hidden");
});

/*Kontrollerar om man tryckt på "LOGGA IN" och vid rätt lösen och namn loggar in användaren
  Samt loggar användaren i lokala minnet och kör funktionen för att ta bort login menyn
  Alternativt vid fel login körs funktionen för felmeddelande*/
document.getElementById("login-btn").addEventListener("click", (e) => {
  e.preventDefault;
  let username = app.loginForm.user.value;
  let password = app.loginForm.pass.value;

  if (username == "Sara" && password == "qwe123") {
    localStorage.setItem("userLogged", "true");
    removeLoginMenu();
  } else {
    errorMsg();
  }
});

/*kontrollerar ifall det finns en användare inloggad i minnet (se ovan)
  Ifall det finns något loggat så kört funktionen för att ta bort login menyn
  Finns det inget loggat så körs funktionen för att kunna visa login menyn*/
if (app.userLogged) {
  removeLoginMenu();
} else {
  addLoginMenu();
}

/*Kontrollerar om man tryckt på "FÖRSÖK IGEN" och kör funktionerna för att
  ta bort felmeddelande och rensa lösenord och användarnamn fälten*/
document.getElementById("again-btn").addEventListener("click", (e) => {
  e.preventDefault;
  removeErrorMsg();
  clearForm();
});

/*Kontrollerar om man tryckt på "logga ut" och kör funktionerna
  för att kunna visa login menyn och  rensa lösenord och användarnamn fälten
  samt rensar användaren från minnet*/
document.getElementById("log-out").addEventListener("click", (e) => {
  e.preventDefault;
  addLoginMenu();
  clearForm();
  localStorage.clear();
});
