export function toRna(code: string) {

  let codeResult: string = "";

  for (let letter of code) {

    if (rna[letter]) {
      codeResult += rna[letter];

    } else {

      throw new Error('Invalid input DNA.');
    }
  }
  return codeResult;
}


const rna: { [key: string]: string } =
{
  "G": "C",
  "C": "G",
  "T": "A",
  "A": "U"
}

