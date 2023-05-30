/*funcion que recibe el arrary del localstorage y setea informacion en el dom
*/
function pasarCarrito (){
    if(localStorage.getItem('carrito') !== null){
        let verCarrito = localStorage.getItem('carrito')
        carrito = JSON.parse(verCarrito)
        carrito.forEach((producto)=>{
            let template = `
            <div class="col-lg-3"></div>          
            <div class="col-lg-2 ff bb">
            <img src=".${producto.foto}" alt="" style="width: 8rem; height: 8rem;">
            </div>
            <div class="col-lg-2 bb">
            <h5>${producto.name}</h5>
            </div>
            <div class="col-lg-2 bb">
            <p>$${producto.price}</p>
            </div>
            <div class="col-lg-3"></div>
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
}

pasarCarrito()