# Ejercicio de React

En esta ocasión le pedí a Chat GPT que me diera un ejercicio para practicar el uso de los conceptos Memoization, useContext, customHooks y demás.
El ejercicio es el siguiente:

Crea una aplicación de React que muestre una lista de productos con la posibilidad de filtrar y ordenar la lista. La aplicación debe constar de los siguientes componentes y funcionalidades:

1. Componente ProductProvider:

- Proveer un contexto con la lista de productos y funciones para agregar, eliminar y actualizar productos.
- Proveer un estado global para la lista de productos.

2. Componente ProductList:

- Mostrar la lista de productos.
- Filtrar los productos por categoría y ordenar por precio.

3. Componente ProductFilter:

- Permitir filtrar los productos por categoría (usando un menú desplegable).

4. Componente ProductSorter:

- Permitir ordenar los productos por precio (ascendente/descendente).

5. Componente ProductItem:

- Mostrar la información de cada producto (nombre, precio, categoría).

6. Memoization:

- Utiliza memoization para optimizar el rendimiento de la lista de productos filtrados y ordenados.

## Requisitos Específicos:

- Contexto:

  - Define un contexto para los productos (ProductContext).
  - Usa useContext para acceder al contexto en los componentes que lo necesiten.

- Memoization:
  - Usa useMemo para memoizar la lista filtrada y ordenada de productos.
- Agregar, Eliminar, Actualizar Productos:
  - Proporciona funciones en el contexto para agregar, eliminar y actualizar productos.

## Puntos Clave:

1. Crea un contexto para los productos y un proveedor que maneje el estado global de la lista de productos.
2. Usa useContext para que los componentes accedan a la lista de productos y las funciones de manipulación.
3. Implementa memoization en el componente que maneja la lista filtrada y ordenada de productos para mejorar el rendimiento.
4. Asegúrate de que los componentes de filtro y orden trabajen correctamente juntos.

## Ejemplo de Datos de Productos:

js```
const products = [
{ id: 1, name: 'Product A', price: 30, category: 'Category 1' },
{ id: 2, name: 'Product B', price: 20, category: 'Category 2' },
{ id: 3, name: 'Product C', price: 50, category: 'Category 1' },
{ id: 4, name: 'Product D', price: 40, category: 'Category 3' },
];

```

```
