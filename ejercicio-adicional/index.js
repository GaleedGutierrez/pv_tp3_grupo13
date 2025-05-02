const productos = [
	{ descripcion: 'Teclado', precio: 30_000 },
	{ descripcion: 'Mouse', precio: 15_000 },
	{ descripcion: 'Monitor', precio: 120_000 },
	{ descripcion: 'Parlantes', precio: 45_000 },
	{ descripcion: 'Webcam', precio: 38_000 },
];

// Punto 1
productos.forEach((producto) => {
	console.info(
		`Producto: ${producto.descripcion} - Precio: $${producto.precio}`,
	);
});

// Punto 2
const mayoresA20mil = productos.filter((producto) => producto.precio > 20_000);

console.info('Productos mayores a $20.000', mayoresA20mil);

// Punto 3
const productosConIvaIncluido = productos.map((producto) => ({
	...producto,
	precio: Number((producto.precio * 1.21).toFixed(2)),
}));

console.info('Productos con I.V.A. incluido', productosConIvaIncluido);

// Punto 4
function ordenarProductos() {
	return productos.sort(
		(productoA, productoB) => productoA.precio - productoB.precio,
	);
}

console.info(
	'Array de productos ordenados de menor a mayor',
	ordenarProductos(),
);

// Punto 5
function agregarProducto() {
	productos.push({
		descripcion: 'Parlante Bluetooth',
		precio: 59000.9,
	});

	return productos;
}

console.info('Array de productos con el nuevo producto', agregarProducto());

// Punto 6
function eliminarMasBarato() {
	const precios = productos.map((producto) => producto.precio);
	let precioMinimo = precios[0];

	for (const precio of precios) {
		precioMinimo = Math.min(precio, precioMinimo);
	}

	const index = productos.findIndex(
		(producto) => producto.precio === precioMinimo,
	);

	if (index !== -1) {
		productos.splice(index, 1);
	}

	return productos;
}

console.info(
	'Lista de precios sin el producto más barato',
	eliminarMasBarato(),
);
