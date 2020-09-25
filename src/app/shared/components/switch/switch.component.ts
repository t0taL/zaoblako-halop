import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SwitchComponent implements OnInit {
  @Output() switchEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  state: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleState(): void {
    this.state = !this.state;
    this.switchEvent.emit(this.state);
  }
}
