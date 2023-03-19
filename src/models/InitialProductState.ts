import { IProduct } from "./ProductModel";

export interface IInitialProductState {
    allProducts:IProduct[],
    productsInBasket:IProduct[],
    totalProductPrice:number
}

