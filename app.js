// Creación de array
Let amigo = [];
function agregarAmigo(){
    const nombreIngresado=document.getElementById("amigo").value
    if(nombreIngresado==""){
        alert("Por favor, inserte un nombre.);
    }
    else{
    amigo.push(nombreIngresado);
    document.getElementById("amigo").value="";    
    }
}