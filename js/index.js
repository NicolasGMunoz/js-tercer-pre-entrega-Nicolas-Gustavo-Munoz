/*creamos los array´s de productos de la tienda*/
const productos1 = [
    {
        id: 1,
        name: "Mate Impresion 3D Harry Potter",
        price: 3200,
        foto: "../assets/matesIndex/Mate1.png"
    },
    {
        id: 2,
        name: "Mate Impresion 3D Naruto",
        price: 2700,
        foto: "../assets/matesIndex/Mate2.png"
    },
    {
        id: 3,
        name: "Mate Impresion 3D Snorlax",
        price: 2700,
        foto: "../assets/matesIndex/Mate3.png"
    },
]
const productos2 =[
    {
        id: 4,
        name: "Remera Negra Itachi",
        price: 3000,
        foto: "../assets/remerasIndex/Remera Itachi .png"
    },
    {
        id: 5,
        name: "Remera Negra Kakashi",
        price: 3500,
        foto: "../assets/remerasIndex/Remera Kakashi.png"
    },
    {
        id: 6,
        name: "Remera Negra Luffy",
        price: 3000,
        foto: "../assets/remerasIndex/Remera one piece 2.png"
    },
]

// let nombre = prompt ("Ingrese su nombre: ");
// let apellido = prompt ("Ingrese su apellido: ");
// let edad = Number(prompt("Ingese su edad: "));
// let domicilio = prompt ("Ingese su domicilio: ");
// let dni = Number(prompt ("Ingese su DNI: "));
// let paymentMethod = prompt ("Ingese su metodo de pago: ");
let productos3D = [];
let productosRemera = [];
let carrito = [];

/* Creamos la clase constructor de los productos  */
class Producto {
    constructor (id, name, price, foto){
        this.id = id
        this.name = name
        this.price = price
        this.foto = foto
    }
}

/* Funcion que pushea los productos */
function cargaDeProductos() {
    for (const producto of productos1){
        productos3D.push(new Producto(producto.id, producto.name, producto.price, producto.foto))
        }
    for (const producto of productos2){
        productosRemera.push(new Producto(producto.id, producto.name, producto.price, producto.foto))
        }
    }

    
cargaDeProductos();

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
// let cliente = new Cliente ({
//         nombre: nombre,
//         apellido: apellido,
//         edad: edad,
//         domicilio: domicilio,
//         dni: dni,
//         paymentMethod: paymentMethod
// })

// alert (`Nombre: ${cliente.nombre} ${cliente.apellido} \nEdad: ${cliente.edad} \nDomicilio: ${cliente.domicilio} \nDNI: ${cliente.dni} \nMetodo de Pago: ${cliente.paymentMethod}`);

// console.log(cliente);

// alert(cliente.verCliente());
// console.log(cliente.verCliente());



/* Creamos la funcion para agregar nuestro array de prodcutos con DOM */
function agregarProductosAlHtml1(){
    productos3D.forEach((producto)=>{
        let template = `          
        <div class="col-lg-4 ff">
        <div class="card transparent bb" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title ct">${producto.name}</h5>
        <p class="card-text ct">$${producto.price}</p>
        <a href="#" class="btn btn-primary bt ct">Agregar al Carrito</a>
        </div>
        </div>
        </div>
    `
    document.getElementById("3D").innerHTML += template
    })    
}
agregarProductosAlHtml1()

function agregarProductosAlHtml2(){
    productosRemera.forEach((producto)=>{
        let template = `          
        <div class="col-lg-4 ff">
        <div class="card transparent bb" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title ct">${producto.name}</h5>
        <p class="card-text ct">$${producto.price}</p>
        <a href="#" class="btn btn-primary bt ct">Agregar al Carrito</a>
        </div>
        </div>
    `
    document.getElementById("Remeras").innerHTML += template
    })
}
agregarProductosAlHtml2()