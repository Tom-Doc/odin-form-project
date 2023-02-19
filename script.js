let password = document.getElementById('password');
let confirmPassword = document.getElementById('confirm-password');
let matchMessage = document.getElementById('match-message');

function checkPassword() {
  const passwordsMatch = password.value === confirmPassword.value;
  if (passwordsMatch) {
    matchMessage.innerText = 'Passwords match';
    matchMessage.style.color = "#2ecc71";
  } else {
    matchMessage.innerText = 'Passwords do not match';
    matchMessage.style.color = "#e74c3c";
  }
}



confirmPassword.addEventListener('keyup', checkPassword);

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  checkPassword();
  if (password.value !== confirmPassword.value) {
    event.preventDefault();
  }
});