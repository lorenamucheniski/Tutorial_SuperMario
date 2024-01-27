const dataEHora = document.querySelector('.data_hora');

function mostrarHora(hora_atual) {

    let hora = new Date();

    hora_atual = hora.toLocaleTimeString('pt-BR', {
        hour12: false
    });

    return ` às ${hora_atual}`;

}

function mostrarData() {
    let data = new Date();

    data_atual = data.toLocaleDateString('pt-BR')

    return `Última atualização ${data_atual}`
}

dataEHora.innerHTML += mostrarData() + mostrarHora()