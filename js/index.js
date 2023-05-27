function Cliente(){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.domicilio = domicilio
    this.dni = dni
    this.paymentMethod = paymentMethod
}

const nombre = prompt ("Ingrese su nombre: ");
const apellido = prompt ("Ingrese su apellido: ");
const edad = Number(prompt("Ingese su edad: "));
const domicilio = prompt ("Ingese su domicilio: ");
const dni = Number(prompt ("Ingese su DNI: "));
const paymentMethod = prompt ("Ingese su metodo de pago: ");

let cliente = new Cliente ({
        nombre: nombre,
        apellido: apellido,
        edad: edad,
        domicilio: domicilio,
        dni: dni,
        paymentMethod: paymentMethod
})

alert (`Nombre: ${cliente.nombre} ${cliente.apellido} \nEdad: ${cliente.edad} \nDomicilio: ${cliente.domicilio} \nDNI: ${cliente.dni} \nMetodo de Pago: ${cliente.paymentMethod}`);

console.log(cliente);