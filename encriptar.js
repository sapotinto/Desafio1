
    /* La i: captura letra minuscula y mayusculas
        La g: captura toda la frase*/

function encriptar(){
    let texto, encriptado;
    /*----------------Accedo al elemento a traves de su id --------------*/
     texto = document.getElementById('textoAEncriptar').value.toLowerCase();

     encriptado = texto.replace(/e/img , 'enter');
     encriptado = encriptado.replace(/o/img , 'ober');
    encriptado = encriptado.replace(/i/img , 'imes');
     encriptado = encriptado. replace(/a/img , 'ai');
     encriptado = encriptado.replace(/u/img , 'ufat');

     /*1.	document.getElementById('id')//Acceder a elem a traves de su id
        2.	document.querySelector('selectorCSS')//Accedo al primer elem 
        que coincida con el selector CSS  */

      //----------------   tengo que ocultar a muñeco--------------------

    //   document.getElementById('muneco').style.display = 'none';
      document.getElementById('textoh3').style.display = 'none';//oculto el texto
     document.getElementById('textoDesencriptado').innerHTML = encriptado;
    document.getElementById('botoncopiar').style.display = 'show';
    document.getElementById('botoncopiar').style.display = 'inherit';
}

 let botonE= document.getElementById('botonEncriptar');
       botonE.onclick = encriptar;
    

function desencriptar(){
        let texto, encriptado;
         texto = document.getElementById('textoAEncriptar').value.toLowerCase();
    
     
         encriptado = texto.replace(/enter/img , 'e');
         encriptado = encriptado.replace(/imes/img , 'i');
         encriptado = encriptado. replace(/ai/img , 'a');
         encriptado = encriptado.replace(/ober/img , 'o');
         encriptado = encriptado.replace(/ufat/img , 'u');
    
         /*La propiedad Element.innerHTML devuelve o establece la sintaxis HTML
          describiendo los descendientes del elemento. */
          // document.getElementById('muneco').style.display = 'none';
          document.getElementById('textoh3').style.display = 'none';
          document.getElementById('textoDesencriptado').innerHTML = encriptado;
          document.getElementById('botoncopiar').style.display = 'show';
         document.getElementById('botoncopiar').style.display = 'inherit';
    }
    
    
     let botonD= document.getElementById('botondesencriptar');
           botonD.onclick = desencriptar; 

 function copiar(){
  /*Con el # le indico que es el id del html */
     let textoCopiado = document.querySelector('#textoDesencriptado')
            textoCopiado.select();
            document.execCommand('copy')    
            document.getElementById('textoAEncriptar').value = "";//limpio la caja de texto
 }
                    /* addEventListener (es un escuchador de eventos) */
  document.querySelector('#botoncopiar').addEventListener('click',copiar);