import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegionsComponent } from './regions/regions.component';
import { DepartementsComponent } from './departements/departements.component';
import { DepartementsByRegionComponent } from './departements-by-region/departements-by-region.component';

const routes: Routes = [
  { path: 'regions', component: RegionsComponent },
  { path: 'departements', component: DepartementsComponent },
  { path: 'departements-par-region', component:DepartementsByRegionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
