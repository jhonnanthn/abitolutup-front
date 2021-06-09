import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  cartWishes!: Observable<number>;
  cartBag!: Observable<number>;

  constructor(private storageService: StorageService) { 
  }

  ngOnInit(): void {
    this.cartBag = this.storageService.getData('bag').length
    this.cartWishes = this.storageService.getData('wishes').length

    $(".desktop .dropdown-toggle").mouseover(function(){
      $(".desktop .mega-dropdown").removeClass('open');
      $(this).parent().addClass('open');
    });
    $(".desktop .dropdown-menu").mouseleave(function(e){
        e.stopPropagation();
        $(".desktop .mega-dropdown").removeClass('open');
    });
  }
}
