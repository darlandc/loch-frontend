import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  id: any;
  mylist;
  post;
  currentId;

  constructor(private api: ApiService, private router: Router) {
    this.list();
  }

  ngOnInit(): void {
  }

  list(){
    this.api.getPosts().subscribe(
      (res) => {
        this.mylist = res;
      },
      (err) => { console.log(err); }
    );
  }

  getId(id){
    this.router.navigateByUrl(`/post/${id}`);
    this.currentId = id;
  }

}
