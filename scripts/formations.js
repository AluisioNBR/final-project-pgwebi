$(document).ready(function () {
    var Formations = {
        rocketseat: {
            local: 'Rocketseat',
            date: '01/2021-06/2021',
            course: 'Discover',
            description: "Discover \u00E9 um programa da Rocketseat com o fim de introduzir, de forma gratuita, o universo da programa\u00E7\u00E3o. Nele existem diversos cursos, que mostram desde o b\u00E1sico da web, at\u00E9 a introdu\u00E7\u00E3o dos principais conceitos da programa\u00E7\u00E3o web. Foi nele onde eu consolidei todos os conceitos j\u00E1 aprendidos e me aperfei\u00E7oei."
        },
        ifal: {
            local: 'IFAL - Campus Viçosa',
            date: '03/2019-',
            course: 'Informática para Internet',
            description: "Durante meu ensino m\u00E9dio, gra\u00E7as ao IFAL, fui introduzido \u00E0 programa\u00E7\u00E3o, a partir disso comecei minha jornada aprendendo os conceitos iniciais de programa\u00E7\u00E3o, programa\u00E7\u00E3o orientada a objetos, banco de dados e etc."
        }
    };
    for (var formation in Formations) {
        var newFormation = $('<div />').addClass('formation');
        var location_1 = $('<div />').attr('id', "formation__location").append($('<h3 />').text("" + Formations["" + formation].local)).append($('<p />').text("" + Formations["" + formation].date));
        var description = $('<div />').attr('id', "formation__description").append($('<h3 />').text("" + Formations["" + formation].course)).append($('<p />').text("" + Formations["" + formation].description));
        $('#formations__conteiner').append(newFormation.append(location_1).append(description));
    }
});
