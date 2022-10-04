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

function clearForm() {
  app.loginForm.user.value = null;
  app.loginForm.pass.value = null;
}

function errorMsg() {
  app.loginBtn.classList.add("hidden");
  app.username.classList.add("hidden");
  app.password.classList.add("hidden");
  app.againBtn.classList.add("hidden");
  app.loginH1.classList.add("hidden");
  app.againBtn.classList.remove("hidden");
  app.errorMsgUser.classList.remove("hidden");
}

function removeErrorMsg() {
  app.loginBtn.classList.remove("hidden");
  app.username.classList.remove("hidden");
  app.password.classList.remove("hidden");
  app.againBtn.classList.remove("hidden");
  app.loginH1.classList.remove("hidden");
  app.againBtn.classList.add("hidden");
  app.errorMsgUser.classList.add("hidden");
}

function removeLoginMenu() {
  app.loginMenu.classList.add("hidden");
  app.login.classList.add("hidden");
  app.logout.classList.remove("hidden");
  app.welcome.textContent += "Välkommen, du är nu inloggad!";
}

function addLoginMenu() {
  app.login.classList.remove("hidden");
  app.logout.classList.add("hidden");
  app.welcome.textContent = null;
}

document.getElementById("log-in").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.toggle("hidden");
});

document.getElementById("closebtn").addEventListener("click", (e) => {
  e.preventDefault;
  app.loginMenu.classList.add("hidden");
});

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

if (app.userLogged) {
  removeLoginMenu();
} else {
  addLoginMenu();
}

document.getElementById("again-btn").addEventListener("click", (e) => {
  e.preventDefault;
  removeErrorMsg();
  clearForm();
});

document.getElementById("log-out").addEventListener("click", (e) => {
  e.preventDefault;
  addLoginMenu();
  clearForm();
  localStorage.clear();
});
