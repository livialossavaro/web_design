let contador = 0;

document.getElementById("Botao").onclick = () => {
    contador ++;
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.getElementById("toast");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = `Voce clicou ${contador}`;
    toast.classList.add("show");
}