import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { DepartementsComponent } from './departements/departements.component';
import { DepartementsByRegionComponent } from './departements-by-region/departements-by-region.component';
import { CommunesByDepartementComponent } from './communes-by-departement/communes-by-departement.component';
import { CommuneDetailComponent } from './commune-detail/commune-detail.component';
import { SearchCommuneComponent } from './search-commune/search-commune.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'regions', component: RegionsComponent },
  { path: 'departements', component: DepartementsComponent },
  { path: 'departements-par-region', component: DepartementsByRegionComponent },
  { path: 'communes-par-departement', component: CommunesByDepartementComponent },
  { path: 'commune-detail', component: CommuneDetailComponent },
  { path: 'commune', component: SearchCommuneComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
