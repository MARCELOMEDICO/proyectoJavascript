function getData(){
    //let fecha= document.getElementById("fechaIngreso").value;
    //let movimiento = document.getElementById("movimiento").value;
    let letras = document.getElementById("letrasUnidad").value;
    let numeros = +document.getElementById("numerosUnidad").value;
    let largo = document.getElementById("largo").value;
    let peso =+document.getElementById("pesoTarro").value;
    let detener=false
    
    
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
    


        
        
        
        
        
        
    
    
    // alert    ("la fecha es "+ fecha)
    // alert    ("el movimiento es"+ movimiento)
    // alert    ("la letras es"+ letras)
    // alert    ("el numero es"+ numeros)
    // alert    ("el alrgo es"+ largo)
    // alert    ("el peso es"+ peso)
    
    
}