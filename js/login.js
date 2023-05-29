const formulario = document.getElementById("formulario")
const nombre = document.getElementById("nombre").value
const apellido = document.getElementById("apellido").value
const edad = document.getElementById("edad").value
const domicilio = document.getElementById("domicilio").value
const dni = document.getElementById("dni").value
const paymentMethod = document.getElementById("paymentMethod").value
const datosCliente = document.getElementById("datosCliente")

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
    verCliente = () =>{
        return `Nombre: ${cliente.nombre} ${cliente.apellido} \nEdad: ${cliente.edad} \nDomicilio: ${cliente.domicilio} \nDNI: ${cliente.dni} \nMetodo de Pago: ${cliente.paymentMethod}`
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


function agregarDatosCliente(){
   const datos = `            
        <div class="col-lg-3"></div>
        <div class="col-lg-6 bt">        
        <ul class="list-group fs mt-5">
        <li class="list-group-item transparent text">Nombre: ${cliente.nombre} ${cliente.nombre}</li>
        <li class="list-group-item transparent text">Edad: ${cliente.edad}</li>
        <li class="list-group-item transparent text">Domicilio: ${cliente.domicilio}</li>
        <li class="list-group-item transparent text">DNI: ${cliente.dni}</li>
        <li class="list-group-item transparent text">Metodo De Pago: ${cliente.paymentMethod}</li>
        </ul>
        </div>
        <div class="col-lg-3"></div>
        `
    document.getElementById("datosCliente").innerHTML += datos;
}


formulario.addEventListener('submit', (e)=> {
    e.preventDefault();
    cliente.nombre = document.getElementById("nombre").value
    cliente.apellido = document.getElementById("apellido").value
    cliente.edad = document.getElementById("edad").value
    cliente.domicilio = document.getElementById("domicilio").value
    cliente.dni = document.getElementById("dni").value
    cliente.paymentMethod = document.getElementById("paymentMethod").value
    
    agregarDatosCliente();
    console.log(cliente.verCliente());
})

