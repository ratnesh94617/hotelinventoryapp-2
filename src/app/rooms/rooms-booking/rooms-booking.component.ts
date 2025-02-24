import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.scss']
})
export class RoomsBookingComponent implements OnInit {

  roomId: number = 0;
  id$: Observable<string | null>
    = this.router.paramMap.pipe(
      map((params) => params.get('roomId'))
    );
  constructor(private router: ActivatedRoute) { }
  ngOnInit() {
    // this.router.params.subscribe(params => {
    //   console.log(params);  // { id: "book-room" } 
    //   console.log(params['roomId']); // book-room       
    //   this.roomId = params['roomId']; 
    // });
    // this.roomId = this.router.snapshot.params['roomId'];
    //snapshot will not work if we navigate to the same component with different id

    // this.router.paramMap.subscribe(params => { 
    //   params.get('roomId');
    // });
  }
}
