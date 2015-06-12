// Desplegar opciones por mesa en dispositivos móviles
$(document).ready(function(){
	if ($(window).width() < 480) {

	   $('.mesa').on('click',function(){
	   		$('.accion').css('display','none');
			$('.accion', this).css('display','block');
		});
	}
})


Accounts.ui.config({
  passwordSignupFields: "USERNAME_ONLY"
});
