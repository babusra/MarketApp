import { IProduct } from "./ProductModel";

export interface IInitialProductState {
    productsInBasket:IProduct[],
    totalProductPrice:number
}

