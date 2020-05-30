import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.sass']
})
export class PostComponent implements OnInit {

  id;
  data: Object;
  content: string;
  title: string;

  constructor(private api: ApiService, private router: Router, private active: ActivatedRoute) {

    this.id = this.active.snapshot.params.id;
  }

  ngOnInit(): void {
    this.api.getPost(this.id).subscribe(
      (res) => {
        this.initPage(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  initPage(data): any {
    this.title = data.title.rendered;
    this.content = data.content.rendered;
  }

  back() {
    this.router.navigateByUrl('');
  }



}
