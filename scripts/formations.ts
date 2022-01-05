$(document).ready(function(){
    const Formations = {
        rocketseat: {
            local: 'Rocketseat',
            date: '01/2021-06/2021',
            course: 'Discover',
            description: `Discover é um programa da Rocketseat com o fim de introduzir, de forma gratuita, o universo da programação. Nele existem diversos cursos, que mostram desde o básico da web, até a introdução dos principais conceitos da programação web. Foi nele onde eu consolidei todos os conceitos já aprendidos e me aperfeiçoei.`
        },

        ifal: {
            local: 'IFAL - Campus Viçosa',
            date: '03/2019-',
            course: 'Informática para Internet',
            description: `Durante meu ensino médio, graças ao IFAL, fui introduzido à programação, a partir disso comecei minha jornada aprendendo os conceitos iniciais de programação, programação orientada a objetos, banco de dados e etc.`
        }
    }

    for(let formation in Formations){
        let newFormation = $('<div />').addClass('formation')
        let location = $('<div />').attr('id', "formation__location").append($('<h3 />').text(`${Formations[`${formation}`].local}`)).append($('<p />').text(`${Formations[`${formation}`].date}`))
        let description = $('<div />').attr('id', "formation__description").append($('<h3 />').text(`${Formations[`${formation}`].course}`)).append($('<p />').text(`${Formations[`${formation}`].description}`))

        $('#formations__conteiner').append(newFormation.append(location).append(description))
    }
})