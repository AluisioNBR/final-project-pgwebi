$(document).ready(function(){
    const Projects = {
        atv2_1: {
            name: 'Reconstruindo modelos(HTML/CSS)',
            img: '../img/projects/atv-2.1.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre HTML e CSS'
        },
        
        atv2_3: {
            name: 'Praticando JS',
            img: '../img/projects/atv-2.3.jpeg',
            description: 'Primeira atividade para fixação dos conhecimentos sobre JavaScript'
        },
        
        atv3_1: {
            name: 'Aprendendo jQuery',
            img: '../img/projects/atv-3.1.jpeg',
            description: 'Atividade para fixação dos conhecimentos sobre jQuery'
        },
        
        atv3_2: {
            name: 'Jogo da Velha',
            img: '../img/projects/atv-3.2.jpeg',
            description: 'Recriação de um jogo da velha a partir dos novos conhecimentos de jQuery'
        },

        amazonCopy: {
            name: 'Copia da Amazon',
            img: '../img/projects/amazon_copy.jpeg',
            description: 'Primeira avaliação envolvendo nossos conhecimentos sobre HTML e CSS'
        }
    }

    let cont = 0, columns = '1fr'
    for(let project in Projects) {
        cont++
        if(cont % 2 != 0 && cont > 1){
            columns = columns + ' 1fr'
        }
    }

    $('#projects-conteiner').css('grid-template-columns', columns)

    let i = 1
    for(let project in Projects){
        let newProject = $('<div />').addClass('project').append($('<img />').attr('title', `${Projects[`${project}`].name}`).attr('alt', `${Projects[`${project}`].name}`).attr('src', `${Projects[`${project}`].img}`))
        
        let details = $('<div />').attr('id', 'project__details').addClass('not-active').append($('<h3 />').text(`${Projects[`${project}`].name}`)).append($('<p />').text(`${Projects[`${project}`].description}`))

        $('#projects-conteiner').append(newProject.append(details))

        newProject.on('mouseover', function(){
            details.removeClass('not-active')
            details.addClass('active')
        })
        newProject.on('mouseleave', function(){
            details.removeClass('active')
            details.addClass('not-active')
        })

        i++
    }
})