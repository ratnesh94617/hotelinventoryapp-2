import {
  AfterContentInit,
  Component,
  ContentChild,
  OnInit,
} from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements AfterContentInit, OnInit {
  @ContentChild(EmployeeComponent) emply!: EmployeeComponent;

  ngOnInit(): void {}
  ngAfterContentInit(): void {
    this.emply.employeeName = 'Ratnesh';
  }
}
