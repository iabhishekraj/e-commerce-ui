import React, { useState, useEffect } from 'react';
import {
    Modal,
    Box,
    Typography,
    TextField,
    IconButton,
    Button,
    Stack,
    Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { fetchCategories, addNewCategory } from '../services/categoryService';
import CategoryCard from './categoryCard';
import { Category } from '../types/category';


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

const CategoryList = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        name: '',
        description: '',
        image: '',
        slug: '',
    });

    useEffect(() => {
        const getCategories = async () => {
            try {
                const data = await fetchCategories();
                setCategories(data);
            } catch (err) {
                setError("Failed to fetch categories");
            } finally {
                setLoading(false);
            }
        };

        getCategories();
    }, []);

    const resetForm = () => {
        setForm({
            name: '',
            description: '',
            image: '',
            slug: '',
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
        const result = await addNewCategory(form);
        console.log("--data--", result);
        resetForm();
        setOpen(false);
        setCategories([...categories, ...result]);
    };

    return (<>
        <Typography variant="h2" sx={{ textAlign: 'center' }}>
            Category
        </Typography>
        <Button variant="contained" onClick={() => setOpen(true)}>Add new Category</Button>

        {loading ? (
            <p>Loading categories...</p>
        ) : error ? (
            <p>{error}</p>
        ) : (
            <div>
                <Grid container justifyContent="center" spacing={2} sx={{ marginTop: 2 }}>
                    {categories.map((category: any) => (
                        <Grid xs={12} sm={6} md={4} key={category.id}>
                            <CategoryCard
                                name={category.name}
                                description={category.description}
                                imageUrl={category.imageUrl}
                                slug={category.slug}
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
                    Add New Category
                </Typography>

                <Stack spacing={2}>
                    <TextField
                        label="Category Name"
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
                        label="Slug"
                        name="slug"
                        value={form.slug}
                        onChange={handleChange}
                        fullWidth
                    />
                    <Button variant="contained" color="primary" onClick={handleSave}>
                        Save
                    </Button>
                </Stack>
            </Box>
        </Modal>
    </>);
}

export default CategoryList;
