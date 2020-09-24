import { animate,  style, transition, trigger } from '@angular/animations';


export const optionsAnimation = trigger('optionsAnimation', [
  transition(':leave', [
    animate('300ms ease', style({ height: 0 }))
  ]),
  transition(':enter', [
    style({ height: 0 }),
    animate('300ms ease')
  ])
]);
