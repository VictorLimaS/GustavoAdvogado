document.addEventListener("DOMContentLoaded", function() {
    const modal = document.querySelector('.modal');
    const closeButton = document.querySelector('.fa-x');

    function showModal() {
        modal.style.bottom = '1rem';
    }

    function hideModal() {
        modal.style.bottom = '-15rem';
    }

    setTimeout(showModal, 2000);

    closeButton.addEventListener('click', hideModal);

    const urls = [
        { id: 'botao_fgts', url: 'https://www.jusbrasil.com.br/artigos/multa-dos-40-do-fgts-no-contrato-de-trabalho-temporario/2133490920' },
        { id: 'botao_salario', url: 'https://www.jusbrasil.com.br/artigos/consequencias-pelo-traso-no-pagamento-do-salario/2130555285' },
        { id: 'social1', url: 'https://www.instagram.com/advgusttavonogueira/' },
        { id: 'social2', url: 'https://w.app/c4S3QE' },
        { id: 'conhecer_mais', url: 'https://w.app/c4S3QE' },
        { id: 'entrar_contato', url: 'https://w.app/c4S3QE' },
    ];

    urls.forEach(par => {
        const botao = document.getElementById(par.id);
        if (botao) {
            botao.addEventListener('click', function() {
                window.open(par.url, '_blank');
            });
        }
    });

    // Scroll suave até a seção
    const navLinks = document.querySelectorAll("header nav ul li");
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
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
