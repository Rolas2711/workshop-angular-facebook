import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WallModule } from '../wall/wall.module';
import { AppComponent } from './components/app/app.component';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from './core-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomePageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, WallModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
