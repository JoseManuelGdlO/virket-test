import { ColorProduct } from "./products.model";

export class ShoppingCartResponseModel {
    codeMessage: string;
    data: ShoppingCartModel;
    ok: boolean;
}

export class ShoppingCartModel {
    products: Array<ShoppingCartProductModel>;
    shipping: string;
    subtotal: string;
    total: string;
}

export class ShoppingCartProductModel {
    brand: string;
    colors: ColorProduct;
    description: string;
    discount: string;
    id: number;
    is_favorite: boolean
    product_image: string;
    product_name: string;
    product_price: string;
    reviews: string;
    score: number;
    sku: string;
    color: ColorProduct = null
}