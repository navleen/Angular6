import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/pageNotFound', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'pageNotFound', component: PageNotFoundComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }


