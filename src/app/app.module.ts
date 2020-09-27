import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BackgroundUrlPipePipe } from './background-url-pipe.pipe';
import { MongoconfigComponent } from './blog/spring-boot/mongoconfig/mongoconfig.component';
import { HomeComponent } from './home/home/home.component';
import { AboutComponent } from './home/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BackgroundUrlPipePipe,
    MongoconfigComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
