import { filterData, sortData } from './dataFunctions.js';
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
document.getElementById('filterBy').addEventListener('change', function() {
  const dataFiltrada = filterData(data, 'tipoGuardian', this.value);
  load(dataFiltrada);
});

//Funcion Ordenar data
document.getElementById('sortBy').addEventListener('change', function(){
  const sortOrder = this.value;
  const dataOrdenada = sortData(data, 'name', sortOrder);
  load(dataOrdenada);
});

function init() {  
  load(data);
}
// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);