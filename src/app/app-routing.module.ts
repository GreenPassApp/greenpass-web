import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DetailComponent} from "./component/detail/detail.component";
import {AboutComponent} from "./component/about/about.component";
import {PrivacyComponent} from "./component/privacy/privacy.component";
import {ImprintComponent} from "./component/imprint/imprint.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'r/:link',
    component: DetailComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
  },
  {
    path: 'imprint',
    component: ImprintComponent,
  },
  {
    path: '404', component: NotFoundComponent
  },
  {
    path: '**', redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
