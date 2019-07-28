import { RouterModule, Routes} from '@angular/router';
import { TableComponent } from './table/table.component';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { SomePageComponent } from './some-page/some-page.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  {path: '', component: MainComponent, children: [
      { path: 'table', component: TableComponent, data: { animation: ':enter' } },
      { path: 'some', component: SomePageComponent, data: { animation: ':leave' } },
      { path: 'detail/:id', component: DetailComponent}
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
