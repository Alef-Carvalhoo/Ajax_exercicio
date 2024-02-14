$(document).ready(function () {
    $.ajax ({
        url: 'https://api.github.com/users/Alef-Carvalhoo',
        dataType: 'json',

        success: function(resposta) {
            $('#avatar').attr('src', resposta.avatar_url);
            $('#name').text(resposta.name);
            $('#username').text('@' + resposta.login);
            $('#repos').text(resposta.public_repos);
            $('#followers').text(resposta.followers);
            $('#following').text(resposta.following);
            $('#link').attr('href', resposta.html_url);
        },
            error: function () {
                console.error('Erro ao carregar os dados do github.');
            }
    })
});