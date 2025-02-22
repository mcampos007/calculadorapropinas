# Proyecto Calculadora de propinas

- Creación del proyecto. utilizar el comando:

```bash
 npm create vite@latest

```

Y alli eligir _react_ y _typescript+swc_

- Limpiar codigo que no necesitamos en index.css, App.tsx y eliminar app.css
- Implementar _TAILWIND CSS_ en consola, se debe hacer lo siguiente

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Ahora se debe editar _tailwind.config.js_ y agregar

```sh
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
```

Y por ultimo adicionar a index.css

```sh
@tailwind base;
@tailwind components;
@tailwind utilities;
´´
```

Al levantar nuevamente el proyecto, con _npm run dev_, se puede observar que le quita todos los estilos

- Se recomienda instalar la extension para vsc _Tailwind CSS IntelliSense_
  Un ejemplo de como utilizar tailwind en un componente

```html
<h1 className=" text-lg font-black">Hola, MUndo !!!</h1>
```

## Vamos a tabajar con el componente App.tsx

el componente tendra la siguiente apariencia

```js
function App() {
  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black">
          Calculadora de propinas y consumos
        </h1>
      </header>
    </>
  );
}

export default App;
```

Tambien se debe crear el archivo db.ts que servirá para simular una api

```ts
export const menuItems = [
  {
    id: 1,
    name: "Pizza a la Leña Chica",
    price: 30,
  },
  {
    id: 2,
    name: "Pizza a la Leña Mediana",
    price: 50,
  },
  {
    id: 3,
    name: "Rebanada de Pay de Limón",
    price: 30,
  },
  {
    id: 4,
    name: "Rebanada de Pastel de Chocolate",
    price: 30,
  },
  {
    id: 5,
    name: "Jugo de Naranja",
    price: 15,
  },
  {
    id: 6,
    name: "Pizza a la Leña Grande",
    price: 70,
  },
  {
    id: 7,
    name: "Rib Eye 800g",
    price: 100,
  },
  {
    id: 8,
    name: "Jugo de Naranja",
    price: 15,
  },
  {
    id: 9,
    name: "Tequila",
    price: 40,
  },
  {
    id: 10,
    name: "Rebanada de Pay de Queso",
    price: 30,
  },
  {
    id: 11,
    name: "Café Americano",
    price: 20,
  },
  {
    id: 12,
    name: "Café Capuchino",
    price: 40,
  },
];
```

## Extensiones recomendadas

- ES7+ React/Redux/React-Native snippets
- Simple React Snippets

## Mostrando los Items del menú
