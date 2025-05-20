import axios from "axios";
import { Product, ProductInput } from "../types/product";
const apiUrl = import.meta.env.VITE_BASE_URL;

const  setImageUrl = (data: Product[]) => {
  data.forEach((data: Product) => {
    data.image = 'https://picsum.photos/400/300?random=1';
  });
  return data;
} 

export const fetchProducts = async () => {
  const response = await axios.get(`${apiUrl}/products`);
  console.log(response);
  setImageUrl(response.data.content)
  return response.data.content;
};

export const addNewProduct = async (productData: ProductInput) => {
  try {
    const response = await axios.post(`${apiUrl}/products`, productData);
    console.log(response);
    response.data = setImageUrl([response.data]);
    return response.data;
  } catch (error) {
    console.error("Error adding new category:", error);
    throw error;
  }
};
