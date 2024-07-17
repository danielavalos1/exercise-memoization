import { useState } from "react";

export const useForm = (initialValues) => {
  const [formData, setFormData] = useState(initialValues);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return { formData, handleChange, setFormData };
}