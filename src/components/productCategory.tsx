import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

type ProductCardProps = {
    name: string;
    description: string;
    imageUrl: string;
    slug: string;
};

const ProductCard: React.FC<ProductCardProps> = ({ name, description, imageUrl, slug }) => {
    return (
        <Card sx={{ width: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia
                component="img"
                height="140"
                image={imageUrl}
                alt={name}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                    Slug: {slug}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default ProductCard;