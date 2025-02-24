import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  // providers: [RoomsService],
})
export class ContainerComponent implements AfterContentInit, OnInit {
  @ContentChild(EmployeeComponent) emply!: EmployeeComponent;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    console.log('Employee', this.emply);
    this.emply.employeeName = 'Ratnesh';
  }
}
