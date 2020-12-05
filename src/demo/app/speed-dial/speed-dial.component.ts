import { Component } from '@angular/core';
import { trigger, state, style, animate, transition, query } from '@angular/animations';

@Component({
  selector: 'demo-speed-dial',
  styleUrls: ['./speed-dial.component.scss'],
  animations: [
    trigger('spinInOut', [
      state('in', style({ transform: 'rotate(0)', opacity: '1' })),
      transition(':enter', [style({ transform: 'rotate(-180deg)', opacity: '0' }), animate('150ms ease')]),
      transition(':leave', [animate('150ms ease', style({ transform: 'rotate(180deg)', opacity: '0' }))])
    ]),
    trigger('preventInitialAnimation', [transition(':enter', [query(':enter', [], { optional: true })])])
  ],
  templateUrl: 'speed-dial.component.html'
})
export class SpeedDialDemo {
  actions = [
    { name: 'Add attachment', icon: 'attachment' },
    { name: 'New folder', icon: 'folder' },
    { name: 'New shared folder', icon: 'folder_shared' }
  ];
}
