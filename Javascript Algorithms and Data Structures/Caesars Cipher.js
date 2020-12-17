function rot13(str) {

  //char coded 
  let cyph = [];
  //array for storing decyphered char code
  let deCharC = [];
  let decoded ='';

  //splits up and changes characters to charcode
  for (let i = 0; i<str.length; i++){
      //pushes and converts only the alphabetic characters
      if (str[i].match(/\w/g)){
       cyph.push(str.charCodeAt(i));
    } else {
        //pushes everything else
         cyph.push(str[i]);
    }
  };

  //offsets the char code 
  for (let v = 0; v<cyph.length; v++){
  //offset value
    let shiftValue = 13;
  //checks for char code up to 90
    if (cyph[v].toString().match(/[0-9]/) && cyph[v]+13 <= 90){
      deCharC.push(cyph[v]+shiftValue);

      //shifts char code back to 65
    } else if (cyph[v].toString().match(/[0-9]/) && cyph[v]+13 > 90){
   
      //changes the shift value to accomodate the jump after char code 90 
      shiftValue = cyph[v]+13 - 91  
      deCharC.push(65+shiftValue);
    } else {
      //pushes remaining stuff
      deCharC.push(cyph[v]);
    }
  }

  //converts char code back in to alphabetics
  decoded = deCharC.map(v => v.toString().match(/[0-9]/) ? String.fromCharCode(v): v).join('')
  return decoded;
}

rot13("SERR PBQR PNZC");