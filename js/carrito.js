const borrarP = document.getElementById("borrarP")
const comprar = document.getElementById("comprar")
const finalizarCompra = document.getElementById("finalizarCompra")
const carritoVacio = document.getElementById("carritoVacio")
const loginVacio = document.getElementById("loginVacio")
const borrarC = document.getElementById("borrarC")
const borrarUnProducto = document.getElementsByClassName("borrarUnProducto")
let carritoAct = []

class Producto {
    constructor (id, name, price, foto){
        this.id = id
        this.name = name
        this.price = price
        this.foto = foto
    }
}

/* Recibo el local storage y creo un nuevo array */
function estaEsLaVencida(){
    let verCarrito = localStorage.getItem('carrito')
    carrito = JSON.parse(verCarrito)
    for (const producto of carrito){
    carritoAct.push(new Producto(producto.id, producto.name, producto.price, producto.foto))
    }
}

estaEsLaVencida()




/*funcion que recibe el arrary creado en la funcion estaEsLaVencida() y setea informacion en el dom
*/
function pasarCarrito (){
    if(carritoAct.length > 0)
    {
        if (localStorage.getItem('cliente') !== null)
        {   
            let verCliente = localStorage.getItem('cliente')
            cliente = JSON.parse(verCliente)
            carritoAct.forEach((producto)=>{
                let template = `
                    <div class="col-lg-1"></div>
                    <div class="col-lg-1 bb bt ct">
                    <button class="btn btn-primary transparent borrarUnProducto" value="${producto.id}">X</button>
                    </div>            
                    <div class="col-lg-3 carritoClas ff bb">
                    <img src=".${producto.foto}" alt="" style="width: 8rem; height: 8rem;">
                    </div>
                    <div class="col-lg-3 carritoClas bb">
                    <h5 class="mt-5" >${producto.name}</h5>
                    </div>
                    <div class="col-lg-2 carritoClas bb"> 
                    <p class="mt-5">$${producto.price}</p>
                    </div>
                    <div class="col-lg-2"></div>
                `
                document.getElementById("carrito").innerHTML += template
            }) 

        
            let montoFinal = carritoAct.reduce((i, producto) => {
                return i + producto.price
            }, 0)
            let template = `
                <div class="col-lg-2"></div>
                <div class="col-lg-2 bb ff carritoClas">
                <p class= "text-carrito1 mt-3">Nombre: ${cliente.nombre} ${cliente.apellido}</p>
                </div>
                <div class="col-lg-2 bb ff carritoClas">
                <p class= "text-carrito1 mt-3">Domicilio de entrega: ${cliente.domicilio}</p>
                </div>
                <div class="col-lg-2 bb ff carritoClas">
                <p class= "text-carrito1 mt-3">Metodo de Pago: ${cliente.paymentMethod}</p>
                </div>
                <div class="col-lg-1 bb ff carritoClas">
                <p class="mt-3">Productos totales: ${carrito.length}</p>
                </div>
                <div class="col-lg-1 bb ff ">
                <p class="mt-3">Monto total: ${montoFinal}</p>
                </div>
                <div class="col-lg-2"></div>

            `
            document.getElementById("carritoTotal").innerHTML += template
            finalizarCompra.classList.remove('visible')
            

        }else{
            carritoAct.forEach((producto)=>{
            let template = `
            <div class="col-lg-1"></div>
            <div class="col-lg-1 bb bt ct">
            <button class="btn btn-primary transparent borrarUnProducto" value="${producto.id}">X</button>
            </div>         
            <div class="col-lg-3 carritoClas ff bb">
            <img src=".${producto.foto}" alt="" style="width: 8rem; height: 8rem;">
            </div>
            <div class="col-lg-3 carritoClas bb">
            <h5 class="mt-5" >${producto.name}</h5>
            </div>
            <div class="col-lg-2 carritoClas bb"> 
            <p class="mt-5">$${producto.price}</p>
            </div>
            <div class="col-lg-2"></div>
        `
            document.getElementById("carrito").innerHTML += template
            }) 

        
            let montoFinal = carritoAct.reduce((i, producto) => {
             return i + producto.price
            }, 0)
            let template = `
                <div class="col-lg-3"></div>
                <div class="col-lg-2 bb ff">
                <h5>Productos totales: ${carrito.length}</h5>
                </div>
                <div class="col-lg-2"></div>
                <div class="col-lg-2 bb ff">Monto total: ${montoFinal}</div>
                <div class="col-lg-3"></div>

            `
            document.getElementById("carritoTotal").innerHTML += template
            loginVacio.classList.remove('visible')
            
        }
        borrarP.classList.remove('visible')
        carritoVacio.classList.add('visible')

    }else{

    }
}

pasarCarrito()




/* Boton borrar carrito completo */
borrarC.addEventListener('click',() => {
    Toastify({

        text: "Su carrito fue eliminado",
    
        duration: 2000
    
    }).showToast();
    localStorage. removeItem('carrito')
    setTimeout(() => {
        location.reload()
       }, 2000);
})

/* Boton comprar carrito */
comprar.addEventListener('click',() =>{
    Toastify({

        text: "la compra se realizo con exito",
    
        duration: 1000
    
    }).showToast();
    localStorage. clear()
    setTimeout(() => {
        location.reload()
       }, 2000);
})

/* Funcion que borra un solo producto */
function borrarProdcuto () {
    for (botonardo of borrarUnProducto){
        let id = botonardo.value
        botonardo.addEventListener('click', () =>{
            const index2 = carritoAct.findIndex(producto => producto.id == id)
            if (index2 !== -1){
                carritoAct.splice(index2, 1)
            }
            localStorage.setItem('carrito', JSON.stringify(carritoAct))
            

            Toastify({

                text: `Producto eliminado`,
            
                duration: 2000
            
            }).showToast();    
            setTimeout(() => {
                location.reload()
               }, 100);

        })
    }
}

borrarProdcuto ()