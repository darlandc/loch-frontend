import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiService) { }

  mylist;

  ngOnInit(): void {
  }

  list(){
    this.api.getPosts().subscribe(
      (res) => {
        this.mylist = res;
        console.log(this.mylist);
      },
      (err) => { console.log(err); }
    );
  }

}
