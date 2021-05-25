// se referencian las etiquetas a controlar
let boton=document.getElementById("botonEnvio");
let nombreUsuario=document.getElementById("nombreUsuario");
let correoUsuario=document.getElementById("correoUsuario");
let password1=document.getElementById("password1");
let modal=new bootstrap.Modal(document.getElementById("mensaje"));
let formulario=document.getElementById("formulario");

let llave1;
let llave2;
let llave3;


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

  //console.log(nombreUsuariovalor,correoUsuariovalor,password1valor);
  llave1="nombre="+nombreUsuariovalor;
  llave2="correo="+correoUsuariovalor;
  llave3="password="+password1valor;
  
  conectarAPI();

}
}
function conectarAPI(){
  let url="http://localhost/apicpc/public/usuarios/nuevo";
   
  let parametros={
    method:"POST",
    headers:{"Content-Type": 'application/x-www-form-urlencoded'},
    body:llave1+"&"+llave2+"&"+llave3
  }
  fetch(url,parametros)
    .then(respuesta=>respuesta.json())
    .then(datos=>validarRespuesta(datos));
}

function validarRespuesta(datos){
if(datos.estado){
  modal.show();
  formulario.reset();
}
}



