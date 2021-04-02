export class ProductResponseModel {
    codeMessage: string;
    data: Array<ProductModel>;
    ok: boolean;
}

export class ProductModel {
    brand: string;
    colors: Array<ColorProduct>;
    description: string;
    discount: string;
    id: number;
    is_favorite: false
    product_image: string;
    product_name: string;
    product_price: string;
    reviews: string;
    score: number;
    sku: string;
}

export class ColorProduct {
    hex: string;
    name: string;
}