import { NgModule } from '@angular/core';
import { NoSsrComponent, NoSsrPlaceholderDirective } from './no-ssr.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NoSsrComponent],
  imports: [CommonModule, NoSsrPlaceholderDirective],
  exports: [NoSsrComponent, NoSsrPlaceholderDirective]
})
export class NoSsrModule {}
