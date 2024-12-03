document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll("header nav a");
    menuLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Botão "Voltar ao Topo"
    const backToTopButton = document.createElement("button");
    backToTopButton.textContent = "↑ Topo";
    backToTopButton.classList.add("back-to-top");
    document.body.appendChild(backToTopButton);

    // Mostrar/esconder botão ao rolar a página
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });

    // Ação de voltar ao topo
    backToTopButton.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Mensagem interativa no rodapé
    const footer = document.querySelector("footer");
    const footerMessage = document.createElement("p");
    footerMessage.textContent = "Obrigado por visitar o Blog do André!";
    footerMessage.style.fontStyle = "italic";
    footer.appendChild(footerMessage);

    // Alteração de cor do rodapé ao clicar
    footer.addEventListener("click", function () {
        footer.style.backgroundColor =
            footer.style.backgroundColor === "rgb(130, 10, 209)" ? "#333" : "#820ad1";
    });
});
