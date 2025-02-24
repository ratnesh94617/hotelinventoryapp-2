import {
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { Room, RoomList } from './rooms';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { HttpEventType } from '@angular/common/http';
import { catchError, map, Observable, of, Subject, Subscription } from 'rxjs';
import { ConfigService } from '../services/config.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Hilton Hotel';
  hideRooms = true;
  title: string = 'Room List';
  @ViewChild(HeaderComponent) headerComp!: HeaderComponent;
  selectedRooms!: RoomList;
  @ViewChildren(HeaderComponent) headerChild!: QueryList<HeaderComponent>;
  roomSubscriptions: Subscription = new Subscription();
  rooms: Room = {
    availableRooms: 11,
    bookedRooms: 10,
    totalRooms: 30,
  };
  error$ = new Subject<string>();
  getError$ = this.error$.asObservable();
  roomList: RoomList[] = [];
  totalBytes: number = 0;
  rooms$: Observable<RoomList[]> = this.roomService.getRooms$.pipe(catchError((error) => { 
    // console.log('error', error);
    this.error$.next(error.message);

     return of([]) 
    }));

    roomsCount$: Observable<number> = this.rooms$.pipe( 
      map((rooms) => rooms.length)
    );
    priceFilter = new FormControl(0);
  constructor(private roomService: RoomsService,
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.getPhotos();
    // this.roomSubscriptions = this.roomService.getRooms$.subscribe((rooms) => {
    //   this.roomList = rooms;
    // })
    // this.roomList = this.roomService.getRooms();
    console.log('roomList', this.roomService.getRooms(), this.roomList);
  }
  // ngDoCheck(): void {
  //    console.log(" DO Check");
  ngAfterViewInit(): void {
    // console.log('header COm', this.headerComp);
    // this.headerComp.title = ' Rooms view ';
    // this.headerChild.last.title = 'Rooms time over';
  }
  // }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms';
    console.log(this.roomList)
  }

  selectRoom(room: RoomList): RoomList {
    console.log('room', room);
    this.selectedRooms = room;
    return room;
  }
  addRooms(): void {
    const room: RoomList = {
      roomType: 'Private Ultra',
      roomNumber: '204',
      amenities: 'All',
      price: 90000,
      photos: ' http://www.google.com',
      checkInTime: new Date('22-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    };
    // this.roomList.push(room);
    // this.roomList = [...this.roomList, room];
    this.roomService.addRooms(room).subscribe((room) => {
      console.log('room', room);
      this.roomList = room;
    });
  }
  editRoom(): void {
    const room: RoomList = {
      roomType: 'Private Changes Edit',
      roomNumber: '3',
      amenities: 'All',
      price: 8225,
      photos: ' http://www.google.com',
      checkInTime: new Date('22-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    };
    console.log('room', room);
    this.roomService.editRooms(room).subscribe((room) => {
      console.log('room', room);
      this.roomList = room;
    });
  }

  deleteRoom(): void {
    this.roomService.deleteRooms('3').subscribe((room) => {
      console.log('room', room);
      this.roomList = room;
    });
  }
  getPhotos() {
    this.roomService.getPhotos().subscribe((event) => {
      // console.log('photos', event);
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made!');
          break;
        case HttpEventType.ResponseHeader: {
          console.log('Response header has been received!');
          break;
        }
        case HttpEventType.UploadProgress:
          console.log('Upload in progress');
          break;
        case HttpEventType.DownloadProgress:
          this.totalBytes += event.loaded;
          break;
        case HttpEventType.Response: {
          console.log('photos', event.body);
          break
        }
      }
    });
  }

  ngOnDestroy() {
    if (this.roomSubscriptions) this.roomSubscriptions.unsubscribe();
  }
}
