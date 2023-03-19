import { IProduct } from "./ProductModel";

export interface IInitialProductState {
    allProducts:IProduct[],
    filteredProducts:IProduct[],
    productsInBasket:IProduct[],
    totalProductPrice:number
}

