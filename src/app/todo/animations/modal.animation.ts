import { animate,  style, transition, trigger } from '@angular/animations';


export const modalAnimation = trigger('modalAnimation', [
  transition(':leave', [
    animate('300ms ease', style({ transform: 'scaleX(0) scaleY(0)' }))
  ]),
  transition(':enter', [
    style({ transform: 'scaleX(0) scaleY(0)' }),
    animate('300ms ease')
  ])
]);
