// make the request to the login endpoint
function getRegister(e) {
  e.preventDefault();

  var loginUrl = "/register";
  var xhr = new XMLHttpRequest();
  var nombreElement = document.getElementById("nombre");
  var direccionElement = document.getElementById("direccion");
  var passwordElement = document.getElementById("password");
  var user = nombreElement.value;
  var direccion = direccionElement.value;
  var password = passwordElement.value;

  xhr.open("POST", loginUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.addEventListener("load", function () {
    if(xhr.status == 200) {
      let token = xhr.getResponseHeader("x-auth-token");
      let responseObject = JSON.parse(this.response);
      console.log(responseObject);
      if(!responseObject.error) {
        console.log(token);
        if(token) localStorage.setItem("token", token);
        location.href = '/'
      }
      else {
        console.log('Error de Register')
        location.href = '/register-error'
      }
    }
    nombreElement.value = '';
    direccionElement.value = '';
    passwordElement.value = '';
  });

  var sendObject = JSON.stringify({
    nombre: user,
    direccion: direccion,
    password: password,
  });
  xhr.send(sendObject);
}

function getLogin(e) {
  e.preventDefault();

  var loginUrl = "/login";
  var xhr = new XMLHttpRequest();
  var nombreElement = document.getElementById("nombre");
  var passwordElement = document.getElementById("password");
  var user = nombreElement.value;
  var password = passwordElement.value;

  xhr.open("POST", loginUrl, true);
  xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
  xhr.addEventListener("load", function () {
    if(xhr.status == 200) {
      let token = xhr.getResponseHeader("x-auth-token");
      let responseObject = JSON.parse(this.response);
      console.log(responseObject);
      if(!responseObject.error) {
        console.log(token);
        if(token) localStorage.setItem("token", token);
        location.href = '/'
      }
      else {
        console.log('Error de login')
        location.href = '/login-error'
      }
    }
    nombreElement.value = '';
    passwordElement.value = '';
  });

  var sendObject = JSON.stringify({ nombre: user, password: password });
  xhr.send(sendObject);
}

function logOut() {
  localStorage.removeItem("token");
}

function cargarPagina(recurso, token) {
  //console.log(recurso)

  let xhr = new XMLHttpRequest
  xhr.open('get', recurso)
  if(token) xhr.setRequestHeader("x-access-token", token);
  xhr.addEventListener('load', () => {
    if(xhr.status == 200) {
      let contenido = xhr.response
      //console.log(contenido)
      try {
        let error = JSON.parse(contenido)
        console.log(error)
        localStorage.removeItem('token')
        location.href = '/token-error'
      }
      catch {
        document.querySelector('main').innerHTML = contenido
      }
    }
  })
  xhr.send()
}

function cargarPlantilla(plantilla) {
  let token = localStorage.getItem('token')
  if(token) {
    console.log('Hay token')
    cargarPagina('/datos',token)
  }
  else {
    console.log('NO Hay token')
    cargarPagina('f'+plantilla+ '.html')
  }
} 

function logout() {
  localStorage.removeItem('token')
  location.href='/logout'
}

