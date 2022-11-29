//CONTAINER 
let container = document.getElementById('container')
container.style.display="flex"
container.style.width="50%"
container.style.height="auto"
container.style.gap="60px"
container.style.margin="0"


//FORMULARIO 
let agregar = ()=> {
    container.innerHTML = `
    <form action="">
    <div id="formulario">
    <label>Nombre del trabajador:</label>
    <input type="text" id="nombre" required/>
    <label>Cantidad de horas trabajadas:</label>
    <input type="number" id="horas" required/>
    <label>Categoría:</label>
    <select name="" id="clase" required>
        <option value="40">A</option>
        <option value="35">B</option>
        <option value="30">C</option>
    </select>
    <label>Años de servicio:</label>
    <input type="number" id="yearsWork" required/>
    <input type="submit" value="Calcular" id="calcular" onclick="result(event)"/>
    <input type="reset" value="Limpiar"/>
    </div>
    </form>
    
    <div id="resultado">
    </div>
    `
}

//AGREGAR DATOS 
agregar()
let nombre = document.getElementById('nombre')
let horas = document.getElementById('horas')
let clase = document.getElementById('clase')

let  yearsWork = document.getElementById('yearsWork')
let formulario = document.getElementById('formulario')

formulario.style.display="flex"
formulario.style.flexDirection="column"
formulario.style.gap="10px"

let resultado = document.getElementById('resultado')
resultado.style.width="400px"
resultado.style.height="200px"
resultado.style.padding="10px"
resultado.style.border="1px solid"


//BONIFICACION 
const bono = ()=> {
    const sueldo = `${horas.value * clase.value}`
    let bonficacion = 0
    if(yearsWork.value>=1 || yearsWork<= 3){
       bonificacion = sueldo * 15/100
    } else if (yearsWork.value>=4 || yearsWork.value <= 7) {
        bonificacion = sueldo * 20/100
        
} else if (yearsWork.value >= 8|| yearsWork.value>=12) {
    bonificacion = sueldo  * 30/100
    
} else if(yearsWork.value>= 13) {
    bonificacion = sueldo * 35/100
    
}
return bonificacion;
}


 // RESULTADO   
const result = (event)=> {
    console.log(horas.value);
    console.log(clase.value);
    const sueldo = `${horas.value * clase.value}`
    const sueldoNeto = parseInt(sueldo) + bono()
    console.log(typeof sueldo);
    console.log(typeof bono());
    event.preventDefault();
    resultado.innerHTML = `
    <p>El sueldo básico de ${nombre.value} es de: S/. ${sueldo}</p>
    <p>Bonificación por años de servicio es de: S/.  ${bono()}</p>
    <p>Sueldo neto es de: S/. ${sueldoNeto}</p>
      `
}
