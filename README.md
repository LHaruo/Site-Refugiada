# Avaliação B2 - Construção de Software para Web - Aplicativo de acolhimento de Refugiados
#### Aluno: Lucas Haruo Kikudome
#### Professor: Ricardo Mendes Costa Segundo
#### Turma: CC1M
---
## O Trabalho
Este repositório foi criado com o intuito de desenvolver um protótipo funcional em HTML5 de um "Aplicativo de acolhimento de Refugiados" que utilizasse apenas HTML, CSS e JS. Este projeto foi feito com base em trabalhos prévios realizados durante as aulas de *Experiência e Interface com o Usuário*. Nestes trabalhos, foram produzidos os materiais necessários para a montagem de um site.
## A Tela Realizada
Dentre os trabalhos produzidos durantes as aulas de *Experiência e Interface com o Usuário*, foi feito no Figma um projeto com as telas de um site de uma ONG Fictícia e dentre as telas feitas neste projeto, eu escolhi a tela na parte de cadastro referente as informações de Endereço.
![imagens/Tela Escolhida.jpg](https://github.com/LHaruo/Site-Refugiada/blob/main/imagens/Tela%20Escolhida.jpg)
## Explicação do JavaScript Utilizado
As principais funções utilizadas foram as:
* function
* var
* if
---
### As funções criadas foram:
```js
async function checar(){
  checkInputs();
```
A função checar() foi atribuída ao botão para que ele possa checar os dados dentro do formulário, para isso foi necessário criar a função checkInputs()
```js
function checkInputs() {
  var paisValue = pais.value;
  var cepValue = cep.value;
  var estadoValue = estado.value;
  var cidadeValue = cidade.value;
  var bairroValue = bairro.value;
  var logradouroValue = logradouro.value;
  var numeroValue = numero.value;
```
Essa função checa os valores dentro dos campos do formulário, mas para isso era necessário estabelecer as var
```js
var form = document.getElementById('form');
var pais = document.getElementById("pais");
var cep = document.getElementById('cep');
var estado = document.getElementById('estado');
var cidade = document.getElementById('cidade');
var bairro = document.getElementById('bairro');
var logradouro = document.getElementById('logradouro');
var numero = document.getElementById('numero');
```
Ao ter esses parâmetros estabelecidos, foi possível estabelecer as condições que iriam alterar os dados
```js
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
}
```
As funções if estabelecem para todas as varValue que se o campo do formulário esteja vazio ela ira será denominada como um erro, visto que todos os campos são obrigatórios, caso contrário, ela estará Ok.
```js
function setErrorFor(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control error"
}

function setOkFor(input) {
  var formControl = input.parentElement;
  formControl.className = "form-control ok"
}
```
Para isso essas duas funções foram criadas, para poderem alterar o input
```js
  if (paisValue != '' && cepValue != '' && estadoValue != '' && cidadeValue != '' && bairroValue != '' && logradouroValue != '' && numeroValue != '') {
    alert("Formulário enviado");
  }
```
Por fim, caso todas as varValue atendam as condições para estarem Ok, um aviso irá aparecer na tela do usuário dizendo que o formulário foi enviado.
