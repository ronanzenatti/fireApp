import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'produtos/cadastro',
    loadChildren: () => import('./produtos/cadastro-produto/cadastro-produto.module').then(m => m.CadastroProdutoPageModule)
  },
  {
    path: 'produtos/alterar/:id', // :id é o parâmetro que será enviado para a página.
    loadChildren: () => import('./produtos/alterar-produto/alterar-produto.module').then(m => m.AlterarProdutoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
