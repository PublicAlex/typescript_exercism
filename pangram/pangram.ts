export function isPangram(pangram:string):boolean {

  if(pangram.length == 0){
    return false;
  }

  pangram.replace(/[^a-zA-Z0-9]/g, '');

  let ok:boolean  = true;
  for (let letter of alphabet){

    if (!pangram.toLowerCase().includes(letter)){

      ok = false;
    }
  }
  return ok;
}



const alphabet = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];