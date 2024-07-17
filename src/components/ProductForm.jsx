import { useContext } from "react";
import { useForm } from "../hooks/useForm";
import { ProductContext } from "../context/ProductContext";
export const ProductForm = () => {
  const initialValues = {
    name: "",
    price: "",
    category: ""
  }
  const { formData, handleChange, setFormData } = useForm(initialValues);
  const { addProduct } = useContext(ProductContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
    setFormData(initialValues);
  }
  return (
    <form onSubmit={handleSubmit} className="bg-slate-100 flex flex-col gap-2 px-10 py-8 rounded shadow-md">
      <h1 className="text-2xl items-start text-left">Nuevo Producto</h1>
      <label className="flex gap-2 items-center">
        Nombre del producto:
        <input className="rounded p-1" name="name" id="name" placeholder="Product..." value={formData.name} onChange={handleChange} required />
      </label>
      <label className="flex gap-2 items-center">
        Precio del producto:
        <input className="rounded p-1" name="price" id="price" placeholder="10.00" required value={formData.price} onChange={handleChange} />
      </label>
      <label className="flex gap-2 items-center">
        Categoría del producto:
        <select onChange={handleChange} value={formData.category} className="rounded p-1 flex-1" name="category" id="category" required>
          <option value={'Category 1'}>Category 1</option>
          <option value={'Category 2'}>Category 2</option>
          <option value={'Category 3'}>Category 3</option>
        </select>
      </label>
      <button className="bg-violet-500 px-4 py-2 rounded text-white hover:bg-violet-700 transition-all font-bold" type="submit">Añadir Producto</button>
    </form>
  )
}
