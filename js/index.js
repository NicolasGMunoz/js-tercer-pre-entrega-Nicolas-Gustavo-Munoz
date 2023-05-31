let productos3D = [];
let productosRemera = [];
let carrito = [];
let max = 1000;
let min = 0;
const btAddToCard = document.getElementsByClassName('btAddToCard')


// const bt1 = document.getElementById("1")
// const bt2 = document.getElementById("bt2")
// const bt3 = document.getElementById("bt3")
// const bt4 = document.getElementById("bt4")
// const bt5 = document.getElementById("bt5")
// const bt6 = document.getElementById("bt6")


/*creamos los array´s de productos de la tienda*/
const productos1 = [
    {
        id: 1,
        name: "Mate Impresion 3D Harry Potter",
        price: 3200,
        foto: "./assets/matesIndex/Mate1.png"
    },
    {
        id: 2,
        name: "Mate Impresion 3D Naruto",
        price: 2700,
        foto: "./assets/matesIndex/Mate2.png"
    },
    {
        id: 3,
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
        <div class="card-body">
        <h5 class="card-title ct">${producto.name}</h5>
        <p class="card-text ct">$${producto.price}</p>
        <div class="botonParaComprar"><button class="btn btn-primary bt ct btAddToCard" value="${producto.id}">Agregar al Carrito</button></div>
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
        <div class="botonParaComprar"><button class="btn btn-primary bt ct btAddToCard" value="${producto.id}">Agregar al Carrito</button></div>
        </div>
        </div>
        </div>
    `
    document.getElementById("Remeras").innerHTML += template
    })
}
agregarProductosAlHtml2()


/* funcion que recibe un value para setearlo como id y poder cargar productos al carrito */
function cargaBt(){
    for(const btn of btAddToCard){
        btn.addEventListener ('click', () => {
            
            if (btn.value > 0 && btn.value < 4){
                let buscado3D = btn.value

                let encontrado3D = productos3D.find((producto)=>{
                    return producto.id == buscado3D
                })

                carrito.push(encontrado3D)
            }else if (btn.value > 3 && btn.value < 7){
                let buscadoRem = btn.value
            
                let encontradoRem = productosRemera.find((producto)=>{
                    return producto.id == buscadoRem
                   
                })
                carrito.push(encontradoRem)
            }

            localStorage.setItem('carrito', JSON.stringify(carrito))
            Toastify({

                text: "Producto agregado correctamente",
                
                duration: 1000
                
            }).showToast();
        }) 
    }
}
cargaBt()


