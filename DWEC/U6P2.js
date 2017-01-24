onload = function() {
  var formulario = document.forms[0];
  formulario.onsubmit = function() {

    if (window.localStorage != null) {
      localStorage.nombre = nombre.value;
      localStorage.apellidos = apellidos.value;
      if(H.checked) {
        localStorage.sexo = "H";
      } else if(M.checked) {
        localStorage.sexo = "M";
      } else {
        alert("Tu navegador no soporta WebStorage.")
      }
    }
    if (window.sessionStorage != null) {
      sessionStorage.color = color.value;
      sessionStorage.poblacion = poblacion.value;
      if (selector.value == "V") {
        sessionStorage.provincia = "Valencia";
      } else if (selector.value == "C") {
        sessionStorage.provincia = "Castellón";
      } else if (selector.value == "A") {
        sessionStorage.provincia = "Alicante";
      }
    } else {
      alert("Tu navegador no soporta WebStorage.")
    }

    if (foro.checked == true){
      formulario.action = "foros.html";
    } else if (eventos.checked == true) {
      formulario.action = "eventos.html";
    }
  }
}
