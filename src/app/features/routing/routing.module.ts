import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingRoutingModule } from './routing-routing.module';
import { RoutingComponent } from './routing.component';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule
  ],
  declarations: [
      RoutingComponent,
      LazyComponent
    ]
})
export class RoutingModule { }