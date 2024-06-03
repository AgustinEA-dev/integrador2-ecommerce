export const productsData = [
    {
        name: 'Medallón de calabaza',
        precio: 600,
        // precioDocena: 5500,
        // precioMediaDocena: 2750,
        img: './productos/medallones-calabaza.png',
        id: 1
    },
    {
        name: 'Medallón Mix veg.',
        precio: 600,
        // precioDocena: 5500,
        // precioMediaDocena: 2750,
        img: './productos/medallones-mixVegetales.png',
        id: 1
    },
    {
        name: 'Medallón de remolacha',
        precio: 600,
        // precioDocena: 5500,
        // precioMediaDocena: 2750,
        img: './productos/medallones-remolacha.png',
        id: 2
    },
    {
        name: 'Medallón de arbejas',
        precio: 600,
        // precioDocena: 5500,
        // precioMediaDocena: 2750,
        img: './productos/medallones-arbejas.png',
        id: 3
    },
    {
        name: 'Medallón variedades',
        precio: 600,
        // precioDocena: 5500,
        // precioMediaDocena: 2750,
        img: './productos/medallones-variedades.png',
        id: 3
    },
    {
        name: 'Guiso de lentejas',
        precio: 2500,
        img: './productos/guiso-lentejas.png',
        id: 4
    },
    {
        name: 'Arrollados rellenos',
        precio: 2000,
        img: './productos/arrollados.png',
        id: 5
    },
    {
        name: 'Focaccia',
        precio: 2500,
        img: './productos/focaccia.png',
        id: 6
    },
    {
        name: 'Pan integral con semillas',
        precio: 2500,
        img: './productos/panes.png',
        id: 7
    },
    {
        name: 'Bifes de seitan',
        precio: 300,
        img: './productos/Bife-seitan.png',
        id: 7
    },
]

// Función que crea la lista de productos

const createProductList = () => {
    let productList = []
    productList.push(productsData)
    // console.log(productList)
    return productList

}

export const appState = {
    products: createProductList()
}


