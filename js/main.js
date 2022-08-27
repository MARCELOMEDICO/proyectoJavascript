let pushBtn = document.getElementById("enviar")//hace referencia al ID y lo almacena en pushBtn
// pushBtn.onmousedown= ()=> {console.log("hiciste click en CARGAR DATOS")}//usa una fuction anonima o fleca mejor conocida
function getData2(){//creando el objeto
    // e.preventDefault();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'ingresate unidad nueva',
        showConfirmButton: false,
        timer: 1500
      })
    function tarroIN (fecha,movimiento,letras,numeros,largo,peso){
        this.fecha= fecha;
        this.movimiento=movimiento;
        this.letras=letras;
        this.numeros=numeros;
        this.largo=largo;
        this.peso=peso;
    }
    //al no tener variable definida "const,let,var el valor pasa a ser global"
    fecha= document.getElementById("fechaIngreso").value;
    movimiento = document.getElementById("movimiento").value;
    letras = document.getElementById("letrasUnidad").value;
    numeros = +document.getElementById("numerosUnidad").value;
    largo = document.getElementById("largo").value;
    peso =+document.getElementById("pesoTarro").value;
    tarroNuevo =new tarroIN(fecha,movimiento,letras,numeros,largo,peso)
    //hace el llamado de otra function
    validacionDatos ();
}
function validacionDatos (){
    if(isNaN(fecha)&& isNaN(movimiento)&& letras != ""&& numeros!="" && isNaN(largo) && peso!="" ){
        agregarUnidad();       
    }else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Informacion Incompleta!',
          })
    }
}
const tarroNew=[]
function agregarUnidad(){
    tarroNew.push(tarroNuevo)
    document.getElementById("pushTarros").innerHTML +=
     `<div class="row align-items-center"><div class="col">${JSON.stringify(tarroNuevo)}</div</div>`
     //almacenar en sessionStorage
     const enString = sessionStorage.setItem('tarroIN',JSON.stringify(tarroNew));  //se envia la info en modo STRING
     const enJAVA =JSON.parse(sessionStorage.getItem("tarroIN"))//se obtiene info modo OBJECT
    console.log(enJAVA)//apricacion de spread
    console.log(tarroNew.length)//apricacion de spread
}
document.getElementById("pushTarros").style.color="red" //le cambio el color al texto
//RESETAR EL FORMULARIO 
function reset_formulario(){
    document.getElementById("formulario").reset()
    Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'limpiaste el formulario',
        showConfirmButton: false,
        timer: 1500
      })
}






// localStorage.clear()




 





















