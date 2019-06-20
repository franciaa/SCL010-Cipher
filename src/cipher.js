
window.cipher = {

  encode: (text,number) => {

    let result="";
  
    for(let i=0; i<text.length; i++){
        let codeAscii=text.charCodeAt(i);
        let offset=(codeAscii-65 + number)%26+65;
        result+=String.fromCharCode(offset);
    }
    
return result;
  },
 

 decode: (text,number) => {

  let result="";

  for(let i=0; i <text.length; i++) {
    let codeAscii=text.charCodeAt(i);
   let offset=(codeAscii-65-number)%26+65;
    result+=String.fromCharCode(offset);
  }

  return result;
}  

}
