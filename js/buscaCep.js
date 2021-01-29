const inputCep = document.getElementById('input-cep');
const btnCep = document.getElementById('buscarCep');
//======================BUSCA CEP==========================//
btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep)
}

function buscaCep(cep) {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(r => r.json())
    .then(dadosCep => {
      if(!dadosCep.cep) {
        return alert('CEP não encontrado, verifique novamente!');
      }
        document.querySelector('[data-cep]').innerText = dadosCep.cep;
        document.querySelector('[data-log]').innerText = dadosCep.logradouro;
        document.querySelector('[data-bairro]').innerText = dadosCep.bairro;
        document.querySelector('[data-local]').innerText = dadosCep.localidade;
        document.querySelector('[data-uf]').innerText = dadosCep.uf;
        document.querySelector('[data-ddd]').innerText = dadosCep.ddd;
    })
}

//=================COPIA ENDEREÇO=================//
function copiaEndereco() {
  var copyText = document.getElementById('dadosCep');
  copyText.select();
  copyText.setSelectionRange(0, 99999)
  document.execCommand('copy');
  alert('Endereço copiado... ' + copyText.value);
}

//======================LIMPA CEP==========================//
function limpaCep() {
document.getElementById('input-cep').value = '';
document.getElementsById('dcep').value = '';
}

//=================CONFIG TECLAS=================//
var input = document.getElementById('input-cep');
input.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
  const cep = inputCep.value;
  buscaCep(cep)
  } else {
    if (event.keyCode === 46) {
    const cep = inputCep.value;
    limpaCep()
        }
    }
})