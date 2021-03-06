import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./component/home/home.component";
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { DetailComponent } from './component/detail/detail.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AboutComponent } from './component/about/about.component';
import { PrivacyComponent } from './component/privacy/privacy.component';
import { ImprintComponent } from './component/imprint/imprint.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { PresskitComponent } from './component/presskit/presskit.component';
import { OpensourceComponent } from './component/opensource/opensource.component';
import { NotValidComponent } from './component/not-valid/not-valid.component';
import { DownloadComponent } from './component/download/download.component';

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    DetailComponent,
    AboutComponent,
    PrivacyComponent,
    ImprintComponent,
    NotFoundComponent,
    PresskitComponent,
    OpensourceComponent,
    NotValidComponent,
    DownloadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
