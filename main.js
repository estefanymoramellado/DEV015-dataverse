import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


function load(data) {
  // Mostrar los elementos en la interfaz de usuario
  const ul = renderItems(data);
  // Agregar el <ul> al elemento root
  const rootElement = document.querySelector('#root');
  rootElement.innerHTML = "";
  rootElement.appendChild(ul);
}

// Funcion Filtrar data
document.getElementById('filterBy').addEventListener('change', function () {
  const dataFiltrada = filterData(data, 'tipoGuardian', this.value);
  load(dataFiltrada);
});

// Funcion Ordenar data
document.getElementById('sortBy').addEventListener('change', function () {
  const sortOrder = this.value;
  const valorSeleccionadoFilterBy = document.getElementById('filterBy').value;
  const copiaData = [...data];

  if (valorSeleccionadoFilterBy === "vacio") {
    const dataOrdenada = sortData(copiaData, 'name', sortOrder);
    load(dataOrdenada);
  } else if (valorSeleccionadoFilterBy !== "vacio") {
    const dataFiltrada = filterData(copiaData, 'tipoGuardian', valorSeleccionadoFilterBy);
    const dataOrdenada = sortData(dataFiltrada, 'name', sortOrder);
    load(dataOrdenada);
  }
});

// Funcion Borrar valores
document.querySelector('button[data-testid="button-clear"]').addEventListener('click', function () {
  document.querySelector('select[data-testid="select-filter"]').value = 'vacio';
  document.querySelector('select[data-testid="select-sort"]').value = 'vacio';
  document.querySelector('div[type="resultado"]').innerHTML = "Obten la estadistica de tu selección";

  init();
});

// Funcion Estadisticas

document.querySelector('button[data-testid="button-est"]').addEventListener('click', function () {
  const resultadoDiv = document.querySelector('div[type="resultado"]');

  // Trae el valor del select filtro
  const valorSeleccionadoFilterBy = document.getElementById('filterBy').value;
  const dataFiltrada = filterData(data, 'tipoGuardian', valorSeleccionadoFilterBy);

  // Obtengo total personajes
  const totalPersonajes = data.length;

  // Obtiene estadisticas
  const estadisticas = computeStats(dataFiltrada, totalPersonajes);

  resultadoDiv.innerHTML = `
    <p>Porcentaje: ${estadisticas.porcentajeTipoGuardian.toFixed(2)}%, de tipo: ${valorSeleccionadoFilterBy}</p>
    <p>Nombres: ${estadisticas.tipoGuardian.join(', ')}</p>
    `;

});

function init() {
  load(data);
}
// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);
