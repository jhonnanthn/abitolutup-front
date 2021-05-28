export interface Products {
    id: string;
    name: string;
    router: string;
    category: string;
    type: string;
    size?: string;
    description: string;
    instruction: string;
    maxParcel: number;

    isSale?: boolean;
    isNew?: boolean;
    isWishlist?: boolean;

    price: any;
    images: any;
    lastPrice?: any;
    sizeOptions: any;

}