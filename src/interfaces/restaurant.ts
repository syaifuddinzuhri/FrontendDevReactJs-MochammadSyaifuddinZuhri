import { PaginationParams } from "./common";

export interface RestaurantParams extends PaginationParams {
  keyword?: string;
  category?: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IRating {
  id: number;
  name: string;
  image?: string;
  text?: string;
  rating: number;
}

export interface RestaurantResponse {
  id: number;
  category_id: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  status: string;
  map: string;
  rating: number;
  category?: ICategory;
  ratings?: IRating[]
}
