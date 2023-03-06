const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
const dni = 114;
const letra = 'M';

const checkDni = () => {
  if (dni > 99999999 || dni < 0) return;
  return true;
}

const main = () => {
  const dniChecked = checkDni();
  if (!dniChecked) return 'Error [DNI no valido]';

  const index = Math.round(dni / 23);
  const letraFound = letras.at(index);
  if (!letraFound) return 'Error [No se ha encontrado la letra]';

  return (letraFound === letra) 
  ? 'El número y la letra del documento de Identidad son correctos.' 
  : 'Las letras no coinciden';
}

console.log(main());