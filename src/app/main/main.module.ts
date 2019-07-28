import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { SomePageComponent } from './some-page/some-page.component';
import { MockService } from '../service/mock.service';
import { FormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    FilterPipeModule
  ],
  declarations: [TableComponent, MainComponent, SomePageComponent, DetailComponent],
  providers: [MockService]
})

export class MainModule {}
