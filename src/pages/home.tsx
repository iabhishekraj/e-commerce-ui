import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productService";
import ProductCard from "../components/productCard";

interface Product {
  id: string;
  name: string;
  price: number;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div>
      <h1>Home Page</h1>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => {
          console.log("Product:", product);
          return <ProductCard key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Home;
