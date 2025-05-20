export interface Product {
    id: string;
    name: string;
    description: string;
    slug: string;
    displayOrder: number;
    image: string;
    isActive: boolean;
    parentCategory: string | null;
    subCategories: string[];
    brand: string;
    otherImages: string[];
    price: number
}

export interface ProductInput {
    name: string;
    description: string;
    image: string;
    price: number;
    brand: string;
    slug: string;
    parentCategoryId: string;
    madeIn: string;
}
