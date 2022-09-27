
function Horario(data){
    
    let dia = data.getDate();
    let options = {month: 'long'}
    let mes = new Intl.DateTimeFormat('pt-BR', options).format(data);
    let hora = data.getHours();
    let saudacao;

    if(hora <6  ){
        saudacao = 'Boa madrugada!';
    }else if(hora < 12){
        saudacao = 'Bom dia!';
    }else if(hora < 18){
        saudacao = 'Boa tarde!';
    }else if(hora <= 23){
        saudacao = 'Boa noite!';
    }
    return {'dia':dia, 'mes':mes, 'saudacao':saudacao};
    };

export default Horario;
