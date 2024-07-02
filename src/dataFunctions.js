// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Crear funcion filterData
export const filterData = (data, filterBy, value) => {
  return data.filter(item =>
    item.extraInfo[filterBy].toLowerCase() === value.toLowerCase());
}

//Crear funcion sortData
export const sortData = (data, sortBy, sortOrder) => {
  const dataCopia = data;
  if (sortOrder === "asc") {
    dataCopia.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  } else if (sortOrder === "desc") {
    dataCopia.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return dataCopia;
}