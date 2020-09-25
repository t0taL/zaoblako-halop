import { animate,  style, transition, trigger } from '@angular/animations';


export const selectOptionsAnimation = trigger('selectOptionsAnimation', [
  transition(':leave', [
    animate('300ms ease', style({ height: 0 }))
  ]),
  transition(':enter', [
    style({ height: 0 }),
    animate('300ms ease')
  ])
]);
