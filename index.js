let elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function () {
        duvida.classList.toggle('ativa')
    })
})

// mostrar / esconder o botão "Subir ao Topo"
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.getElementById("subir-topo");

    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Rolagem suave até o topo
document.getElementById("subir-topo").addEventListener("click", function (e) {
    e.preventDefault();
    document.body.scrollTop = 0; // Para navegadores mais antigos
    document.documentElement.scrollTop = 0; // Para navegadores modernos
});
