async function checar(){
  checkInputs();
}

var form = document.getElementById('form');
var pais = document.getElementById("pais");
var cep = document.getElementById('cep');
var estado = document.getElementById('estado');
var cidade = document.getElementById('cidade');
var bairro = document.getElementById('bairro');
var logradouro = document.getElementById('logradouro');
var numero = document.getElementById('numero');

function checkInputs() {
  var paisValue = pais.value;
  var cepValue = cep.value;
  var estadoValue = estado.value;
  var cidadeValue = cidade.value;
  var bairroValue = bairro.value;
  var logradouroValue = logradouro.value;
  var numeroValue = numero.value;

  if (paisValue === '') {
    setErrorFor(pais);
  } else {
    setOkFor(pais);
  }

  if (cepValue === '') {
    setErrorFor(cep);
  } else {
    setOkFor(cep);
  }

  if (estadoValue === '') {
    setErrorFor(estado);
  } else {
    setOkFor(estado);
  }

  if (cidadeValue === '') {
    setErrorFor(cidade);
  } else {
    setOkFor(cidade);
  }

  if (bairroValue === '') {
    setErrorFor(bairro);
  } else {
    setOkFor(bairro);
  }

  if (logradouroValue === '') {
    setErrorFor(logradouro);
  } else {
    setOkFor(logradouro);
  }

  if (numeroValue === '') {
    setErrorFor(numero);
  } else {
    setOkFor(numero);
  }

  if (paisValue != '' && cepValue != '' && estadoValue != '' && cidadeValue != '' && bairroValue != '' && logradouroValue != '' && numeroValue != '') {
    alert("Formulário enviado");
  }
    
}
  
function setErrorFor(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control error"
}

function setOkFor(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control ok"
}