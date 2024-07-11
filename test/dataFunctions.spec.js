import { expect } from '@playwright/test';
import { filterData, sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

//console.log(fakeData);

describe('pruebas para funcion "filterData"', () => {

  it('retorna data filtrada por option "guardian sistema solar interno"', () => {
    const optionValueSeleccionado = "guardian sistema solar interno";
    const resultadoFiltrado = filterData(fakeData, 'tipoGuardian', optionValueSeleccionado);
    expect(resultadoFiltrado.length).toBe(5);
    expect(resultadoFiltrado[0].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[1].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[2].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[3].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
    expect(resultadoFiltrado[4].extraInfo.tipoGuardian.toLowerCase()).toBe(optionValueSeleccionado);
  });
});

describe('pruebas para funcion "sortData"', () => {

  it('retorna data ordenada de forma ascendente `sortData`', () => {
    const sortOrder = "asc";
    const dataOrdenada = sortData(fakeData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Ami Mizuno');
    expect(dataOrdenada[23].name).toBe('Yaten Kou');
  });
  /* it('retorna data ordenada de forma ascendente cuando los valores son iguales `sortData`', () => {
    const sortOrder = "asc";
    const dataOrdenada = sortData(fakeData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Ami Mizuno');
    expect(dataOrdenada[0].name).toBe('Ami Mizuno');
  }); */
  it('retorna data ordenada de forma descendente `sortData`', () => {
    const sortOrder = "desc";
    const dataOrdenada = sortData(fakeData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Yaten Kou');    
    expect(dataOrdenada[23].name).toBe('Ami Mizuno');
  });
  it('retorna data ordenada de forma descendente cuando los valores son iguales `sortData`', () => {
    const sortOrder = "desc";
    const dataOrdenada = sortData(fakeData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe('Yaten Kou');    
    expect(dataOrdenada[0].name).toBe('Yaten Kou');
  });
  /* it('retorna data ordenada de forma descendente cuando los valores son iguales `sortData`', () => {
    const sortOrder = "desc";
    const dataOrdenada = sortData(fakeData, 'name', sortOrder);
    expect(dataOrdenada[0].name).toBe(0);
  }); */
});
