let pushBtn = document.getElementById("enviar")//hace referencia al ID y lo almacena en pushBtn
pushBtn.onmousedown= ()=> {console.log("hiciste click en CARGAR DATOS")}//usa una fuction anonima o fleca mejor conocida

function getData2(){
    // e.preventDefault();
    const tarroNew=[]
    const fecha= document.getElementById("fechaIngreso").value;
    const movimiento = document.getElementById("movimiento").value;
    const letras = document.getElementById("letrasUnidad").value;
    const numeros = +document.getElementById("numerosUnidad").value;
    const largo = document.getElementById("largo").value;
    const peso =+document.getElementById("pesoTarro").value;
    tarroNew.push(fecha,movimiento,letras,numeros,largo,peso)

    if(isNaN(fecha)&& isNaN(movimiento)&& letras != ""&& numeros!="" && isNaN(largo) && peso!="" ){    
        const $div_padre = document.getElementById("pushTarros")
        const $div_hijo =document.createElement("div")
        $div_hijo.className="row align-items-center"
        $div_padre.appendChild($div_hijo)
        for(const tarroIN of tarroNew){
            const $div1 = document.createElement("div")
            $div1.className="col"
            $div1.setAttribute("id","hijo")
            $div1.innerHTML=tarroIN
            $div_hijo.appendChild($div1)
        }
    }else{
        console.log("completar los campos")
    }
    document.getElementById("pushTarros").style.color="red" //le cambio el color al texto
    //ALMACENANDO EN SESSIONSTORAGE
    sessionStorage.setItem('tarroIN',JSON.stringify(tarroNew));  //se envia la info en modo STRING
    const enJAVA =JSON.parse(sessionStorage.getItem("tarroIN"))//se obtiene info modo OBJECT
    
    
    
}
//RESETAR EL FORMULARIO 
function reset_formulario(){
    document.getElementById("formulario").reset()
}






// localStorage.clear()




 





















