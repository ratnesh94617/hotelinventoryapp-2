import { Component } from '@angular/core';
import { RoomList } from '../rooms';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})
export class RoomsAddComponent {
  room: RoomList = {
    roomType: '',
    amenities: '',
    checkInTime: new Date(),
    checkOutTime: new Date(),
    photos: '',
    price: 0,
    roomNumber: '',
    rating: 0,
  };
  successMessage = '';
  constructor(private roomService: RoomsService) { }

  addRooms(roomsForm: NgForm) {
    console.log(this.room);
    this.roomService.addRooms(this.room).subscribe((data) => {
      console.log(data);
      this.successMessage = 'Room added successfully';
      // roomsForm.reset();
      roomsForm.resetForm({
        roomType: '',
        amenities: '',
        checkInTime: new Date(),
        checkOutTime: new Date(),
        photos: '',
        price: 0,
        roomNumber: '',
        rating: 0,
      });
      setTimeout(() => {
        this.successMessage = '';
      }, 3000);
    });
  }
}
