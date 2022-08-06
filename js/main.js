function getData2(){
    let fecha= document.getElementById("fechaIngreso").value;
    let movimiento = document.getElementById("movimiento").value;
    let letras = document.getElementById("letrasUnidad").value;
    let numeros = +document.getElementById("numerosUnidad").value;
    let largo = document.getElementById("largo").value;
    let peso =+document.getElementById("pesoTarro").value;

    if (letras =="") {
        alert("INGRESE LETRAS")
        letras =document.getElementById("letrasUnidad").focus();
    }else 
        if(numeros ==""){
            alert("ingrese valor a NUMEROS")
            numeros=+document.getElementById("numerosUnidad").focus();
        }else 
            if(largo ==""){
            alert("ingrese MEDIDA")
            largo = document.getElementById("largo").focus();
        }else 
            if(peso==""){
                alert("ingrese PESO DEL TARRO")
                peso =+document.getElementById("pesoTarro").focus();
            }

    ///esta parte es un objeto--- const con llaves"
    const tarro={
        fecha: document.getElementById("fechaIngreso").value,
        movimiento : document.getElementById("movimiento").value,
        letras : document.getElementById("letrasUnidad").value,
        numeros : +document.getElementById("numerosUnidad").value,
        largo : document.getElementById("largo").value,
        peso :+document.getElementById("pesoTarro").value,
    }
    console.log(tarro)
}


























