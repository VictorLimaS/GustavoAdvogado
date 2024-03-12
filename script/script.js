// DIRECIONANDO A OS LINKS COM OS BOTOES

const urls = [
    { id: 'botao_fgts', url: 'https://www.jusbrasil.com.br/artigos/multa-dos-40-do-fgts-no-contrato-de-trabalho-temporario/2133490920' },
    { id: 'botao_salario', url: 'https://www.jusbrasil.com.br/artigos/consequencias-pelo-traso-no-pagamento-do-salario/2130555285?_gl=1*1yzo4ba*_ga*MzYxNzg5NTM1LjE3MDk0MjU5MDk.*_ga_QCSXBQ8XPZ*MTcxMDAyMzY5MC4zLjEuMTcxMDAyNDkwMC4xMS4wLjA.' },
    { id: 'social1', url: 'https://www.instagram.com/advgusttavonogueira/' },
    { id: 'social2', url: 'https://w.app/c4S3QE' },
    { id: 'conhecer_mais', url: 'https://w.app/c4S3QE' },
    { id: 'entrar_contato', url: 'https://w.app/c4S3QE' },
];

urls.forEach(par => {
    const botao = document.getElementById(par.id);
    botao.addEventListener('click', function() {
        window.open(par.url, '_blank');
    });
});

const linkBotaoTrabalhos = document.querySelectorAll('#botao_trabalhos');
linkBotaoTrabalhos.forEach(botao => {
    botao.addEventListener('click', function() {
        window.open('https://w.app/c4S3QE', '_blank');
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

function setActiveMenuItem() {
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionId = section.getAttribute('id');

        const menuItem = document.querySelector(`nav a[href="#${sectionId}"]`);

        const sectionIsInView = section.getBoundingClientRect().top <= 50 && section.getBoundingClientRect().bottom >= 50;

        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('active');
        });

        if (sectionIsInView) {
            menuItem.classList.add('active');
        }
    });
}

window.addEventListener('load', setActiveMenuItem);
window.addEventListener('scroll', setActiveMenuItem);

// MENU hamburguer

const hamburguer = document.querySelector('.hamburguer');
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuItems = document.querySelectorAll('.menu-hamburguer li a');


hamburguer.addEventListener('click', () => {
    menuHamburguer.style.display = 'block';
});

menuHamburguer.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });
        event.target.classList.add('active');
        menuHamburguer.style.display = 'none';
    }
});
