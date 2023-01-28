//Mensaje bienvenida

function alerta(){
alert('Usted ha ingresando al CV de Dante Benevento, sea Bienvenido');
}
window.onload = function(){
setTimeout('alerta()',500);
}

//FinMensaje bienvenida




//Comienzo Mostrar y ocultar Datos de contacto

function mostrar(){
	alert('Juntos realizaremos sus proyectos');
	div=document.getElementById('flotante');
	div.style.display='';
}


function cerrar(){
	div=document.getElementById('flotante');
	div.style.display='none';
}


//Fin Mostrar y ocultar Datos de contacto



