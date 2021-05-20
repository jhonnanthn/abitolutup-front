import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  images: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.images.push({
      redirectTo: '/contact',
      url: 'https://static.wixstatic.com/media/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.jpg/v1/fill/w_1440,h_350,al_c,q_85,usm_0.66_1.00_0.01/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.webp'
    });
    this.images.push({
      redirectTo: '/contact',
      url: 'https://static.wixstatic.com/media/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.jpg/v1/fill/w_1440,h_350,al_c,q_85,usm_0.66_1.00_0.01/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.webp'
    });
    this.images.push({
      redirectTo: '/contact',
      url: 'https://static.wixstatic.com/media/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.jpg/v1/fill/w_1440,h_350,al_c,q_85,usm_0.66_1.00_0.01/033e92_3fc09921a3a0493d84185f8232a1f4f0~mv2.webp'
    });
  }

}
