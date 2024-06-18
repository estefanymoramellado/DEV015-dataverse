
export const renderItems = (data) => {
  // Crear un elemento <ul>
  const ul = document.createElement('ul');
  // Recorrer la data y crear un elemento <li> para cada elemento de la data
  data.forEach(item => {
    const li = document.createElement('li');
    // Crear el contenido del <li> con la información del item
    const content = `
          <img src="${item.imageUrl}" alt="${item.name}" style="width:100px;height:auto;">
          <h2>${item.name} (${item.shortDescription})</h2>
          <p>${item.description}</p>
          <ul>
              <li><strong>Fecha de Nacimiento:</strong> ${item.facts.fechaDeNacimiento}</li>
              <li><strong>Signo Zodiacal:</strong> ${item.facts.signoZodiacal}</li>
              <li><strong>Tipo de Guardiana:</strong> ${item.facts.tipoDeGuardiana}</li>
          </ul>
      `;
    const rootElement = document.querySelector('#root');

    // Renderizar los elementos dentro de 'root'
    rootElement.appendChild(renderItems(data));

    li.innerHTML = content;
    // Agregar el <li> al <ul>
    ul.appendChild(li);
  });
  // Retornar el elemento <ul>
  return ul;
}
// Exportar la función para que pueda ser utilizada en otros archivos
//export { renderItems };
