import {
    Modal,
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    Stack,
    Grid,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { useEffect, useState } from "react";
import { addNewProduct, fetchProducts } from "../services/productService";
import { Product } from "../types/product";
import ProductCard from './productCard';
import { fetchCategories } from '../services/categoryService';
import { Category } from '../types/category';
import { getCountries } from '../utils/getCountryList';

const style = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [_selectedCountry, setSelectedCountry] = useState('');
    const countries = getCountries();

    const [form, setForm] = useState({
        name: '',
        description: '',
        image: '',
        slug: '',
        price: 0,
        brand: '',
        parentCategoryId: '',
        madeIn: '',
    });

    const resetForm = () => {
        setForm({
            name: '',
            description: '',
            image: '',
            slug: '',
            price: 0,
            brand: '',
            parentCategoryId: '',
            madeIn: '',
        });
    };

    const closeModal = () => {
        resetForm();
        setOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSave = async () => {
        console.log('Form submitted:', form);
        form.price = Number(form.price)
        const result = await addNewProduct(form);
        console.log("--data--", result);
        resetForm();
        setOpen(false);
        setProducts([...products, ...result]);
    };

    useEffect(() => {
        const getProducts = async () => {
            try {
                const data = await fetchProducts();
                console.log(data)
                setProducts(data);
            } catch (err) {
                setError("Failed to fetch categories");
            } finally {
                setLoading(false);
            }
        };
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
                console.log('categorys', categories);
            } catch (err) {
                setError("Failed to fetch categories");
            } finally {
                setLoading(false);
            }
        };

        getProducts();
        console.log("products - ", products)
        if (open) {
            getCategories();
        }
    }, [open]);

    const handleCategoryChange = (event: SelectChangeEvent) => {
        console.log(event, "_______________>>>>")
        setForm(prev => ({
            ...prev,
            parentCategoryId: event.target.value
        }));
    };


    const handleCountryChange = (event: SelectChangeEvent) => {
        setSelectedCountry(event.target.value);
        setForm(prev => ({
            ...prev,
            madeIn: event.target.value
        }));
    };

    return (<>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Product
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add new Product</Button>

        {loading ? (
            <p>Loading categories...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <div>
                <Grid container spacing={2} justifyContent="center" sx={{ marginTop: 2, color: 'red' }}>
                    {products?.map((product: any) => (
                        <Grid xs={12} sm={6} md={4} key={product.id} sx={{ color: "red" }}>
                            <ProductCard
                                name={product.name}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.image}
                                brand={product.brand}
                                otherImages={product.otherImages}
                                id={product.id}
                                key={product.id}
                            />
                        </Grid>
                    ))}
                </Grid>
            </div>
        )}

        <Modal open={open} onClose={() => { }}>
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={closeModal}
                    sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="h2" gutterBottom textAlign="center">
                    Add New Product
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        label="Product Name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Description"
                        name="description"
                        value={form.description}
                        onChange={handleChange}
                        fullWidth
                        multiline
                        rows={3}
                    />
                    <TextField
                        label="Image URL"
                        name="image"
                        value={form.image}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        type='number'
                        label="Price"
                        name="price"
                        value={form.price}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Brand"
                        name="brand"
                        value={form.brand}
                        onChange={handleChange}
                        fullWidth
                    />
                    <TextField
                        label="Slug"
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        fullWidth
                    />
                    <FormControl fullWidth>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            value={form.parentCategoryId || ''}
                            onChange={handleCategoryChange}
                            label="Category"
                        >
                            {categories.map((cat) => (
                                <MenuItem key={cat.id} value={cat.id}>
                                    {cat.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                    <FormControl fullWidth>
                        <InputLabel id="madein-label">Made In</InputLabel>
                        <Select
                            labelId="madein-label"
                            value={form.madeIn ?? ''}
                            onChange={handleCountryChange}
                            label="Country"
                        >
                            {countries.map((country) => (
                                <MenuItem key={country.code} value={country.code}>
                                    {country.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </Modal>
    </>);
};
export default ProductList;
