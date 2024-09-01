const stock = [
    {
        nombre: 'Camiseta River Plate 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 1,
        categoria: {
        liga: 'Liga Argentina'
        }
    },
    {
        nombre: 'Camiseta Boca Juniors 23/24',
        precio: '$912',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 2,
        categoria: {
            liga: 'Liga Argentina'
            }
    },
    {
        nombre: 'Camiseta Racing 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 3,
        categoria: {
            liga: 'Liga Argentina'
            }
    },
    {
        nombre: 'Camiseta Independiente 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 4,
        categoria: {
            liga: 'Liga Argentina'
            }
    },
    {
        nombre: 'Camiseta Barcelona 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 5,
        categoria: {
            liga: 'Otras ligas'
            }
    },
    {
        nombre: 'Camiseta Real Madrid 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 6,
        categoria: {
            liga: 'Otras ligas'
            }
    },
    {
        nombre: 'Camiseta Inter Miami 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 7,
        categoria: {
            liga: 'Otras ligas'
            }
    },
    {
        nombre: 'Camiseta Manchester City 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 8,
        categoria: {
            liga: 'Otras ligas'
            }
    },
    {
        nombre: 'Camiseta Liverpool 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 9,
        categoria: {
            liga: 'Otras ligas'
            }
    },
    {
        nombre: 'Camiseta Chelsea 23/24',
        precio: '$10.000',
        imagen: `https://tiendariver.vteximg.com.br/arquivos/ids/170836-1000-1000/HT3679_1.png?v=638412018605830000`,
        id: 10,
        categoria: {
            liga: 'Otras ligas'
            }
    },
];

const container = document.getElementById("container");
const botonesNav = document.querySelectorAll(".botonNav");

function crearCard(producto){
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("p");
    nombre.innerText = producto.nombre;
    
    const img = document.createElement("img");
    img.src = producto.imagen;

    const precio = document.createElement("p");
    precio.innerText = producto.precio;

    const agregar = document.createElement("button");
    agregar.setAttribute("id", producto.id);
    agregar.className = "botonAgregar";
    agregar.innerText = "Agregar al Carrito";

    card.append(nombre);
    card.append(img);
    card.append(agregar);
    card.append(precio);

    container.append(card);
};

function mostrarProductos(productos) {
    container.innerHTML = '';
    productos.forEach(producto => crearCard(producto));
    actualizarBotonesCarrito();
}

mostrarProductos(stock);

botonesNav.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesNav.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const categoriaSeleccionada = e.currentTarget.innerText;
        let productosFiltrados;

        if (categoriaSeleccionada === `Todos los productos`){
            productosFiltrados = stock;
        } else {
            productosFiltrados = stock.filter(producto => producto.categoria.liga === categoriaSeleccionada);
        }

        if (categoriaSeleccionada === `Todos los productos`){
            titulo.innerText = `Todos los productos`;
        } else if (categoriaSeleccionada === `Liga Argentina`){
            titulo.innerText = `Liga Argentina`;
        } else if (categoriaSeleccionada === `Otras ligas`){
            titulo.innerText = `Otras ligas`;
        }

        mostrarProductos(productosFiltrados);
    });
});

const productosDelCarrito = [];

function actualizarBotonesCarrito() {
    botonesAgregar = document.querySelectorAll(".botonAgregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
};

function agregarAlCarrito(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = stock.find(producto => producto.id == idBoton);
    productosDelCarrito.push(productoAgregado);
    console.log(productosDelCarrito);
}