let productos3D = [];
let productosRemera = [];
let carrito = [];
const bt1 = document.getElementById("1")
const bt2 = document.getElementById("bt2")
const bt3 = document.getElementById("bt3")
const bt4 = document.getElementById("bt4")
const bt5 = document.getElementById("bt5")
const bt6 = document.getElementById("bt6")


/*creamos los array´s de productos de la tienda*/
const productos1 = [
    {
        id: "1",
        name: "Mate Impresion 3D Harry Potter",
        price: 3200,
        foto: "./assets/matesIndex/Mate1.png"
    },
    {
        id: "2",
        name: "Mate Impresion 3D Naruto",
        price: 2700,
        foto: "./assets/matesIndex/Mate2.png"
    },
    {
        id: "3",
        name: "Mate Impresion 3D Snorlax",
        price: 2700,
        foto: "./assets/matesIndex/Mate3.png"
    },
]
const productos2 =[
    {
        id: 4,
        name: "Remera Negra Itachi",
        price: 3000,
        foto: "./assets/remerasIndex/Remera Itachi .png"
    },
    {
        id: 5,
        name: "Remera Negra Kakashi",
        price: 3500,
        foto: "./assets/remerasIndex/Remera Kakashi.png"
    },
    {
        id: 6,
        name: "Remera Negra Luffy",
        price: 3000,
        foto: "./assets/remerasIndex/Remera one piece 2.png"
    },
]


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


/* Creamos la funcion para agregar nuestro array de prodcutos con DOM */
function agregarProductosAlHtml1(){
    productos3D.forEach((producto)=>{
        let template = `          
        <div class="col-lg-4 ff">
        <div class="card transparent bb" style="width: 18rem;">
        <img src="${producto.foto}" class="card-img-top" alt="...">
        <div class="card-body ">
        <h5 class="card-title ct">${producto.name}</h5>
        <p class="card-text ct">$${producto.price}</p>
        <a href="#" class="btn btn-primary bt ct " id="${producto.id}">Agregar al Carrito</a>
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
        <a href="#" class="btn btn-primary bt ct" id="bt${producto.id}">Agregar al Carrito</a>
        </div>
        </div>
        </div>
    `
    document.getElementById("Remeras").innerHTML += template
    })
}
agregarProductosAlHtml2()


function cargaBt1(){
    let productoBuscado = 1;
    let prodcutoEncontrado = productos3D.find((producto)=>{
        return producto.id == productoBuscado
    })
    carrito.push(prodcutoEncontrado)
    for (const producto of carrito){
        console.log(producto.id + " " + producto.name + " " + producto.price);
    }
}

bt1.addEventListener("click", () =>{
    cargaBt1();
})

