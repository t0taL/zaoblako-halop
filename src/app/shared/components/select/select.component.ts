import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { selectOptionsAnimation } from '../../animations/select-options.animation';

import { ISelectOption } from '../../interfaces/select-option.interface';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [selectOptionsAnimation],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectComponent implements OnInit {
  @Input() options: ISelectOption<any>;

  @Output() selectEvent: EventEmitter<any> = new EventEmitter<any>();

  selectedOption: ISelectOption<any>;
  showOptions: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
    this.selectOption(this.options[0]);
  }

  toggleOptions(): void {
    this.showOptions = !this.showOptions;
  }

  selectOption(option: ISelectOption<any>): void {
    this.showOptions = false;
    this.selectEvent.emit(option.value);
    this.selectedOption = option;
  }
}
