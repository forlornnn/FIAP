const form = document.getElementById('form-contato');
const telefone = document.getElementById('telefone');
const mensagem = document.getElementById('mensagem');
const contador = document.getElementById('contador');
const sucesso = document.getElementById('sucesso');

// Máscara do telefone: (42) 99999-9999
telefone.addEventListener('input', () => {
  let n = telefone.value.replace(/\D/g, '').slice(0, 11);
  if (n.length > 10) n = n.replace(/^(\d{2})(\d{5})(\d{4}).*/, '($1) $2-$3');
  else if (n.length > 6) n = n.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  else if (n.length > 2) n = n.replace(/^(\d{2})(\d{0,5}).*/, '($1) $2');
  else if (n.length > 0) n = n.replace(/^(\d{0,2}).*/, '($1');
  telefone.value = n;
});

// Contador de caracteres da mensagem
mensagem.addEventListener('input', () => {
  contador.textContent = mensagem.value.length + '/500';
});

// Validação ao enviar (regras HTML5 + mensagens do Bootstrap)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  sucesso.hidden = true;
  if (!form.checkValidity()) {
    form.classList.add('was-validated');
    form.querySelector(':invalid').focus();
    return;
  }
  form.reset();
  form.classList.remove('was-validated');
  contador.textContent = '0/500';
  sucesso.hidden = false;
  sucesso.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
