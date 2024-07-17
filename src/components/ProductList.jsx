import { useContext } from "react"
import { ProductContext } from "../context/ProductContext"

export const ProductList = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="flex gap-5 flex-wrap max-w-2xl justify-center">
      {
        products.map((product) => {
          return (
            <div className="bg-slate-100 border rounded shadow flex flex-col gap-2 p-2" key={crypto.randomUUID()}>
              <header className="flex justify-between text-sm">
                <span className="font-extrabold">{product.id}</span>
                <span>{product.category}</span>
              </header>
              <main className="flex flex-col justify-center items-center gap-1">
                <span>{product.name}</span>
                <span className="text-lg font-bold">{`$${product.price}`}</span>
              </main>
              <footer>
                <button className="bg-violet-500 px-4 py-2 rounded text-white hover:bg-violet-700 transition-all">Añadir al carrito</button>
              </footer>
            </div>
          )
        })
      }
    </div>
  )
}
