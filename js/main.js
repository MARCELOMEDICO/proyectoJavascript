function getData2(e){
    e.preventDefault();

    let fecha= document.getElementById("fechaIngreso").value;
    let movimiento = document.getElementById("movimiento").value;
    let letras = document.getElementById("letrasUnidad").value;
    let numeros = +document.getElementById("numerosUnidad").value;
    let largo = document.getElementById("largo").value;
    let peso =+document.getElementById("pesoTarro").value;
    

    // if (letras =="") {
    //     alert("INGRESE LETRAS")
    //     letras =document.getElementById("letrasUnidad").focus();
    // }else 
    //     if(numeros ==""){
    //         alert("ingrese valor a NUMEROS")
    //         numeros=+document.getElementById("numerosUnidad").focus();
    //     }else 
    //         if(largo ==""){
    //         alert("ingrese MEDIDA")
    //         largo = document.getElementById("largo").focus();
    //     }else 
    //         if(peso==""){
    //             alert("ingrese PESO DEL TARRO")
    //             peso =+document.getElementById("pesoTarro").focus();
    //         }


    //AQUI AGREGA CONTENIDO AL ARRAY
    const tarroNew=[]
    tarroNew.push(fecha,movimiento,letras,numeros,largo,peso)
    
    console.log(tarroNew.join("\n"))
    let taro = document.querySelector("#pushTarros")//selcciono donde voy a colocar el texto
    taro.innerHTML="<h2>el ultimo tarro que ingresaste fue</h2>";
    taro.className=("nuevo")
    let p =document.createElement("p")
    p.innerHTML=tarroNew
    taro.append(p)
    document.getElementById("pushTarros").style.color="red" 
    

    
    
}
    

























