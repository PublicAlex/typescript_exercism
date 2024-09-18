export function decodedResistorValue(trio:string[]):string {

  let firtsTwo:string = "";
  let ceros:string = "";
  let finalPart: string = "";
  
  for (const fistTwos of trio.slice(0,2)){
    let value = COLORS.indexOf(fistTwos).toString();
      

      if ( value != "0"){
        firtsTwo += value;
      }else{
        if(firtsTwo == ""){
          continue;
        }
          ceros += value;
      }

  }
    if(firtsTwo == ""){
        return "0 ohms"
    }
  

  
  for (let i=0; i < COLORS.indexOf(trio[2]); i++){
      ceros += "0"
  }

  if (ceros.length < 2){
    finalPart = ceros + " ohms";
  }
  if (ceros.length >= 3 && ceros.length <=5){
    finalPart = ceros.slice(0,-3) + " kiloohms";
  }
  if (ceros.length >= 6 && ceros.length <=8){
    finalPart = ceros.slice(0,-6) + " megaohms";
  }
  if (ceros.length >= 9 && ceros.length <=11){
    finalPart = ceros.slice(0,-9) + " gigaohms";
  }
  
  
  return firtsTwo + finalPart;

}



const COLORS: string[]=
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