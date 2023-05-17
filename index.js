function $(selector){
    return document.querySelector(selector)
}

var message_form = $('#fieldset-forms form');

message_form.addEventListenr('submit', (evt) => {
    evt.preventDefalt();

    let nome = $('#nome-input').value;
    let email = $('#email-input').value;
    let mensagem = $('#text').value;
    

    let texto =  `Nome: ${nome}
    Email: ${email}
    Mensagem: ${mensagem}`

    alert(texto);
})