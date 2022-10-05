jQuery(document).ready(function() {

  $('#cnpj').hide();
  $("#temcnpj").change(function() {
      if ($(this).val() == "Sim") {
        $('#cnpj').show();
      } else {
        $('#cnpj').hide();
      }
    });

	/*
        Máscaras
    */

   $('#celular').mask('(00) 00000-0000');
   $('#cnpj').mask('99.999.999/9999-99');

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

	function validarCNPJ(cnpj) {
 
		cnpj = cnpj.replace(/[^\d]+/g,'');
	 
		if(cnpj == '') return true;
		 
		if (cnpj.length != 14)
			return false;
	 
		// Elimina CNPJs invalidos conhecidos
		if (cnpj == "00000000000000" || 
			cnpj == "11111111111111" || 
			cnpj == "22222222222222" || 
			cnpj == "33333333333333" || 
			cnpj == "44444444444444" || 
			cnpj == "55555555555555" || 
			cnpj == "66666666666666" || 
			cnpj == "77777777777777" || 
			cnpj == "88888888888888" || 
			cnpj == "99999999999999")
			return false;
			 
		// Valida DVs
		tamanho = cnpj.length - 2
		numeros = cnpj.substring(0,tamanho);
		digitos = cnpj.substring(tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(0))
			return false;
			 
		tamanho = tamanho + 1;
		numeros = cnpj.substring(0,tamanho);
		soma = 0;
		pos = tamanho - 7;
		for (i = tamanho; i >= 1; i--) {
		  soma += numeros.charAt(tamanho - i) * pos--;
		  if (pos < 2)
				pos = 9;
		}
		resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
		if (resultado != digitos.charAt(1))
			  return false;
			   
		return true;
		
	}

	//formulario de contato
    $("#cadastrar").on('click',function (e) {
        e.preventDefault();

        var nome = $('#nome').val();
        var email = $('#email').val();
        var celular = $('#celular').val();
        var temcnpj = $('#temcnpj').val();
        var cnpj = $('#cnpj').val();
        var utm_source = $('#utm_source');
        var utm_medium = $('#utm_medium');
        var utm_campaign = $('#utm_campaign');
        var utm_content = $('#utm_content');
        var utm_term =  $('#utm_term');
        var aceitouTermos = $('#subscribeCheckbox');

        if(!nome){

            $('#nome').focus();
            Swal.fire({
              type: 'warning',
              text: 'Por favor, informe seu nome completo',
              timer: 5000
            });

        } 
        else if(!validacaoEmail($('#email').val()) || emailCorporativo($('#email').val()) == false){
          $('#email').focus();
          Swal.fire({
            type: 'warning',
            text: 'Por favor, informe seu e-mail corporativo',
            timer: 5000
          });
        } 
        else if (!celular) {
          $('#celular').focus();
          Swal.fire({
            type: 'warning',
            text: 'Por favor, informe seu celular corretamente',
            timer: 5000
          });

        } 
        else if (temcnpj == 'nulo') {

            $('#segmento').focus();
              Swal.fire({
                type: 'warning',
                text: 'Por favor, informe se você possui CNPJ',
                timer: 5000
            });

        } 
        else if(validarCNPJ(cnpj) == false) {

            $('#cnpj').focus();
            Swal.fire({
              type: 'warning',
              text: 'Por favor, seu CNPJ corretamente',
              timer: 5000
            });
            
        }
        else if(!aceitouTermos.is(':checked')){
          Swal.fire({
            type: 'warning',
            title: 'Falta pouco!',
            text: 'Você precisa concordar em receber comunicações.',
            timer: 5000
          });
        }
        
        else {
          var data_array = [
              { name: 'Nome', value: nome},
              { name: 'email', value: email},
              { name: 'Telefone', value: celular},
              { name: 'temcnpj', value: temcnpj},
              { name: 'CNPJ', value: cnpj},
              { name: 'utm_source', value: utm_source.val()},
              { name: 'utm_medium', value: utm_medium.val()},
              { name: 'utm_campaign', value: utm_campaign.val()},
              { name: 'utm_content', value: utm_content.val()},
              { name: 'utm_term', value: utm_term.val()},
              { name: 'aceitoulgpd', value: 'sim'},
              { name: 'Qualificação do Lead', value: 'Marketing Qualify'},

              { name: 'token_rdstation', value: '504fa6a9cd491946efabb2715da3a05b'},
              { name: 'identificador', value: 'LP Dexer 2021 - Landix'}
          ];

          console.log(data_array);

          RdIntegration.post(data_array);

          $('input').val('');
          $('select').val('nulo');

          Swal.fire({
            type: 'success',
            title: 'Obrigado!',
            text: 'Em breve um de nossos consultores entrará em contato.',
            timer: 5000
          });

        }
        return false;
    });
});
