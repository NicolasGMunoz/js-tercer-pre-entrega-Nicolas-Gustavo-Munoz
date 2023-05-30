const formulario = document.getElementById("formulario")
const cargarDatos = document.getElementById("cargarDatos")
const nombre = document.getElementById("nombre").value
const apellido = document.getElementById("apellido").value
const edad = document.getElementById("edad").value
const domicilio = document.getElementById("domicilio").value
const dni = document.getElementById("dni").value
const paymentMethod = document.getElementById("paymentMethod").value
const datosCliente = document.getElementById("datosCliente")
const sectionform = document.getElementById("sectionForm")
const controlForm = document.querySelectorAll(".form-control")
const cargarNuevo = document.getElementById("cargarNuevo")
const btnCargar = document.getElementById("btnCargar")
let verdad = true;

/* Creamos la clase constructora de cliente */
class Cliente{
    constructor (obj){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.domicilio = domicilio
        this.dni = dni
        this.paymentMethod = paymentMethod
    }
}

/* Creamos el objeto cliente */
let cliente = new Cliente ({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        domicilio: domicilio,
        dni: dni,
        paymentMethod: paymentMethod
})

/* Agregamos datos del cliente por dom */
function agregarDatosCliente(){
   const datos = `            
        <div class="col-lg-3"></div>
        <div class="col-lg-6 bt">        
        <ul class="list-group fs mt-5">
        <li class="list-group-item transparent text">Nombre: ${cliente.nombre} ${cliente.apellido}</li>
        <li class="list-group-item transparent text">Edad: ${cliente.edad}</li>
        <li class="list-group-item transparent text">Domicilio: ${cliente.domicilio}</li>
        <li class="list-group-item transparent text">DNI: ${cliente.dni}</li>
        <li class="list-group-item transparent text">Metodo De Pago: ${cliente.paymentMethod}</li>
        </ul>
        </div>
        <div class="col-lg-3"></div>
        `
    document.getElementById("datosCliente").innerHTML += datos;
    datosCliente.classList.remove('visible')
    sectionform.classList.add('visible')
    cargarNuevo.classList.remove('visible')
}

/* validacion de datos correctos */
controlForm.forEach(input => {
    input.addEventListener('input', () => {
        if (controlForm[0].value && controlForm[1].value && controlForm[2].value >= 18 && controlForm[3].value && controlForm[4].value.length >=7 && controlForm[4].value.length <=8 && controlForm[5].value != "Metodo de Pago"){
            cargarDatos.classList.remove("botonApagado")
            verdad = true;
        }else{
            cargarDatos.classList.add("botonApagado")
            verdad = false;
        }
    })
});

/*cargamos los datos obtenidos del formulario al objeto cliente */
formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    cliente.nombre = document.getElementById("nombre").value
    cliente.apellido = document.getElementById("apellido").value
    cliente.edad = document.getElementById("edad").value
    cliente.domicilio = document.getElementById("domicilio").value
    cliente.dni = document.getElementById("dni").value
    cliente.paymentMethod = document.getElementById("paymentMethod").value
    
    if (verdad == true){
        agregarDatosCliente();
    }else{

    }
    
    
})
/* Boton para recargar form y pagina */
btnCargar.addEventListener('click', () => {
   setTimeout(() => {
    location.reload()
   }, 2000);
})