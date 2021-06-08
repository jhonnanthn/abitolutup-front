export interface Products {
    id: string;
    name: string;
    category: string;
    type: string;
    description: string;
    instruction: string;
    maxParcel: number;

    isSale?: boolean;
    isNew?: boolean;
    isWishlist?: boolean;

    price: any;
    images: any;
    lastPrice?: any;
    menu: any;

    size: SizeOptions[];

}

interface SizeOptions {
    id: number,
    size: string,
    available: boolean
}