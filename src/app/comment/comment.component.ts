import { Component, OnInit } from '@angular/core';
import { IZComments } from './constant';
import { CommentService } from './comment.service';
import { Observable, pluck } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments$: Observable<IZComments[]> = this.commentS.getComments();
  comment$ = this.activatedRoute.data.pipe(pluck('comments'))

  constructor(private commentS: CommentService, 
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(){
  // this.activatedRoute.data.subscribe((data) => {
  // this.data = data['comments']
  // console.log(data['comments'])} );
  }
}
