// se referencian las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombreUsuario=document.getElementById("nombreUsuario");
let correoUsuario=document.getElementById("correoUsuario");
let password1=document.getElementById("password1");


boton.addEventListener("click",recibirDatosFormulario);

function recibirDatosFormulario(){

    let nombreUsuariovalor=nombreUsuario.value;
    let correoUsuariovalor=correoUsuario.value;
    let password1valor=password1.value;
    
    

    validarCaminos(nombreUsuariovalor,correoUsuariovalor,password1valor);


}

function validarCaminos(nombreUsuariovalor,correoUsuariovalor,password1valor){

if(nombreUsuariovalor=="" && correoUsuariovalor=="" &&  password1valor==""){
  nombreUsuario.classList.add("is-invalid")
  correoUsuario.classList.add("is-invalid")
  password1.classList.add("is-invalid");

}

else if( correoUsuariovalor=="" &&  password1valor==""){
  nombreUsuario.classList.remove("is-invalid")
  correoUsuario.classList.add("is-invalid")
  password1.classList.add("is-invalid")
}
else if(nombreUsuariovalor=="" &&  password1valor==""){
  nombreUsuario.classList.add("is-invalid")
  correoUsuario.classList.remove("is-invalid")
  password1.classList.add("is-invalid")
}
else if(nombreUsuariovalor=="" && correoUsuariovalor==""){
  nombreUsuario.classList.add("is-invalid")
  correoUsuario.classList.add("is-invalid")
  password1.classList.remove("is-invalid")

}
else if(nombreUsuariovalor==""){
  nombreUsuario.classList.add("is-invalid")
  correoUsuario.classList.remove("is-invalid")
  password1.classList.remove("is-invalid")
}
else if(correoUsuariovalor==""){
  nombreUsuario.classList.remove("is-invalid")
  correoUsuario.classList.add("is-invalid")
  password1.classList.remove("is-invalid")
}
else if(password1valor==""){
  nombreUsuario.classList.remove("is-invalid")
  correoUsuario.classList.remove("is-invalid")
  password1.classList.add("is-invalid")

}
else{
  nombreUsuario.classList.remove("is-invalid")
  correoUsuario.classList.remove("is-invalid")
  password1.classList.remove("is-invalid")

}
}





