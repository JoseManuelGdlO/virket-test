import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(
        (mod) => mod.AuthModule
      ),
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./pages/events/events.module').then(
        (mod) => mod.EventsModule
      ),
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
