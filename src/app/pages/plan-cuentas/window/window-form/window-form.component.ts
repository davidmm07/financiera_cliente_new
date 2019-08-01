import { Component } from '@angular/core';
import { NbWindowRef } from '@nebular/theme';

@Component({
  templateUrl: './window-form.component.html',
  styleUrls: ['window-form.component.scss'],
})
export class WindowFormComponent {
  constructor(public windowRef: NbWindowRef) {}

  close() {
    this.windowRef.close();
  }
}
