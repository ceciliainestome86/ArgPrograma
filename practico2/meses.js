const readlineSync = require('readline-sync');

const meses = {
  1: { nombre: 'enero', dias: 31 },
  2: { nombre: 'febrero', dias: 28 },
  3: { nombre: 'marzo', dias: 31 },
  4: { nombre: 'abril', dias: 30 },
  5: { nombre: 'mayo', dias: 31 },
  6: { nombre: 'junio', dias: 30 },
  7: { nombre: 'julio', dias: 31 },
  8: { nombre: 'agosto', dias: 31 },
  9: { nombre: 'septiembre', dias: 30 },
  10: { nombre: 'octubre', dias: 31 },
  11: { nombre: 'noviembre', dias: 30 },
  12: { nombre: 'diciembre', dias: 31 },
};

const numero = readlineSync.questionFloat('Ingrese el número correspondiente al mes: ');

if (numero >= 1 && numero <= 12) {
  const mes = meses[numero];
  console.log(`La cantidad de días del mes de ${mes.nombre} es ${mes.dias}`);
} else {
  console.log('Número inválido');
}
