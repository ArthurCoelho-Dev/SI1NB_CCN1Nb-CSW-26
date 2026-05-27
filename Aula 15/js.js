document.getElementById('calc').addEventListener('click', () => {
  const input = document.getElementById('ano');
  const result = document.getElementById('result');
  const ano = parseInt(input.value, 10);
  const now = new Date();
  const currentano = now.getFullano();
  const age = currentano - ano;
  result.textContent = 'Idade: ' + age + ' anos';
});
    