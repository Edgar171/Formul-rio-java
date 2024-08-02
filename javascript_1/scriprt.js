document.getElementById('contact-form').addEventListener('submit'),function(event){
    event.preventDefault();




    const formData = new FormData(event.target)
    emailjs.send().then(response => 
        {document.getElementById('response-message').innerText = 'Mensagem enviada com Sucesso!';
    })
        .catch(erro =>
        {document.getElementById('respnse-message').innerText = 'Erro ao enviar Menssagem!!';
    console.error('erro ao enviar o e-mail')
})
            

}