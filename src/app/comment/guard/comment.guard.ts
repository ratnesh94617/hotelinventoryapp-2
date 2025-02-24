import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IZComments } from '../constant';
import { CommentService } from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentGuard implements Resolve<IZComments[]> {

  constructor(private commentService: CommentService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): IZComments[] | Observable<IZComments[]> | Promise<IZComments[]> {
      return this.commentService.getComments();
  }
}
