 import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsComponent } from './rooms.component';
import { RouteConfigToken } from '../search/routeConfig.service';

describe('RoomsComponent', () => {
  let component: RoomsComponent;
  let fixture: ComponentFixture<RoomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsComponent ],
      providers: [
        {
          provide: RouteConfigToken,
          useValue: {title: 'Rooms'}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should toggle',() =>{
    component.hideRooms = false;
    component.toggle();
    expect(component.hideRooms).toBe(true);
  });
});
