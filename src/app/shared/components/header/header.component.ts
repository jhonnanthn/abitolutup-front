import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
