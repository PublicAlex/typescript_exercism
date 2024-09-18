export function age(planet: string, seconds: number): number {

  let earthConvertion:number = earthYear * planets[planet];

  let planetConvertion:number = seconds/earthConvertion ;

  return parseFloat(planetConvertion.toFixed(2));
}





const earthYear: number = 31557600;
const planets: { [key: string]: number } =
{
  "mercury": 0.2408467,
  "venus": 0.61519726,
  "mars": 1.8808158,
  "jupiter": 11.862615,
  "saturn": 29.447498,
  "uranus": 84.016846,
  "neptune": 164.79132,
  "earth": 1
}