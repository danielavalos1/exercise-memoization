import { ProductForm } from './components/ProductForm';
import { ProductList } from './components/ProductList';
import { ProductProvider } from './context/ProductContext';

function App() {

  return (
    <ProductProvider>
      <div className='w-screen pt-10 pb-10 flex flex-col justify-center items-center bg-slate-500 font-mono gap-10'>
        <ProductForm />
        <ProductList />
      </div>
    </ProductProvider>
  )
}

export default App
