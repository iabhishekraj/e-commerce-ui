
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

interface ProductCardProps {
  id: string;
  name: string;
  brand: string;
  description: string;
  imageUrl: string;
  otherImages: string[];
  price: number
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  brand,
  description,
  imageUrl,
  otherImages,
  price
}) => {
  return (
    <Card sx={{ width: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={imageUrl}
        alt={name}
      />
      <CardContent sx={{ flexGrow: 1, textTransform: 'capitalize' }}>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rs. {price}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {brand}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
