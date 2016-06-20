export const sumDays = (fecha = new Date(), days = 1) => {
	const fecha2 = fecha;
  fecha2.setDate(fecha2.getDate() + days);
  return fecha2;
}

export const iniciaSesion = () => {
	Bert.alert({
	  title: '¡Inicia sesión!',
	  message: 'Para reservar debes iniciar sesión',
	  type: 'info',
	  style: 'growl-top-right',
	  icon: 'fa-info'
	});
}