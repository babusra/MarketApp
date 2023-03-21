import { IProduct } from "./ProductModel";

export interface IInitialProductState {
    allProducts:IProduct[],
    filteredProducts:IProduct[],
    favoritesProducts:IProduct[],
    productsInBasket:IProduct[],
    totalProductPrice:number
}

