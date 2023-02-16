function getInfos(email) {
        var name = document.getElementsByName("nome")[0];
        var matricula = document.getElementsByName("matricula")[0];
        var answers = document.getElementsByTagName("textarea");
        var questions = document.getElementsByClassName("question");
        var header = document.getElementsByClassName("header")[0].outerText;
    
        if (!name.value) {
            name.style.border = "1px solid red"
        } else {
            name.style.border = "1px solid #1c87c9"
        }
        if (!matricula.value) {
            matricula.style.border = "1px solid red"
        } else {
            matricula.style.border = "1px solid #1c87c9"
        }
        for (answer of answers) {
            if(!answer.value){
                answer.style.border = "1px solid red"
            } else {
                answer.style.border = "1px solid #1c87c9"
            }
        }
        if (name.value && matricula.value) {
            var body = {
                "nome": name.value,
                "matricula": matricula.value,
                "header": header,
                "respostas": {}
            }
            var count = 0;
    
            for (answer of answers) {
                if(answer.value){
                    body.respostas[questions[answer.id].outerText] = answer.value;
                    count++;
                }
            }
            if (count == answers.length) {
                sendMail(body, email);
            }
        }
}

function sendMail(body, email) {
    var string =`
    mailto:${email}?Subject=[Questões para estudos] ${body.header}
    &body=Nome: ${body.nome}%0A
Matrícula: ${body.matricula}%0A
%0A
`;
    for (chave in body.respostas) {
        chave = decodeURI(chave)
        string = string.concat(`${decodeURI(chave)}%0ARESPOSTA: ${body.respostas[chave]}%0A%0A`);
    }
    string = string.concat(`%0AEmail%20enviado%20automaticamente.`)
    window.location.href = string;
}