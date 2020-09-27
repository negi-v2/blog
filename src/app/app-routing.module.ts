import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MongoconfigComponent } from './blog/spring-boot/mongoconfig/mongoconfig.component';
import { AboutComponent } from './home/about/about.component';
import { HomeComponent } from './home/home/home.component';

const routes: Routes = [
  {
    path: "spring-boot", children: [
      {path: "mongoConfig", component: MongoconfigComponent}
  ],
  },
  {path: "about", component: AboutComponent},
  {path: "", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   
}
