import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/shared/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent implements OnInit {

  productId: string = '';
  category: string = '';
  type: string = '';
  products: Products[] = [];

  constructor(
    private route: ActivatedRoute,
  ) {
    
    this.products.push(
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: true
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: true
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: true,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: false
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        lastPrice: 190.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: true
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: true
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: true,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: false
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        lastPrice: 190.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01338',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: true,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: true
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: true
          }
        ],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 5,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: false,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: true
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      },
      {
        id: 'f1194c9e-dccd-4c52-81a2-8fa0d2c01332',
        category: 'moletom',
        router: 'home/trends/roupas/blusa/moletom',
        isNew: false,
        isSale: true,
        sizeOptions: [
          {
            size: 'P',
            available: false
          },
          {
            size: 'M',
            available: false
          },
          {
            size: 'G',
            available: true
          },
          {
            size: 'GG',
            available: false
          }],
        name: 'Blazer Piquet - Branco',
        price: 125.5,
        lastPrice: 190.5,
        type: 'social',
        images: [
          'https://static-wishlist.s3.amazonaws.com/prd/onsite/youcom-core/collections/d9c91ad0-bd9e-11eb-9021-73347c870875/diaria122-look20-5.jpg',
          'https://d2akm0nhugecrh.cloudfront.net/Custom/Content/Products/10/64/1064144_jaqueta-pu-andre-04-05-0339_m1_637570171778465705.jpg'
        ],
        maxParcel: 3,
        description: 'Tecido: Malha.\nComposição: 100% Algodão',
        instruction: 'Instruções de Lavagem:\n- Lave a mão com água em temperatura ambiente;'
      }
    );
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.category = params['category'].replace('-', ' ');
      this.type = params['type'].replace('-', ' ');
    });
  }

}
