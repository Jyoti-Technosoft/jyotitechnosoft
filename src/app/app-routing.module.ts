import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from '@app/component/contact-us/contact-us.component';
import { ServicesComponent } from '@app/component/services/services.component';
import { BlankComponent } from '@app/layout/blank/blank.component';
import { FullLayoutComponent } from '@app/layout/full-layout/full-layout.component';

const routes: Routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadChildren: () =>
          import('@app/component/home/home.module').then((m) => m.HomeModule),
      },
      {
        path:'career',
        loadChildren: () => 
          import('@app/component/career/career.module').then((m) => m.CareerModule),
      },
      { path: 'about', component: BlankComponent },
      { path: 'contact-us', component: ContactUsComponent },
      { path: 'services', component: ServicesComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
