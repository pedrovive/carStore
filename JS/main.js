$(document).ready(function(){
    $('#carousel-img').slick({   // função para adicionar o carousel
        autoplay: true,  // deixa o comportamento de passar os slides automático
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle(); // função que esconde e mostra a navbar quando clicado no botão hambúrguer
    });

    $('#telefone').mask('(00)00000-0000', {
        placeholder: "(00) 00000-0000",
    }); // mascara para telefone e o placeholder serve para exemplificar como desejamos  que fique a máscara

    $('form').validate({
        rules: {
            name: {
                required: true
            },
            email: {
                required: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Campo obrigatório!',
            email: 'Insira um e-mail válido!',
            telefone: 'Campo obrigatório!',
            mensagem: 'Campo obrigatório!'
        },
        submmitHandler: function (form){
            console.log(form)
        },
        invalidHandler: function (evento, validador) {
            var camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function(){ // esse código serve para: toda vez que o botão "tenho interesse" for clicado, a página vai rolar até o formulário
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text() // o This é um parametro intrincico desse callback e representa o próprio botão
        
        $('#veiculo-interesse').val(nomeVeiculo);
        
        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000) //esse 1000 significa 1 em milisegundos e é o tempo que vai levar para a animação
    })
})