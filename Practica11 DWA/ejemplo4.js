let productos = [
    {nombre: "Laptop", precio: 8000, categoria: "Electronica"},
    {nombre: "Bicicleta", precio: 200, categoria: "Deportes"},
    {nombre: "Telefono", precio: 500, categoria: "Electronica"},
    {nombre: "Zapatillas", precio: 100, categoria: "Deporte"}
];

// Función que filtra productos por categoría y reorganiza los precios en un arreglo
function filtrarProductosPorCategorias(categoria, ...listaProductos) {
    let filtrados = listaProductos.filter(producto => producto.categoria == categoria);
    let precios = filtrados.map(producto => producto.precio);
    return {
        categoria,
        productosFiltrados: filtrados,
        precios: [...precios]
    };
}

// Simulamos el filtro de productos por categoría "Electronica"
let resultado = filtrarProductosPorCategorias("Electronica", ...productos);
console.log(resultado);