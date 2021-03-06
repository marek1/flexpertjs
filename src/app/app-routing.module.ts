import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { COMPANY_ROUTE, CONTACT_ROUTE, FREELANCER_ROUTE } from './routes';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

const routes: Routes = [
  {
    path: COMPANY_ROUTE,
    component: HomeComponent
  },
  {
    path: FREELANCER_ROUTE,
    component: HomeComponent
  },
  {
    path: CONTACT_ROUTE,
    component: ContactUsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
