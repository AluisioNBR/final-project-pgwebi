$(document).ready(function(){
    const Projects = {
        amazonCopy: {
            name: 'Copia da Amazon',
            img: '../img/projects/amazon_copy.jpeg',
            description: ''
        },
        
        teste2: {
            name: 'Projeto 2',
            img: '../img/projects/amazon_copy.jpeg',
            description: ''
        },
        
        teste3: {
            name: 'Projeto 3',
            img: '../img/projects/amazon_copy.jpeg',
            description: ''
        },
        
        teste4: {
            name: 'Projeto 4',
            img: '../img/projects/amazon_copy.jpeg',
            description: ''
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
        
        let details = $('<div />').attr('id', 'project__details').addClass('not-active').append($('<h3 />').text(`${Projects[`${project}`].name}`)).append($('<h4 />').text('Descrição:')).append($('<p />').text(`${Projects[`${project}`].description}`))

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