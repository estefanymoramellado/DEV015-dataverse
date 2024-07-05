// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//Crear funcion filterData
export const filterData = (data, filterBy, value) => {
  return data.filter(item =>
    item.extraInfo[filterBy].toLowerCase() === value.toLowerCase());
}

//Crear funcion sortData
export const sortData = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    data.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return -1;
      }
      if (a[sortBy] > b[sortBy]) {
        return 1;
      }
      return 0;
    });
  } else if (sortOrder === "desc") {
    data.sort((a, b) => {
      if (a[sortBy] > b[sortBy]) {
        return -1;
      }
      if (a[sortBy] < b[sortBy]) {
        return 1;
      }
      return 0;
    });
  }
  return data;
}

//crear funcion computeStats
export function computeStats(data) {
  const totalPersonajes = data.reduce((acc) => acc + 1, 0);

  const { totalCatGuardians, catGuardians } = data.reduce((acc, personajes) => {
    if (personajes.extraInfo.tipoGuardian === 'Gato Guardian') {
      acc.totalCatGuardians += 1; //CONTADOR
      acc.catGuardians.push(personajes); //almacena
    }
    return acc;
  }, { totalCatGuardians: 0, catGuardians: [] });

  const porcentageCatGuardians = (totalCatGuardians / totalPersonajes) * 100;//calcula porcentaje
  const catGuardianNames = catGuardians.map(cat => cat.name);//almacena los nombres
  

  return {
    totalPersonajes,
    totalCatGuardians,
    porcentageCatGuardians,
    catGuardians: catGuardianNames

  };
}