export interface Category {
    id: string;
    name: string;
    description: string;
    slug: string;
    displayOrder: number;
    imageUrl: string;
    isActive: boolean;
    parentCategory: Category | null;
    subCategories: Category[];
    productIds: string[];
}

export interface CategoryInput {
    name: string;
    description: string;
    image: string;
    slug: string;
}
