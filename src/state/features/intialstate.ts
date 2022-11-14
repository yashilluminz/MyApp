export const initialState: initialStateProp = {
  data: null,
  loading: false,
};

export interface initialStateProp {
  data: IpropDataType[] | null;
  loading: boolean;
}

export interface IpropDataType {
  productDec: string;
  brand: string;
  image: string;
  mrp: number;
  price: number;
  discount: string;
  imagesArr?: IImageArrv[] | undefined;
}

export type IProducts = {
  brand: string;
  productName: string;
  searchImage: string;
  mrp: number;
  price: number;
  discountDisplayLabel: string;
  images?: IImageArrv[] | undefined;
};

export type IImageArrv = {
  view: string;
  src: string;
};
