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
@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit, AfterViewInit {
  hotelName = 'Hilton Hotel';
  hideRooms = false;
  title: string = 'Room List';
  @ViewChild(HeaderComponent) headerComp!: HeaderComponent;
  selectedRooms!: RoomList;
  @ViewChildren(HeaderComponent) headerChild!: QueryList<HeaderComponent>;

  rooms: Room = {
    availableRooms: 11,
    bookedRooms: 10,
    totalRooms: 30,
  };
  roomList: RoomList[] = [];
  constructor(private roomService: RoomsService) {}

  ngOnInit(): void {
    this.roomList = this.roomService.getRooms();
  }
  // ngDoCheck(): void {
  //    console.log(" DO Check");
  ngAfterViewInit(): void {
    console.log('header COm', this.headerComp);
    this.headerComp.title = ' Rooms view ';
    this.headerChild.last.title = 'Rooms time over';
  }
  // }
  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = 'Rooms';
  }

  selectRoom(room: RoomList): RoomList {
    console.log('room', room);
    this.selectedRooms = room;
    return room;
  }
  addRooms(): void {
    const room: RoomList = {
      roomType: 'Private Ultra',
      roomNo: 204,
      amenities: 'All',
      price: 90000,
      photos: ' http://www.google.com',
      checkInTime: new Date('22-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    };
    // this.roomList.push(room);
    this.roomList = [...this.roomList, room];
  }
}
