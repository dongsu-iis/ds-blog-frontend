import { FomanticUIModule } from 'ngx-fomantic-ui';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FooterComponent, NavBarComponent],
  imports: [
    CommonModule,
    RouterModule,
    FomanticUIModule
  ],
  exports: [
    NavBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
