import {
  AfterViewInit,
  Component,
  ComponentRef,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LocalStorageToken } from './localstorage.token';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<h1> Hello World</h1>', inline html
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'hotelinventoryapp';
  role = 'Admin';
  // @ViewChild('user',{read: ViewContainerRef}) vcr!: ViewContainerRef;
  @ViewChild('user', { static: true }) eleRef!: ElementRef;
constructor(@Inject(LocalStorageToken) private localStorage: Storage){

}
  ngOnInit(): void {
    // this.eleRef.nativeElement.innerText = 'Hatshii Hotel';
    this.localStorage.setItem('name', 'Hilton Hotel');
  }

  ngAfterViewInit(): void {
    // const compRef: ComponentRef<RoomsComponent> =
    //   this.vcr.createComponent(RoomsComponent);   // Dynamically loading a component
    //   compRef.instance.hotelName = "Ratnesh Hotel";
    //   compRef.instance.rooms.totalRooms = 105;
  }
}
