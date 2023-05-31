const comprar = document.getElementById("comprar")
const finalizarCompra = document.getElementById("finalizarCompra")
const carritoVacio = document.getElementById("carritoVacio")

/*funcion que recibe el arrary del localstorage y setea informacion en el dom
*/
function pasarCarrito (){
    if(localStorage.getItem('carrito') !== null)
    {
        if (localStorage.getItem('cliente') !== null)
        {
            let verCliente = localStorage.getItem('cliente')
            cliente = JSON.parse(verCliente)
            let verCarrito = localStorage.getItem('carrito')
            carrito = JSON.parse(verCarrito)
            carrito.forEach((producto)=>{
                let template = `
                    <div class="col-lg-2"></div>          
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

        
            let montoFinal = carrito.reduce((i, producto) => {
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
            let verCarrito = localStorage.getItem('carrito')
            carrito = JSON.parse(verCarrito)
            carrito.forEach((producto)=>{
            let template = `
            <div class="col-lg-2"></div>          
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

        
            let montoFinal = carrito.reduce((i, producto) => {
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
        }
        carritoVacio.classList.add('visible')
    }else{

    }
}

pasarCarrito()

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