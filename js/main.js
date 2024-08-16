const stock = [
    {
        nombre: 'Camiseta River Plate 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        imagen: asdasd,
        id: 1,
    },
    {
        nombre: 'Camiseta Boca Juniors 23/24',
        ligaArgentina: true,
        precio: '$912',
        imagen: asdasd,
        id: 2,
    },
    {
        nombre: 'Camiseta Racing 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        imagen: asdasd,
        id: 3,
    },
    {
        nombre: 'Camiseta Independiente 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        imagen: asdasd,
        id: 4,
    },
    {
        nombre: 'Camiseta Barcelona 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 5,
    },
    {
        nombre: 'Camiseta Real Madrid 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 6,
    },
    {
        nombre: 'Camiseta Inter Miami 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 7,
    },
    {
        nombre: 'Camiseta Manchester City 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 8,
    },
    {
        nombre: 'Camiseta Liverpool 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 9,
    },
    {
        nombre: 'Camiseta Chelsea 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        imagen: asdasd,
        id: 10,
    },
];

const container = document.getElementById("container");

function crearCard(producto){
    const card = document.createElement("div");
    card.className = "card";

    const nombre = document.createElement("p");
    nombre.innerText = producto.nombre;
    
    const img = document.createElement("img");
    img = producto.imagen;

    const precio = document.createElement("p");
    precio.innerText = producto.precio;

    card.append(nombre);
    card.append(imagen);
    card.append(precio);

    container.append(card);
};

stock.forEach(el => crearCard(el));