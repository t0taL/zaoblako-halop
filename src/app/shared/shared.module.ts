import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { SelectComponent } from './components/select/select.component';
import { SwitchComponent } from './components/switch/switch.component';


@NgModule({
  declarations: [ButtonComponent, InputComponent, TextareaComponent, SelectComponent, SwitchComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent, TextareaComponent, SelectComponent, SwitchComponent]
})
export class SharedModule {
}
