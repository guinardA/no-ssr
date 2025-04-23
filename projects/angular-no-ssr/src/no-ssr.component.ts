import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Directive, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'no-ssr',
  templateUrl: './no-ssr.component.html',
  styleUrl: './no-ssr.component.scss',
  imports: [CommonModule],
})
export class NoSsrComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
}

@Directive({
  selector: 'ssr-placeholder',
})
export class NoSsrPlaceholderDirective {}
