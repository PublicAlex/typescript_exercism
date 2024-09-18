export function score(x: number, y: number): number {
  // Definición de los radios y puntajes asociados
  const scores: { radius: number, score: number }[] = [
    { radius: 1, score: 10 },  // Radio de 1, puntaje 10
    { radius: 5, score: 5 },   // Radio de 5, puntaje 5
    { radius: 10, score: 1 }   // Radio de 10, puntaje 1
  ];

  // Calcula la distancia euclidiana desde el centro (0, 0)
  const dist = distance(x, y);

  // Itera sobre los radios y asigna el puntaje correspondiente
  for (const { radius, score } of scores) {
    if (dist <= radius) {
      return score; // Retorna el puntaje asociado al primer radio que cumple la condición
    }
  }

  return 0; // Retorna 0 si no está dentro de ningún radio
}

// Función para calcular la distancia euclidiana desde (0, 0)
function distance(x: number, y: number): number {
  return Math.sqrt(x * x + y * y);
}
