$(document).ready(function () {
    var Projects = {
        atividade1_1: {
            name: 'Atividade 1 | Questão 1',
            img: '../img/projects/ativ1-1.jpeg',
            description: 'Primeira atividade para a prática do HTML/CSS | Questão 1',
            pag: '../projects/Atividade01/Questao01/index.html'
        },
        atividade1_2: {
            name: 'Atividade 1 | Questão 2',
            img: '../img/projects/ativ1-2.jpeg',
            description: 'Primeira atividade para a prática do HTML/CSS | Questão 2',
            pag: '../projects/Atividade01/Questao02/index.html'
        },
        atividade1_3: {
            name: 'Atividade 1 | Questão 3',
            img: '../img/projects/ativ1-3.jpeg',
            description: 'Primeira atividade para a prática do HTML/CSS | Questão 3',
            pag: '../projects/Atividade01/Questao03/index.html'
        },
        atividade1_4: {
            name: 'Atividade 1 | Questão 4',
            img: '../img/projects/ativ1-4.jpeg',
            description: 'Primeira atividade para a prática do HTML/CSS | Questão 4',
            pag: '../projects/Atividade01/Questao04/index.html'
        },
        atividade1_5: {
            name: 'Atividade 1 | Questão 5',
            img: '../img/projects/ativ1-5.jpeg',
            description: 'Primeira atividade para a prática do HTML/CSS | Questão 5',
            pag: '../projects/Atividade01/Questao05/index.html'
        },
        atividade2_1: {
            name: 'Atividade 2 | Questão 1',
            img: '../img/projects/ativ2-1.jpeg',
            description: 'Segunda atividade para a prática do HTML/CSS | Questão 1',
            pag: '../projects/Atividade02/q1/index.html'
        },
        atividade2_2: {
            name: 'Atividade 2 | Questão 2',
            img: '../img/projects/ativ2-2.jpeg',
            description: 'Segunda atividade para a prática do HTML/CSS | Questão 2',
            pag: '../projects/Atividade02/q2/index.html'
        },
        atividade2_3: {
            name: 'Atividade 2 | Questão 3',
            img: '../img/projects/ativ2-3.jpeg',
            description: 'Segunda atividade para a prática do HTML/CSS | Questão 3',
            pag: '../projects/Atividade02/q3/index.html'
        },
        atividade2_4: {
            name: 'Atividade 2 | Questão 4',
            img: '../img/projects/ativ2-4.jpeg',
            description: 'Segunda atividade para a prática do HTML/CSS | Questão 4',
            pag: '../projects/Atividade02/q4/index.html'
        },
        atv2_1_1: {
            name: 'Reconstruindo modelos(HTML/CSS) | Modelo 1',
            img: '../img/projects/atv-2.1-1.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre HTML e CSS',
            pag: '../projects/2.1/modelo 01/index.html'
        },
        atv2_1_2: {
            name: 'Reconstruindo modelos(HTML/CSS) | Modelo 2',
            img: '../img/projects/atv-2.1-2.jpg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre HTML e CSS',
            pag: '../projects/2.1/modelo 02/index.html'
        },
        atv2_1_3: {
            name: 'Reconstruindo modelos(HTML/CSS) | Modelo 3',
            img: '../img/projects/atv-2.1-3.jpg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre HTML e CSS',
            pag: '../projects/2.1/modelo 03/index.html'
        },
        atv2_1_5: {
            name: 'Reconstruindo modelos(HTML/CSS) | Modelo 5',
            img: '../img/projects/atv-2.1-5.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre HTML e CSS',
            pag: '../projects/2.1/modelo 05/index.html'
        },
        atv2_3_1: {
            name: 'Praticando JS | Questão 1',
            img: '../img/projects/atv-2.3-1.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript | Questão 1',
            pag: '../projects/2.3/q1/index.html'
        },
        atv2_3_2: {
            name: 'Praticando JS | Questão 2',
            img: '../img/projects/atv-2.3-2.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript | Questão 2',
            pag: '../projects/2.3/q2/index.html'
        },
        atv2_3_3: {
            name: 'Praticando JS | Questão 3',
            img: '../img/projects/atv-2.3-3.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript | Questão 3',
            pag: '../projects/2.3/q3/index.html'
        },
        atv2_3_4: {
            name: 'Praticando JS | Questão 4',
            img: '../img/projects/atv-2.3-4.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript | Questão 4',
            pag: '../projects/2.3/q4/index.html'
        },
        atv2_3_5: {
            name: 'Praticando JS | Questão 5',
            img: '../img/projects/atv-2.3-5.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript | Questão 5',
            pag: '../projects/2.3/q5/index.html'
        },
        atv2_4_1: {
            name: "Aprendendo JS | Questão 1",
            img: '../img/projects/atv-2.4.jpeg',
            description: 'Atividade para por em pratica os novos conhecimentos de JavaScript | Questão 1',
            pag: '../projects/2.4/q1.html'
        },
        atv2_4_2: {
            name: "Aprendendo JS | Questão 2",
            img: '../img/projects/atv-2.4.jpeg',
            description: 'Atividade para por em pratica os novos conhecimentos de JavaScript | Questão 2',
            pag: '../projects/2.4/q2.html'
        },
        atv2_4_3: {
            name: "Aprendendo JS | Questão 3",
            img: '../img/projects/atv-2.4.jpeg',
            description: 'Atividade para por em pratica os novos conhecimentos de JavaScript | Questão 3',
            pag: '../projects/2.4/q3.html'
        },
        atv2_4_4: {
            name: "Aprendendo JS | Questão 4",
            img: '../img/projects/atv-2.4.jpeg',
            description: 'Atividade para por em pratica os novos conhecimentos de JavaScript | Questão 4',
            pag: '../projects/2.4/q4.html'
        },
        atv2_4_5: {
            name: "Aprendendo JS | Questão 5",
            img: '../img/projects/atv-2.4.jpeg',
            description: 'Atividade para por em pratica os novos conhecimentos de JavaScript | Questão 5',
            pag: '../projects/2.4/q5.html'
        },
        atv3_1: {
            name: 'Aprendendo jQuery',
            img: '../img/projects/atv-3.1.jpeg',
            description: 'Atividade para fixação dos conhecimentos sobre jQuery'
        },
        atv3_2: {
            name: 'Jogo da Velha',
            img: '../img/projects/atv-3.2.jpeg',
            description: 'Recriação de um jogo da velha a partir dos novos conhecimentos de jQuery',
            pag: '../projects/3.2/index.html'
        },
        amazonCopy: {
            name: 'Copia da Amazon',
            img: '../img/projects/amazon_copy.jpeg',
            description: 'Primeira avaliação envolvendo nossos conhecimentos sobre HTML e CSS',
            pag: '../projects/amazon/site1/index.html'
        }
    };
    var cont = 0, rows = '1fr';
    for (var project in Projects) {
        cont++;
        if (cont % 2 != 0 && cont > 1) {
            rows = rows + ' 1fr';
        }
    }
    $('#projects-conteiner').animate({ gridTemplateRows: rows });
    var i = 1;
    var _loop_1 = function (project) {
        var newProject = $('<div />').addClass('project').append($('<a />').attr('target', '__blank').attr('href', "".concat(Projects["".concat(project)].pag)).append($('<img />').attr('title', "".concat(Projects["".concat(project)].name)).attr('alt', "".concat(Projects["".concat(project)].name)).attr('src', "".concat(Projects["".concat(project)].img))));
        var details = $('<div />').attr('id', 'project__details').addClass('not-active').append($('<h3 />').text("".concat(Projects["".concat(project)].name))).append($('<p />').text("".concat(Projects["".concat(project)].description)));
        $('#projects-conteiner').append(newProject.append(details));
        newProject.on('mouseover', function () {
            details.removeClass('not-active');
            details.addClass('active');
        });
        newProject.on('mouseleave', function () {
            details.removeClass('active');
            details.addClass('not-active');
        });
        i++;
    };
    for (var project in Projects) {
        _loop_1(project);
    }
});
