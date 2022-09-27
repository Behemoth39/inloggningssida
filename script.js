const app = {
    loginForm: document.getElementById("login-form"),
    LoginMenu: document.getElementById("login-menu"),
    signIn: document.getElementById("login-btn-in"),
    signOut: document.getElementById("login-btn-out"),
    loginBtn: document.getElementById("login-btn-in"),
    signOutBtn: document.getElementById("login-btn-out"),      
    errorMsgUser: document.getElementById("error-msg-login"),   
    savedUsername: "Sara",    
    savedPassword: "qwe123"    
  };

  function clearForm(){
    app.loginForm.user.value = null;
    app.loginForm.pass.value = null;
  };

  function errorMsg() {
    app.errorMsgUser.classList.remove("error-msg");    
    clearForm();
  };

  function removeErrorMsg() {
    app.errorMsgUser.classList.add("error-msg");    
    clearForm();
  };
  
  function removeLoginMenu() {
    app.LoginMenu.classList.add("hidden");   
  };
  
  function addLoginMenu() {
    app.LoginMenu.classList.remove("hidden");       
  };
  
  document.getElementById("login-btn-in").addEventListener("click", (e) => {
    e.preventDefault;
    username = app.loginForm.user.value;
    password = app.loginForm.pass.value;
  // maybe make login button disappear when logged in?
    for (let i = 0; i < app.savedUsername.length; i++) {
      if (username == app.savedUsername && password == app.savedPassword) {
        removeErrorMsg()
        alert("Välkommen") 
        removeLoginMenu()       
        break         
      } else {
        errorMsg();      
      }
    }
  });
  
  document.getElementById("show-menu").addEventListener("click", (e) => {
    e.preventDefault;
    app.LoginMenu.classList.toggle("hidden")       
  });
  
  /* save locally instead
    
   localStorage.setItem('username'); //save in array 
   localStorage.setItem('password'); //save in array 
  let saveduser =  localStorage.setItem('username');
  let savedpass =  localStorage.setItem('password');
  localStorage.removeItem('password');
  localStorage.clear;
    
   */
  