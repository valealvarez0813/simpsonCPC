let url="http://api.giphy.com/v1/gifs/search?api_key=yicX7MCacAgFw9HjrA2RZ2oPIQsGRbyT&limit=9&q=simpons"

let botonBusqueda=document.getElementById("BotonBusqueda");
parametroBusqueda=document.getElementById("Busqueda");

botonBusqueda.addEventListener("click",BuscarDatos)

ConectarGiphy(1);

function BuscarDatos(){
     let busqueda=parametroBusqueda.value;
    url=`http://api.giphy.com/v1/gifs/search?api_key=fEAR9TrqgjatwcOtKAPuEkthH7dg1Z9k&limit=9&q=${busqueda}`;
   ConectarGiphy();
}
function ConectarGiphy(condicion){

    if(condicion==1){
   
     fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarDatos(datos));
     
}else{
     fetch(url)
    .then(respuesta=>respuesta.json())
    .then(datos=>organizarBusqueda(datos));
}
}

function organizarDatos(datos){
  

    let contenedorpadre=document.getElementById("contenedor");
    let arregloDatos=datos.data;

    arregloDatos.map(function(dato){

        let imagen=document.createElement("img");
        imagen.src=dato.images.downsized_medium.url;
        imagen.classList.add("P-5")
        contenedorpadre.appendChild(imagen);

    });
}

function organizarBusqueda(datos){
let contenedorpadre=document.getElementById("contenedor");
while(contenedorpadre.firstChild){

    contenedorpadre.removeChild(contenedorpadre.firstChild)
}
let arregloDatos=datos.data;

arregloDatos.map(function(dato){

    let imagen=document.createElement("img");
    imagen.src=dato.images.downsized_medium.url;
    imagen.classList.add("P-5")
    contenedorpadre.appendChild(imagen);

});
}
