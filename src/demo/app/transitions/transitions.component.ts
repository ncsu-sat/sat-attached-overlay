import { Component } from '@angular/core';

@Component({
  selector: 'demo-transitions',
  styleUrls: ['./transitions.component.scss'],
  templateUrl: './transitions.component.html'
})
export class TransitionsDemo {
  openTransition = '2000ms ease';
  closeTransition = '2000ms ease';
  startAtScale = 0.3;
  endAtScale = 0.5;

  callbackIndicators = [
    { name: 'opened', active: false },
    { name: 'closed', active: false },
    { name: 'afterOpen', active: false },
    { name: 'afterClose', active: false }
  ];

  showCallback(name) {
    const callback = this.callbackIndicators.find((i) => i.name === name);

    // Flash the callback indicator
    callback.active = true;
    setTimeout(() => (callback.active = false), 100);
  }
}
