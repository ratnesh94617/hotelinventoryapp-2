import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../environments/environment';
import { APP_SERVICE_CONFIG } from '../../AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class RoomsService { 
  roomList: RoomList[] = [];
 header = new HttpHeaders({'token': 'abd122332nnsd'});
  getRooms$ = this._http.get<RoomList[]>('/api/rooms ',{ headers: this.header}).pipe(shareReplay(1));
  constructor(@Inject(APP_SERVICE_CONFIG) private config: AppConfig,
private _http: HttpClient) {
    console.log("rooms service available");
    console.log(environment.apiUrl);
    console.log(this.config.apiEndPoint)
  }

  getRooms() {
    return this._http.get<RoomList[]>('/api/rooms');
  }
  addRooms(room: RoomList) {
    return this._http.post<RoomList[]>('/api/rooms', room);
  }

  editRooms(room: RoomList){
    return this._http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`, room);
  }

  deleteRooms(room: string){
    return this._http.delete<RoomList[]>(`/api/rooms/${room}`);
  }
  getPhotos() {
    // const request = new HttpRequest('GET', `${this.config.apiEndPoint}/api/rooms/photos`, {});
    const request = new HttpRequest('GET', `https://jsonplaceholder.typicode.com/photos`, {
      reportProgress: true
    });

    return this._http.request(request);

  }

}