jQuery(document).ready(function() {

    //function pra mascara
    var maskConditions = function(val) {
      return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
    },

    maskOptions = {
        onKeyPress: function(val, e, field, options) {
            field.mask(maskConditions.apply({}, arguments), options);
        }
    };

    //mascara tel
    $('#celular').mask(maskConditions, maskOptions);

    function validacaoEmail(email) {
      var verifica = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return verifica.test(String(email).toLowerCase());
    }
    var invalidDomains = ["@gmail.","@yahoo.","@hotmail.","@live.","@aol.","@outlook.","@bol.", "@uol."];

    function emailCorporativo(email) {
        for(var i=0; i < invalidDomains.length; i++) {
        var domain = invalidDomains[i];
        if (email.indexOf(domain) != -1) {
            return false;
            }
        }
        return true;
    }

    $('#quiz-etapa01').hide();
    $('#quiz-etapa02').hide();
    $('#quiz-etapa03').hide();
    $('#quiz-etapaintro').hide();
    $('#quiz-etapa04').hide();
    $('#e01q02').hide();
    $('#e01q03').hide();
    $('#e01q04').hide();
    $('#e01q05').hide();
    $('#e01q06').hide();

    var nome = $('#nome');
    var email = $('#email');
    var celular = $('#celular');
    var setor_atuacao = $('#setor_atuacao');
    var funcionarios = $('#funcionarios');
    var cargo = $('#cargo');
    var utm_source = $('#utm_source');
    var utm_medium = $('#utm_medium');
    var utm_campaign = $('#utm_campaign');
    var aceitouTermos = $('#subscribeCheckbox');

    /* ****************************************************************** */
    /* *************************** ETAPA 01 ***************************** */
    /* ****************************************************************** */

    /* INTRO P ETAPA 01 */
    $("#introparae01").click(function() {
        $('#quiz-intro').hide();
        $('#quiz-etapa01').fadeIn('fast');
    });

    /* QUESTÃO 01 PARA INTRO */
    $("#e01paraintro").click(function() {
      $('#quiz-etapa01').hide();
      $('#quiz-intro').fadeIn('fast');
    });

    /* QUESTÃO 01 PARA 02 */
    $("#q01paraq02").click(function() {
      if(!nome.val()){
        $('#nome').focus();
        Swal.fire({
          type: 'warning',
          text: 'Por favor, informe seu nome.',
          timer: 5000
        });
      } 
      else{
        $('#e01q01').hide();
        $('#e01q02 span.nome').html(nome.val());
        $('span.nome').html(nome.val());
        $('#e01q02').fadeIn('fast');
      }
    });



    /* QUESTÃO 02 PARA QUESTÃO 01 */
    $("#q02paraq01").click(function() {
      $('#e01q02').hide();
      $('#e01q01').fadeIn('fast');
    });

    /* QUESTÃO 02 PARA 03 */
    $("#q02paraq03").click(function() {
      if(!validacaoEmail($('#email').val()) || emailCorporativo($('#email').val()) == false){
        email.focus();
        Swal.fire({
          type: 'warning',
          text: 'Por favor, informe um email corporativo.',
          timer: 5000
        });
      } 
      else{
        $('#e01q02').hide();
        $('#e01q03').fadeIn('fast');
      }
    });


    /* QUESTÃO 03 PARA 02 */
    $("#q03paraq02").click(function() {
      $('#e01q03').hide();
      $('#e01q02').fadeIn('fast');
    });

    /* QUESTÃO 03 PARA 04 */
    $("#q03paraq04").click(function() {
      if(celular.val().length < 14){        
          Swal.fire({
              type: 'warning',
              text: 'Por favor, informe seu telefone.',
              timer: 2000,
              onAfterClose: () => {
                  celular.focus();
              }
          });
      } 
      else{
        $('#e01q03').hide();
        $('#e01q04').fadeIn('fast');
      }
    });


    /* QUESTÃO 04 PARA 03 */
    $("#q04paraq03").click(function() {
      $('#e01q04').hide();
      $('#e01q03').fadeIn('fast');
    });

    /* QUESTÃO 04 PARA 05 */
    $("#q04paraq05").click(function() {
      if(setor_atuacao.val() == "nulo"){   
          Swal.fire({
              type: 'warning',
              text: 'Por favor, selecione seu setor de atuação.',
              timer: 2000,
              onAfterClose: () => {
                setor_atuacao.focus();
              }
          });
      } 
      else{
        $('#e01q04').hide();
        $('#e01q05').fadeIn('fast');
      }
    });


    /* QUESTÃO 05 PARA 06 */
    $("#q05paraq06").click(function() {
      if(funcionarios.val() == "nulo"){   
        Swal.fire({
            type: 'warning',
            text: 'Por favor, selecione o número de funcionários.',
            timer: 2000,
            onAfterClose: () => {
              funcionarios.focus();
            }
        });
      } 
        else{
          $('#e01q05').hide();
          $('#e01q06').fadeIn('fast');
        }
      });

    /* QUESTÃO 05 PARA 04 */
    $("#q05paraq04").click(function() {
      $('#e01q05').hide();
      $('#e01q04').fadeIn('fast');
    });


    /* QUESTÃO 06 PARA ETAPA 02 */
    $("#q06paraetapa02").click(function() {
      if(cargo.val() == "nulo"){
        cargo.focus();
        Swal.fire({
          type: 'warning',
          text: 'Por favor, informe seu cargo.',
          timer: 5000
        });
      } 
      else if(!aceitouTermos.is(':checked')){
        Swal.fire({
          type: 'warning',
          title: 'Falta pouco!',
          text: 'Você precisa concordar em receber comunicações para prosseguirmos com o quiz.',
          timer: 5000
        });
      }
      else{
        $('#quiz-etapa01').hide();
        $('#quiz-etapa02').fadeIn('fast');
        $('#quiz-etapa02 span.nome').html(nome.val());
        $('#quiz-etapa03 span.nome').html(nome.val());
        $('#perfil span.nome').html(nome.val());
      }
    });
    /* ETAPA 01 - QUESTÃO 06 PARA 05 */
    $("#q06paraq05").click(function() {
      $('#e01q06').hide();
      $('#e01q05').fadeIn('fast');
    });



    /* ****************************************************************** */
    /* *************************** ETAPA 02 ***************************** */
    /* ****************************************************************** */

    $("#etapa02para03").click(function() {
      $('#quiz-etapa02').hide();
      $('#quiz-etapa03').fadeIn('fast');
    });


    /* ****************************************************************** */
    /* *************************** ETAPA 03 ***************************** */
    /* ****************************************************************** */


    $("#etapa03paraetapa02").click(function() {
      $('#quiz-etapa03').hide();
      $('#quiz-etapa02').fadeIn('fast');
    });

    var resultado = 0;
    $("#etapa03resposta").click(function() {
      if ($("#questaointro-sim").is(':checked') || $("#questaointro-nao").is(':checked')) {
        if ($("#questaointro-sim").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Intro: ' + resultado + ' pontos.');
          $('#quiz-etapa03').hide();
          $('#quiz-etapa04').fadeIn('fast');
          $('#questao01').fadeIn('fast');
        }
        if ($("#questaointro-nao").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Intro: ' + resultado + ' pontos.');
            $('#quiz-etapa03').hide();
            $('#quiz-etapaintro').fadeIn('fast');
        } 

        var identificador = 'Quiz Dexer - Pergunta Intro';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });

        console.log(mountperguntaintro);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });


    /* ****************************************************************** */
    /* *************************** ETAPA INTRO NÃO ***************************** */
    /* ****************************************************************** */

    $("#intronaoparaetapa03, #quiz02petapa3").click(function() {
      $('#quiz-etapaintro').hide();
      $('#quiz-etapa03').fadeIn('fast');
      resultado = 0;
      console.log(resultado);
    });

    /* ETAPA INTRO PARA ETAPA 02 */
    $("#intronaoparaetapa04").click(function() {
      $('#quiz-etapaintro').hide();
      $('#quiz-etapa04').fadeIn('fast');
      $('#questao01').hide();
      $('#questao02').fadeIn('fast');
      $('a#quiz02p01').hide();
      $('a#quiz02petapa3').show();
    });


    /* ****************************************************************** */
    /* ************************ ETAPA 04 - QUIZ ************************* */
    /* ****************************************************************** */
    $('a#quiz02p01').show();
    $('a#quiz02petapa3').hide();
    $('#questao02').hide();
    $('#questao03').hide();
    $('#questao04').hide();
    $('#questao05').hide();
    $('#questao06').hide();
    $('#questao07').hide();
    $('#questao08').hide();
    $('#questao09').hide();
    $('#questao10').hide();

    /* QUESTÃO 01 PARA 02 */
    $("#quiz01p02").click(function() {
      if ($("#questao01-a").is(':checked') || $("#questao01-b").is(':checked') || $("#questao01-c").is(':checked')) {
        if ($("#questao01-a").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Q1: ' + resultado + ' pontos.');
        }
        if ($("#questao02-b").is(':checked')) {
            resultado = resultado + 6;
            console.log('Pontuação - Q1: ' + resultado + ' pontos.');
        }
        if ($("#questao02-c").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Q1: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 1';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });

        console.log(mountpergunta1);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao01').hide();
        $('#questao02').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 01 PARA ETAPA 03 */
    $("#quiz01petapa03").click(function() {
      $('#quiz-etapa04').hide();
      $('#quiz-etapa03').fadeIn('fast');
      resultado = 0;
      console.log(resultado);
    });


    /* QUESTÃO 02 PARA 03 */
    $("#quiz02p03").click(function() {
      if ($("#questao02-a").is(':checked') || $("#questao02-b").is(':checked') || $("#questao02-c").is(':checked')) {
        if ($("#questao02-a").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Q2: ' + resultado + ' pontos.');
        }
        if ($("#questao02-b").is(':checked')) {
            resultado = resultado + 6;
            console.log('Pontuação - Q2: ' + resultado + ' pontos.');
        }
        if ($("#questao02-c").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Q2: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 2';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });

        console.log(mountpergunta2);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao02').hide();
        $('#questao03').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 03 PARA 04 */
    $("#quiz03p04").click(function() {
      if ($("#questao03-a").is(':checked') || $("#questao03-b").is(':checked')) {
        if ($("#questao03-a").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Q3: ' + resultado + ' pontos.');
        }
        if ($("#questao03-b").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Q3: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 3';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='questao03']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });

        console.log(mountpergunta3);

       var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao03').hide();
        $('#questao04').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 04 PARA 05 */
    $("#quiz04p05").click(function() {
      if ($("#questao04-a").is(':checked') || $("#questao04-b").is(':checked')) {
        if ($("#questao04-a").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Q4: ' + resultado + ' pontos.');
        }
        if ($("#questao04-b").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Q4: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 4';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='questao03']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='questao04']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });

        console.log(mountpergunta4);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
          { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao04').hide();
        $('#questao05').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 05 PARA 06 */
    $("#quiz05p06").click(function() {
      if ($("#questao05-a").is(':checked') || $("#questao05-b").is(':checked')) {
        if ($("#questao05-a").is(':checked')) {
          resultado = resultado + 3;
          console.log('Pontuação - Q5: ' + resultado + ' pontos.');
        }
        if ($("#questao05-b").is(':checked')) {
            resultado = resultado + 10;
            console.log('Pontuação - Q5: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 5';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='questao03']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='questao04']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='questao05']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });

        console.log(mountpergunta5);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
          { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
          { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao05').hide();
        $('#questao06').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 06 PARA 07 */
    $("#quiz06p07").click(function() {
      if ($("#questao06-a").is(':checked') || $("#questao06-b").is(':checked')) {
        if ($("#questao06-a").is(':checked')) {
          resultado = resultado + 3;
          console.log('Pontuação - Q6: ' + resultado + ' pontos.');
        }
        if ($("#questao06-b").is(':checked')) {
            resultado = resultado + 10;
            console.log('Pontuação - Q6: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 6';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='questao03']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='questao04']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='questao05']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='questao06']:checked"), function(){            
          mountpergunta6.push($(this).val());
        });

        console.log(mountpergunta6);

        var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
          { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
          { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
          { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('#questao06').hide();
        $('#questao07').fadeIn('fast');
      }
      else{
        Swal.fire({
          type: 'warning',
          text: 'Por favor, selecione uma das opções',
          timer: 5000
        });
      }
    });

    /* QUESTÃO 07 PARA 08 */
    $("#quiz07etapafinal").click(function() {
      if ($("#questao07-a").is(':checked') || $("#questao07-b").is(':checked')) {
        if ($("#questao07-a").is(':checked')) {
          resultado = resultado + 10;
          console.log('Pontuação - Q7: ' + resultado + ' pontos.');
        }
        if ($("#questao07-b").is(':checked')) {
            resultado = resultado + 3;
            console.log('Pontuação - Q7: ' + resultado + ' pontos.');
        }

        var identificador = 'Pontuação Quiz Dexer - Pergunta 7';
        var nome = $('#nome');
        var email = $('#email');
        var celular = $('#celular');
        var setor_atuacao = $('#setor_atuacao');
        var funcionarios = $('#funcionarios');
        var cargo = $('#cargo');
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');

        mountperguntaintro = [];
        $.each($("input[name='questaointro']:checked"), function(){            
          mountperguntaintro.push($(this).val());
        });
        mountpergunta1 = [];
        $.each($("input[name='questao01']:checked"), function(){            
          mountpergunta1.push($(this).val());
        });
        mountpergunta2 = [];
        $.each($("input[name='questao02']:checked"), function(){            
            mountpergunta2.push($(this).val());
        });
        mountpergunta3 = [];
        $.each($("input[name='questao03']:checked"), function(){            
            mountpergunta3.push($(this).val());
        });
        mountpergunta4 = [];
        $.each($("input[name='questao04']:checked"), function(){            
            mountpergunta4.push($(this).val());
        });
        mountpergunta5 = [];
        $.each($("input[name='questao05']:checked"), function(){            
            mountpergunta5.push($(this).val());
        });
        mountpergunta6 = [];
        $.each($("input[name='questao06']:checked"), function(){            
          mountpergunta6.push($(this).val());
        });
        mountpergunta7 = [];
        $.each($("input[name='questao07']:checked"), function(){            
          mountpergunta7.push($(this).val());
        });

        console.log(mountpergunta7);

       var sendRD = [
          { name: 'identificador', value: identificador},
          { name: 'Nome', value: nome.val()},
          { name: 'email', value: email.val()},
          { name: 'telefone', value: celular.val()},
          { name: 'setor_atuacao', value: setor_atuacao.val()},
          { name: 'funcionarios', value: funcionarios.val()},
          { name: 'cargo', value: cargo.val()},
          { name: 'utm_source', value: utm_source.val()},
          { name: 'utm_medium', value: utm_medium.val()},
          { name: 'utm_campaign', value: utm_campaign.val()},
          { name: 'aceitoulgpd', value: 'sim'},
          { name: 'Pergunta Intro', value: mountperguntaintro.join(", ")},
          { name: 'Pergunta 1', value: mountpergunta1.join(", ")},
          { name: 'Pergunta 2', value: mountpergunta2.join(", ")},
          { name: 'Pergunta 3', value: mountpergunta3.join(", ")},
          { name: 'Pergunta 4', value: mountpergunta4.join(", ")},
          { name: 'Pergunta 5', value: mountpergunta5.join(", ")},
          { name: 'Pergunta 6', value: mountpergunta6.join(", ")},
          { name: 'Pergunta 7', value: mountpergunta7.join(", ")},
          { name: 'Pontuação Quiz Dexer', value: resultado},
          { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
        ];

        RdIntegration.post(sendRD);
        $('section.quiz03 .caixa').hide();
        var nomeCliente = nome.val();
        sessionStorage.setItem("nome", nomeCliente);

        /* Redirecionamentos de acordo com resultado*/
        if(resultado >= 50 && resultado >= 70){
          setTimeout(function() {
              window.location.href = "./resultado01-quiz-diagnostico-de-trade-marketing-landix.html";
              $('#perfil span.nome').html(nome.val());
              console.log(resultado);
          },500);
        }

        if(resultado >= 30 && resultado <= 50){
          setTimeout(function() {
              window.location.href = "./resultado02-quiz-diagnostico-de-trade-marketing-landix.html";
              $('#perfil span.nome').html(nome.val());
              console.log(resultado);
          },500);
        }

        if(resultado >= 0 && resultado <= 30){
          setTimeout(function() {
              window.location.href = "./resultado03-quiz-diagnostico-de-trade-marketing-landix.html";
              $('#perfil span.nome').html(nome.val());
              console.log(resultado);
          },500);
        }
      }
      else{
        Swal.fire({
          type: 'warning',
          title: 'Falta pouco!',
          text: 'Selecione uma das opções para concluir o quiz',
          timer: 5000
        });
      }
    });

});
