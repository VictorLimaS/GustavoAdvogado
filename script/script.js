const linkBotaoFgts = document.getElementById('botao_fgts');
const linkBotaoSalario = document.getElementById('botao_salario');
const linkBotaoTrabalhos = document.querySelectorAll('#botao_trabalhos');




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


document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("header nav ul li a");
  
    links.forEach(link => {
      link.addEventListener("click", function(event) {
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



  document.addEventListener("DOMContentLoaded", function() {
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