import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { DepartementsComponent } from './departements/departements.component';
import { DepartementsByRegionComponent } from './departements-by-region/departements-by-region.component';
import { CommunesByDepartementComponent } from './communes-by-departement/communes-by-departement.component';
import { CommunesComponent } from './communes/communes.component';
import { SearchCommuneComponent } from './search-commune/search-commune.component';


const routes: Routes = [
  { path: 'regions', component: RegionsComponent },
  { path: 'departements', component: DepartementsComponent },
  { path: 'departements-par-region', component: DepartementsByRegionComponent },
  { path: 'communes-par-departement', component: CommunesByDepartementComponent },
  { path: 'communes', component: CommunesComponent },
  { path: 'commune/:name', component: SearchCommuneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
