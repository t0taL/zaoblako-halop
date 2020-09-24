import { animate,  style, transition, trigger } from '@angular/animations';


export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition(':leave', [
    animate('300ms ease', style({ transform: 'scaleX(0) scaleY(0)' }))
  ]),
  transition(':enter', [
    style({ transform: 'scaleX(0) scaleY(0)' }),
    animate('300ms ease')
  ])
]);
