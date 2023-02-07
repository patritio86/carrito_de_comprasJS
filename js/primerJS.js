//Esta funcion  me imprime los objetos produtos de una lista en la consola.
function imprimirProductos(array){
    for (obj of array) {
        console.log(obj);
        }
}
//Esta funcion me imprime los objetos productos con los atributos que quiera mostrar en un alert.
function impProductos(array){
    let ListProducto= array.map((array)=>"Id: "+array.id+" "+"Nombre: "+ array.nombre+" "+" Tipo: "+array.tipo+ " "+"Cantidad:" +array.cantidad
    + " "+"Descripcion: " + array.desc+" "+"Precio: " + array.precio+" "+"Talle: " + array.talle);
    alert(ListProducto.join(" -|- "));
}
// esta funcion agrega al array carrito los productos cantidades de cada uno y el precio. 
function agregarAlCarrito(seleccion, array){
    while(seleccion!="no".toUpperCase()){
        let producto=parseInt(prompt("Ingrese el numero de Id del producto"));
        let precio=0;
        switch(producto){
                case 1:
                    precio=1200;
                break;
                case 2:
                    precio=1100;
                break;
                case 3:
                    precio=1200;
                break;
                case 4:
                    precio=1400;
                break;
                case 5:
                    precio=1200;
                break;
                case 6:
                    precio=1500;
                break;
                case 7:
                    precio=500;
                break;
                case 8:
                    precio=500;
                break;
                case 9:
                    precio=500;
                break;
                case 10:
                    precio=700;
                break;
                case 11:
                    precio=700;
                break;
                case 12:
                    precio=700;
                break;
                case 13:
                    precio=900;
                break;
                case 14:
                    precio=1400;
                break;
                case 15:
                    precio=7000;
                break;
                case 16:
                    precio=777;
                break;
                case 17:
                    precio=234;
                break;
                case 18:
                    precio=1560;
                break;
                case 19:
                    precio=1600;
                break;
                case 20:
                    precio=3200;
                break;
                case 21:
                    precio=2300;
                break;
                case 22:
                    precio=5600;
                break;
                case 23:
                    precio=1700;
                break;
                case 24:
                    precio=800;
                break;
                default:
                    break;

        }
        let unidades=parseInt(prompt("Ingrese las cantidades de cada producto"));
        array.push({producto, unidades,precio})
        console.log(array);
        seleccion=prompt("Desea seguir comprando");


    }
    
}
//Esta funcion me devuelve en consola el producto la cantidad y el total del precio por esos productos.
function totales(argumento,array){
    alert("gracias por la compra");
    array.forEach(carritoFinal => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},
        Total a pagar por los producto ${carritoFinal.unidades*carritoFinal.precio}`)
    });
}
//Esta funcion devuelve por consola el total a pagar por la compra.
function totalFactura(array){
    const total=array.reduce((acumulador,el)=>acumulador+el.precio*el.unidades,0);
    console.log(`Total de la factura: ${total}`)
}


//Comienzo creando el stock de productos  
const Productos = [
    {id: 1, nombre: "Buzo1", tipo: "buzo", cantidad: 10, desc: "Un buzo que re va con vos", precio: 1200, talle: "L"},
    {id: 2, nombre: "Buzo2", tipo: "buzo", cantidad: 12, desc: "Un buzo que re va con vos", precio: 1100, talle: "L"},
    {id: 3, nombre: "Buzo3", tipo: "buzo", cantidad: 12, desc: "Un buzo que re va con vos", precio: 1200, talle: "M"},
    {id: 4, nombre: "Buzo4", tipo: "buzo", cantidad: 12, desc: "Un buzo que re va con vos", precio: 1400, talle: "M"},
    {id: 5, nombre: "Buzo5", tipo: "buzo", cantidad: 10, desc: "Un buzo que re va con vos", precio: 1200, talle: "S"},
    {id: 6, nombre: "Buzo6", tipo: "buzo", cantidad: 10, desc: "Un buzo que re va con vos", precio: 1500, talle: "S"},
    {id: 7, nombre: "Remera1", tipo: "remera", cantidad: 15, desc: "Una remera que re va con vos", precio: 500, talle: "L"},
    {id: 8, nombre: "Remera2", tipo: "remera", cantidad: 15, desc: "Una remera que re va con vos", precio: 500, talle: "L"},
    {id: 9, nombre: "Remera3", tipo: "remera", cantidad: 15, desc: "Una remera que re va con vos", precio: 500, talle: "M"},
    {id: 10, nombre: "Remera4", tipo: "remera", cantidad: 14, desc: "Una remera que re va con vos", precio: 700, talle: "M"},
    {id: 11, nombre: "Remera5", tipo: "remera", cantidad: 13,desc: "Una remera que re va con vos", precio: 700, talle: "S"},
    {id: 12, nombre: "Remera6", tipo: "remera", cantidad: 13, desc: "Una remera que re va con vos", precio: 700, talle: "S"},
    {id: 13, nombre: "Camisa1", tipo: "camisa", cantidad: 13, desc: "Una camisa que re va con vos", precio: 900, talle: "L"},
    {id: 14, nombre: "Camisa2", tipo: "camisa", cantidad: 11, desc: "Una camisa que re va con vos", precio: 1400, talle: "S"},
    {id: 15, nombre: "Camisa3", tipo: "camisa", cantidad: 11, desc: "Una camisa que re va con vos", precio: 7000, talle: "L"},
    {id: 16, nombre: "Camisa4", tipo: "camisa", cantidad: 11, desc: "Una camisa que re va con vos", precio: 777, talle: "S"},
    {id: 17, nombre: "Camisa5", tipo: "camisa", cantidad: 18, desc: "Una camisa que re va con vos", precio: 234, talle: "S"},
    {id: 18, nombre: "Camisa6", tipo: "camisa", cantidad: 18, desc: "Una camisa que re va con vos", precio: 1560, talle: "M"},
    {id: 19, nombre: "Pantalon1", tipo: "pantalon", cantidad: 18, desc: "Una pantalon que re va con vos", precio: 1600, talle: "L"},
    {id: 20, nombre: "Pantalon2", tipo: "pantalon", cantidad: 14, desc: "Una pantalon que re va con vos", precio: 3200, talle: "L"},
    {id: 21, nombre: "Pantalon3", tipo: "pantalon", cantidad: 14, desc: "Una pantalon que re va con vos", precio: 2300, talle: "M"},
    {id: 22, nombre: "Pantalon4", tipo: "pantalon", cantidad: 15, desc: "Una pantalon que re va con vos", precio: 5600, talle: "M"},
    {id: 23, nombre: "Pantalon5", tipo: "pantalon", cantidad: 10, desc: "Una pantalon que re va con vos", precio: 1700, talle: "S"},
    {id: 24, nombre: "Pantalon6", tipo: "pantalon", cantidad: 10, desc: "Una pantalon que re va con vos", precio: 800, talle: "S"}
];

// Creo el array vacio, el carrito donde voy a enviar los productos seleccionados 
let carrito =[];

// creo la variable booleana en false para ingresar al bucle.
let ingresar=false;

// Creo el bucle y un if para consultar si quiere ingresar o no, cargo el carrito he imprimo la factura con sus totales. 
while(!ingresar){
    let op=prompt("desea ingresar a comprar");
    if(op=="si".toUpperCase()){
    alert("a continuacion lista de productos");
    imprimirProductos(Productos);
    impProductos(Productos);
    agregarAlCarrito(op,carrito);
    }else{
        totales(op,carrito);
        totalFactura(carrito);
        ingresar=true;
    }
}



