const form = document.getElementById("loginForm");
const message = document.getElementById("message");

// Regex corrigidas (SEM barras invertidas duplicadas)
const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;
// 8+ caracteres, 1 maiúscula, 1 número, 1 caractere especial
const passRegex  = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!emailRegex.test(email)) {
    message.textContent = "E-mail inválido.";
    message.className = "message error";
    return;
  }

  if (!passRegex.test(password)) {
    message.textContent = "Senha fraca. Use 8+ caracteres, 1 maiúscula, 1 número e 1 símbolo.";
    message.className = "message error";
    return;
  }

  message.textContent = "Login válido. Redirecionando...";
  message.className = "message success";

  // Redireciona para o portfólio (ajuste o caminho se necessário)
  setTimeout(() => {
    window.location.href = "./catalogo/catalogo.html";
  }, 800);
});