import { Component, OnInit } from '@angular/core';
import { MockService } from '../../service/mock.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  public users: Observable<Array<any>>;
  public userFilter: any = { name: '' };

  constructor(private mock: MockService) { }

  ngOnInit() {
    this.users = this.mock.fetch();
  }

}

