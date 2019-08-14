import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PotensiComponent } from './potensi/potensi.component';
import { PotensiItemComponent } from './potensi/potensi-item/potensi-item.component';
import { SubpotensiListComponent } from './potensi/potensi-item/subpotensi-list/subpotensi-list.component';
import { SubpotensiItemComponent } from './potensi/potensi-item/subpotensi-list/subpotensi-item/subpotensi-item.component';
import { SubpotensiDetailComponent } from './potensi/potensi-item/subpotensi-list/subpotensi-item/subpotensi-detail/subpotensi-detail.component';
import { StatistikComponent } from './statistik/statistik.component';
import { StatistikListComponent } from './statistik/statistik-list/statistik-list.component';
import { StatistikItemComponent } from './statistik/statistik-list/statistik-item/statistik-item.component';
import { DatasetComponent } from './dataset/dataset.component';
import { DatasetCariComponent } from './dataset/dataset-cari/dataset-cari.component';
import { DatasetListComponent } from './dataset/dataset-list/dataset-list.component';
import { DatasetItemComponent } from './dataset/dataset-list/dataset-item/dataset-item.component';
import { DatasetTabelComponent } from './dataset/dataset-tabel/dataset-tabel.component';
import { DatasetGrafikComponent } from './dataset/dataset-grafik/dataset-grafik.component';
import { BannerComponent } from './home/banner/banner.component';
import { AgmCoreModule } from '@agm/core';
import { PetaComponent } from './peta/peta.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PotensiComponent,
    PotensiItemComponent,
    SubpotensiListComponent,
    SubpotensiItemComponent,
    SubpotensiDetailComponent,
    StatistikComponent,
    StatistikListComponent,
    StatistikItemComponent,
    DatasetComponent,
    DatasetCariComponent,
    DatasetListComponent,
    DatasetItemComponent,
    DatasetTabelComponent,
    DatasetGrafikComponent,
    BannerComponent,
    PetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyAEAXBtxNaSf0NqcLc6Zwk0qqwKK7zS0S4'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
