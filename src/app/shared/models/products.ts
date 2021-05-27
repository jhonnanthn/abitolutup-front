export interface Products {
    id: string;
    name: string;
    category: string;
    type: string;

    isSale: boolean;
    isNew: boolean;

    price: any;
    images: any;
    lastPrice?: any;
    length?: any;
}