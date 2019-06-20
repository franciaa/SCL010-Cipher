
window.onload=()=>{

document.getElementById("btn-start").addEventListener("click",()=>
{  
                                                                     
    document.getElementById("first-page").style.display="none";
    document.getElementById("second-page").style.display="block";
     
})};


//boton cifrar

document.getElementById("btn-encode").addEventListener("click",()=>//en ()decia event
{
   

    let text = document.getElementById("message").value.toUpperCase();
    let number = parseInt(document.getElementById("num").value);
    let result=cipher.encode(text,number);//cipher.encode

    document.getElementById("result-message").innerHTML=result;
  
});


//Aqui va el codigo para dar click en el boton de descifrar

document.getElementById("btn-decode").addEventListener("click",()=>
{//event

    let text = document.getElementById("message").value.toUpperCase();
    let number =parseInt(document.getElementById("num").value);
    let result=cipher.decode(text,number);//cipher.decode
    document.getElementById("result-message").innerHTML=result;
 });

 document.getElementById("link").addEventListener("click",()=>
{  
}
);

  