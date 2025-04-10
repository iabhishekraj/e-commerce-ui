// import { useCartStore } from "../store/cartStore";

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
}) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2>{title}</h2>
      <img src={image} alt="" height={200} width={200} />
      <p>${price}</p>
      <button className="bg-blue-500 text-white p-2 rounded" onClick={() => {}}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
