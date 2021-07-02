import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DetailComponent} from "./component/detail/detail.component";
import {AboutComponent} from "./component/about/about.component";
import {PrivacyComponent} from "./component/privacy/privacy.component";
import {ImprintComponent} from "./component/imprint/imprint.component";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {NotValidComponent} from "./component/not-valid/not-valid.component";
import {OpensourceComponent} from "./component/opensource/opensource.component";
import {PresskitComponent} from "./component/presskit/presskit.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 's/:link',
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
    path: 'legal/opensource',
    component: OpensourceComponent,
  },
  {
    path: 'presskit',
    component: PresskitComponent,
  },
  {
    path: 'notvalid', component: NotValidComponent
  },
  {
    path: 'beta',
    loadChildren: () => new Promise( () => { if(window.location.href.match(/beta/) ) window.location.href = 'https://testflight.apple.com/join/YQX5aBqu'; } )
  },
  {
    path: 'android',
    loadChildren: () => new Promise( () => { if(window.location.href.match(/android/) ) window.location.href = 'https://play.google.com/store/apps/details?id=eu.greenpassapp.greenpassfh'; } )
  },
  {
    path: 's/:**', redirectTo: '/notvalid'
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
