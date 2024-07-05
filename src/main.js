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

//Funcion Filtrar data
document.getElementById('filterBy').addEventListener('change', function () {
  const dataFiltrada = filterData(data, 'tipoGuardian', this.value);
  load(dataFiltrada);
});

//Funcion Ordenar data
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
  document.querySelector('filterBy').value = 'vacio';
  document.querySelector('select[data-testid="select-filter"]').value = 'vacio';
  init();
});

function init() {
  load(data);
}
// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);


document.addEventListener('DOMContentLoaded', function () {
  const buttonEst = document.querySelector('button[data-testid="button-est"]');
  const resultadoDiv = document.querySelector('div[type="resultado"]');
  
  resultadoDiv.innerHTML = '<p>...</p>';

  buttonEst.addEventListener('click', function () {
    const stats = computeStats(data);

    //mostrar los resultados
    resultadoDiv.innerHTML = `
      <p>Porcentaje de gatos guardianes: ${stats.porcentageCatGuardians}%</p>
     <p>Nombres: ${stats.catGuardians.join(', ')}</p>
    `;
  });
});
