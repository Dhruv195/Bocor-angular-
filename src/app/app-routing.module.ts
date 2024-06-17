import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './component/main-layout/main-layout.component';
import { ServiceLayoutComponent } from './component/service-layout/service-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./component/main-layout/main-layout.module').then((m) => m.MainLayoutModule),
  },
  {
    path: '',
    component: ServiceLayoutComponent,
    loadChildren: () =>
      import('./component/service-layout/service-layout.module').then((m) => m.ServiceLayoutModule),
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
