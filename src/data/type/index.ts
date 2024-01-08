import Product from "../model/product";

export enum Category {
    all = 'all',
    mens = 'Mens',
    women = 'Womens',
    kids = 'Kids'
};

export type CategoryShape = {
    name: Category,
    products: Product[]
};

export type CategoryMap = Record<Category, CategoryShape>;

export type Currency = {
    label: string;
    symbol: string;
}
