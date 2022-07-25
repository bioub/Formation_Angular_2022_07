import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  prenom = 'Toto';

  // pour l'horloge
  format = 'HH:mm:ss';
  delay = 2000;
  show = true;

  handleChange(val: any) {
    this.prenom = val;
  }
}
