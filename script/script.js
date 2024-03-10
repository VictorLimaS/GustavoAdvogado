// DIRECIONANDO A OS LINKS COM OS BOTOES

const linkBotaoFgts = document.getElementById('botao_fgts');
const linkBotaoSalario = document.getElementById('botao_salario');
const linkBotaoSocilInsta = document.getElementById('social1');
const linkBotaoSocialWhats = document.getElementById('social2');
const linkBotaoTrabalhos = document.querySelectorAll('#botao_trabalhos');

linkBotaoSocilInsta.addEventListener('click', function () {
    window.open('https://www.instagram.com/advgusttavonogueira/', '_blank')
});

linkBotaoSocialWhats.addEventListener('click', function () {
    window.open('https://w.app/c4S3QE', '_blank')
});

linkBotaoFgts.addEventListener('click', function () {
    window.open('https://www.jusbrasil.com.br/artigos/multa-dos-40-do-fgts-no-contrato-de-trabalho-temporario/2133490920', '_blank')
});

linkBotaoSalario.addEventListener('click', function () {
    window.open('https://www.jusbrasil.com.br/artigos/consequencias-pelo-traso-no-pagamento-do-salario/2130555285?_gl=1*1yzo4ba*_ga*MzYxNzg5NTM1LjE3MDk0MjU5MDk.*_ga_QCSXBQ8XPZ*MTcxMDAyMzY5MC4zLjEuMTcxMDAyNDkwMC4xMS4wLjA.', '_blank')
});

linkBotaoTrabalhos.forEach(botao => {
    botao.addEventListener('click', function () {
        window.open('https://w.app/c4S3QE', '_blank')
    });
});

// SCROLL LENTO ATE A SECTION

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("header nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});

// LI FICAREM SELECIONADA COM O HOVER

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("header nav ul li a");

    function highlightNavItem() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (isInViewport) {
                const sectionId = section.getAttribute("id");
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", highlightNavItem);
});

// MENU hamburguer

const hamburguer = document.querySelector('.hamburguer');
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuItems = document.querySelectorAll('.menu-hamburguer li a');

// Evento de clique no ícone de hambúrguer
hamburguer.addEventListener('click', () => {
    menuHamburguer.style.display = 'block';
});

// Evento de clique em qualquer parte do menu de hambúrguer
menuHamburguer.addEventListener('click', (event) => {
    // Verifica se o clique ocorreu em um item do menu
    if (event.target.tagName === 'A') {
        // Remove a classe ativa de todos os itens do menu
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        // Adiciona a classe ativa apenas ao item clicado
        event.target.classList.add('active');
        // Fecha o menu de hambúrguer
        menuHamburguer.style.display = 'none';
    }
});
