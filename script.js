function subscribe() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    if (email) {
        message.textContent = "Obrigado por se cadastrar! Em breve, entraremos em contato.";
        message.style.color = "green";
        document.getElementById('email').value = "";
    } else {
        message.textContent = "Por favor, insira um e-mail válido.";
        message.style.color = "red";
    }
}
