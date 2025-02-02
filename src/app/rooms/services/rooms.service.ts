import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
@Injectable({
  providedIn: 'root',
})
export class RoomsService { 
  roomList: RoomList[] = [
    {
      roomType: 'Delux King Size',
      roomNo: 1,
      amenities: 'All Basic',
      price: 2000,
      photos: ' http://www.google.com',
      checkInTime: new Date('22-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    },
    {
      roomType: 'King Size',
      roomNo: 2,
      amenities: 'Basic',
      price: 1500,
      photos: ' http://www.google.com',
      checkInTime: new Date('21-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    },
    {
      roomType: 'Private',
      roomNo: 3,
      amenities: 'All',
      price: 20000,
      photos: ' http://www.google.com',
      checkInTime: new Date('22-Jun-2024'),
      checkOutTime: new Date('23-Jun-2024'),
    },
  ];

  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig) {
    console.log("rooms service available");
    console.log(environment.apiUrl)
  }

  getRooms(): RoomList[] {
    return this.roomList;
  }
}
