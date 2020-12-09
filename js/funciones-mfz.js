const grid = new Muuri('.grid', {
	layout: {
		rounding: false
	}
});

	// 1 Visualisa las imagenes unas vez esta cargada la pagina...

	window.addEventListener('load', () => {
	grid.refreshItems().layout();
	document.getElementById('grid').classList.add('imagenes-cargadas');
	// ... 1 termina funsion de visualizar imagenes cargadas.

	// Agregamos los listener de los enlaces para filtrar por categoria.
	const enlaces = document.querySelectorAll('#categorias a');
	enlaces.forEach((elemento) => {
		elemento.addEventListener('click', (evento) => {
			evento.preventDefault(); //Quita el # de la barra de direcciones al hacer clic en el anlace
			enlaces.forEach((enlace) => enlace.classList.remove('mcc-activo')); //Quito la clase activo a la menu de galerias
			evento.target.classList.add('mcc-activo');

			//Filtrado menu categoria, aqui
			const categoria = evento.target.innerHTML.toLowerCase();
			categoria === 'todos' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`); //Filtrado desde el menu categorias.
		});
	});

	// Agregamos el listener para la barra de busqueda
	document.querySelector('#barra-busqueda').addEventListener('input', (evento) => {
		const busqueda = evento.target.value;
		grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
	});

});