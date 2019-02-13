$(document).ready(function() {
	$(".submit").click(function(e){
		
		e.preventDefault();

		var form = $('.feedback__form');

		var nameLngth = $('.' + form.attr('class') + ' [name=name], ' + '.' + form.attr('class') + ' [name=phone], '+ '.' + form.attr('class') + ' [name=email], '+ '.' + form.attr('class') + ' [name=company], '+ '.' + form.attr('class') + ' [name=message]' );

		var patternEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
		
		$.each(nameLngth, function(index, element){

			if(element.value.length <= 1) {
				$(this).addClass('notValid');
			} else {
				$(this).removeClass('notValid');
			}
			
			if($(this).hasClass("email")) {
				if(patternEmail.test($(this).val())){
					$(this).removeClass('notValid');
				} else {
					$(this).addClass('notValid');
				}	
			}

			
    	});


    	
		
		if(!$(".name, .phone, .email, .message, .company").hasClass("notValid")) {
			
			jQuery.ajax({
					url:     "/lp/5s/server.php", 
					type:     "POST", 
					dataType: "html", 
					data: jQuery("form").serialize(),
					success: function(response) { 
					$('.submit').removeAttr('href').addClass('good').val(response);
				},
				error: function(response) { 
					$('.submit').removeAttr('href').addClass('wrong').val("Ошибка при отправке формы");
				}
			});

		} else {
			$('form').css('margin-bottom','20px');
		}

	});
});          



