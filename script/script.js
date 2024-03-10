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