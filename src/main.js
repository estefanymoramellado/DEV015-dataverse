//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

function init() {
// Mostrar los elementos en la interfaz de usuario
  renderItems(data);
}
// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', init);