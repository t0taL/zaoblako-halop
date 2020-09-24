import { animate, style, transition, trigger } from '@angular/animations';


export const widthAnimation = trigger('widthAnimation', [
  transition(':leave', [
    animate('300ms ease', style({ width: '0' }))
  ]),
  transition(':enter', [
    style({ width: '0' }),
    animate('300ms ease')
  ])
]);
