export function decodedValue(duo: string[]): number {

  let joinInts: number = parseInt(COLORS.indexOf(duo[0]).toString() + COLORS.indexOf(duo[1]).toString());

  return joinInts
}


const COLORS: string[] =
  [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white"
  ]