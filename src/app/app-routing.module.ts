import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FullLayoutComponent} from './template/full-layout/full-layout.component';
import {HomeComponent} from './home/home.component';
import {HomeOvaComponent} from './home-ova/home-ova.component';
import {LibEscitalaComponent} from './librerias/matematicas-discretas/lib-escitala/lib-escitala.component';
import {LibSoSJComponent} from './librerias/sistemas-operativos/lib-so-sjf/lib-so-sjf.component';
import {LibGitcmdComponent} from './librerias/ambiente-web/lib-gitcmd/lib-gitcmd.component';
import {LibCompilerComponent} from './librerias/arquitectura-computadores/lib-compiler/lib-compiler.component';
import {InformacionComponent} from './informacion/informacion.component';
import {OvaTemplateComponent} from './template/ova-template/ova-template.component';
import {LibLagrangeComponent} from './librerias/analisis-numerico/lib-lagrange/lib-lagrange.component';
import {OvasComponent} from './ova/ovas/ovas.component';
import {EmptyLayoutComponent} from './template/empty-layout/empty-layout.component';
import {LoginComponent} from './login/login.component';
import {PageNoFoundComponent} from './page-no-found/page-no-found.component';
import {LibCostosXpComponent} from './librerias/costos-presupuestos/lib-costos-xp/lib-costos-xp.component';

const routes: Routes = [

  { path: '',
    component: EmptyLayoutComponent,
    children: [
      {path: '', redirectTo: '/login', pathMatch: "full"},
      {path: 'login', component: LoginComponent },
      {path: 'ova', component: OvasComponent }
    ]
  },
  {
    path: '',
    component: OvaTemplateComponent,  // MOVER ESTE BLOQUE ARRIBA DE FullLayoutComponent
    children: [
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'lib-costos-xp', component: LibCostosXpComponent},
      { path: 'lib-newton', component: LibLagrangeComponent },
      { path: 'lib-escitala', component: LibEscitalaComponent },
      { path: 'lib-gitcmd', component: LibGitcmdComponent },
      { path: 'lib-compiler', component: LibCompilerComponent },
      { path: 'lib-so-sjf', component: LibSoSJComponent },
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'home-ova', component: HomeOvaComponent },
      { path: 'informacion', component: InformacionComponent },
      { path: 'facultad', loadChildren: () => import('./facultad/facultad.module').then(m => m.FacultadModule) },
      { path: 'programas', loadChildren: () => import('./programas/programas.module').then(m => m.ProgramasModule) },
      { path: 'usuario', loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule) },
      { path: 'cursos', loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule) },
    ]
  },
      {path:'**', component: PageNoFoundComponent}

    ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
