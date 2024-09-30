let products = []; // Declaramos una variable products vacía
let id = 0; // Declaramos una variable id con valor 0

const resetProducts = () => {
    products = [];
    id = 0;
};

const addProduct = (name, price) => {
    if (!name || price === undefined) {
        throw new Error("El nombre y el precio deben estar definidos");
    }
    if (products.some(product => product.name === name)) {
        throw new Error("El producto ya existe");
    }
    id += 1; // Incrementamos el id
    products.push({ id, name, price });
};

const removeProduct = (id) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        throw new Error("El producto no existe");
    }
    products.splice(productIndex, 1);
};

const getProducts = () => {
    return products;
};

const getProduct = (id) => {
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error("El producto no existe");
    }
    return product;
};

const updateProduct = (id, name, price) => {
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex === -1) {
        throw new Error("El producto no existe");
    }
    if (name) {
        products[productIndex].name = name;
    }
    if (price !== undefined) {
        products[productIndex].price = price;
    }
};

module.exports = { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct };
