import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject, OnInit, Renderer2 } from '@angular/core';


enum Themes {
  LIGHT = 'alternative-theme',
  DARK = 'standard-theme'
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(): void {
  }

  changeTheme(state: boolean): void {
    if (state) {
      this.renderer.removeClass(this.document.body, Themes.LIGHT);
      this.renderer.addClass(this.document.body, Themes.DARK);
    } else {
      this.renderer.removeClass(this.document.body, Themes.DARK);
      this.renderer.addClass(this.document.body, Themes.LIGHT);
    }
  }
}
