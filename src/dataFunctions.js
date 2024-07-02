// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  return data.filter(item => 
    item.extraInfo[filterBy].toLowerCase() === value.toLowerCase());
}

