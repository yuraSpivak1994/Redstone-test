import { Component, OnInit } from '@angular/core';
import { MockService } from '../../service/mock.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public  id: number;
  private subscription: any;
  public userInfo: Observable<Array<any>>;

  constructor(private route: ActivatedRoute, private mock: MockService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      const id = +params.id;
      this.getUser(id);
    });
  }

  private getUser(id): void {
    this.mock.getUsersId(id)
      .subscribe((data: any) => {
        this.userInfo = data;
      }, err => {
        console.log(err);
      });
  }

}
