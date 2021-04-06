import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'session/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then(
        (mod) => mod.AuthModule
      ),
  },
  {
    path: 'session',
    loadChildren: () =>
      import('./pages/session/session.module').then(
        (mod) => mod.SessionModule
      ),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then(
        (mod) => mod.ProductsModule
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
