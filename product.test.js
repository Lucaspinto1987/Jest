const { resetProducts, addProduct, removeProduct, getProducts, getProduct, updateProduct } = require('./product');

beforeEach(() => {
    resetProducts();
});

describe('Añadiendo Productos', () => {
    test('debería agregar un producto', () => {
        addProduct("Laptop", 1200);
        expect(getProducts()).toHaveLength(1);
    });

    test('debería incrementar el id en 1 cada vez que se añada un producto', () => {
        addProduct("Laptop", 1200);
        addProduct("Smartphone", 800);
        expect(getProducts()[0].id).toBe(1);
        expect(getProducts()[1].id).toBe(2);
    });

    test('debería lanzar un error si el nombre o el precio no están definidos', () => {
        expect(() => addProduct()).toThrow("El nombre y el precio deben estar definidos");
        expect(() => addProduct("Tablet")).toThrow("El nombre y el precio deben estar definidos");
        expect(() => addProduct(undefined, 200)).toThrow("El nombre y el precio deben estar definidos");
    });

    test('debería lanzar un error si el producto ya existe', () => {
        addProduct("Laptop", 1200);
        expect(() => addProduct("Laptop", 1300)).toThrow("El producto ya existe");
    });
});

describe('Eliminando Productos', () => {
    test('debería eliminar un producto', () => {
        addProduct("Laptop", 1200);
        removeProduct(1);
        expect(getProducts()).toHaveLength(0);
    });

    test('debería lanzar un error si el producto no existe', () => {
        expect(() => removeProduct(999)).toThrow("El producto no existe");
    });
});

describe('Obteniendo un solo producto', () => {
    test('debería obtener un producto por su id', () => {
        addProduct("Laptop", 1200);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: "Laptop", price: 1200 });
    });

    test('debería lanzar un error si el producto no existe', () => {
        expect(() => getProduct(999)).toThrow("El producto no existe");
    });
});

describe('Actualizando Productos', () => {
    test('debería actualizar un producto por su id', () => {
        addProduct("Laptop", 1200);
        updateProduct(1, "Laptop Pro", 1500);
        const product = getProduct(1);
        expect(product).toEqual({ id: 1, name: "Laptop Pro", price: 1500 });
    });

    test('debería lanzar un error si el producto no existe', () => {
        expect(() => updateProduct(999, "Nuevo nombre", 1000)).toThrow("El producto no existe");
    });
});
