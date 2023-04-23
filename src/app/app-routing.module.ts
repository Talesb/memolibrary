import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoryDetailComponent } from './components/memories/memory-detail/memory-detail.component';
import { MemoryMasterComponent } from './components/memories/memory-master/memory-master.component';

const routes: Routes = [
  {
    path: 'memory-detail',
    component: MemoryDetailComponent
  },
  {
    path: 'memory-master',
    component: MemoryMasterComponent
  },
  {
    path: '',
    redirectTo: 'memory-master',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
