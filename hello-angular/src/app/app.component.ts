import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  prenom = 'Toto';

  handleChange(val: any) {
    this.prenom = val;
  }
}
