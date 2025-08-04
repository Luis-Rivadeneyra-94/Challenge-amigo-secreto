// Creación de array
let amigo = [];
function agregarAmigo(){
    const nombreIngresado = document.getElementById("amigo").value
    if(nombreIngresado==""){
        alert("Por favor, inserte un nombre");
    }
    else{
    amigo.push(nombreIngresado);
    document.getElementById("amigo").value="";
    actualizarListaAmigos();
    }
}
function actualizarListaAmigos(){
    document.getElementById("listaAmigos").innerHTML = "";
    for(let i=0;i<amigo.length;i++){
        let nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo[i];
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);
    }
}
function sortearAmigo(){
    if (amigo.length==0){
        alert("La lista de amigos esta vacia");
    }
    else{
        indiceSorteo=parseInt(Math.floor(Math.random()*amigo.length));
        document.getElementById("resultado").innerHTML= amigo[indiceSorteo];
    }
}