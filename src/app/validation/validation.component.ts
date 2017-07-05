import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'validation',
  templateUrl: './validation.component.html'
})

export class ValidationComponent {

  public model = {
    title: '',
    author: '',
    url: '',
    titles: [
      {title: ''},
      {title: ''},
      {title: ''}
    ]
  };

  constructor(
    private router: Router
  ) {
  }

  public submit(form: any) {
    console.log(form);
  }

}
