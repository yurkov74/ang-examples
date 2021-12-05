import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// app components
import { RoutingComponent } from './routing.component';
import { LazyComponent } from './lazy/lazy.component';


const routes: Routes = [
    {
        path: 'lazy',
        component: LazyComponent
    },
  {
    path: '',
    component: RoutingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingRoutingModule { }