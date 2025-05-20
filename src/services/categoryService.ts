import axios from "axios";
import { Category, CategoryInput } from "../types/category";
const apiUrl = import.meta.env.VITE_BASE_URL;


const  setImageUrl = (data: Category[]) => {
  data.forEach((data: Category) => {
    data.imageUrl = 'https://picsum.photos/400/300?random=1';
  });
  return data;
} 
export const fetchCategories = async () => {
  console.log('API URL:', apiUrl);
  const response = await axios.get(`${apiUrl}/categories`);
  response.data = setImageUrl(response.data);
  console.log("----", response.data)
  return response.data;
};


export const addNewCategory = async (categoryData: CategoryInput) => {
  try {
    const response = await axios.post(`${apiUrl}/categories`, categoryData);
    console.log(response);
    response.data = setImageUrl([response.data]);
    return response.data;
  } catch (error) {
    console.error("Error adding new category:", error);
    throw error;
  }
};
