import { Component } from '@angular/core';

@Component({
  selector: 'app-socials',
  imports: [],
  templateUrl: './socials.component.html',
  styleUrl: './socials.component.css'
})
export class SocialsComponent {

  redes = [
    {
      name: 'GitHub',
      url: 'https://github.com/marcosvallecillos'
    },{
      name: 'LinkedIn',
    }, {
      name: 'Twitter',
    }, {
      name: 'Instagram',
    }, {
      name: 'Facebook',
    }

  ]
}
