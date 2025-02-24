import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
// import { RoomsComponent } from './rooms/rooms.component';
import { NotFoundComponent } from './not-found/not-found.component';
// import { RoomsBookingComponent } from './rooms/rooms-booking/rooms-booking.component';
// import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'employee', component: EmployeeComponent, canActivate: [LoginGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'rooms', loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsModule), 
    // canActivate: [LoginGuard], 
    // canLoad: [LoginGuard] 
  },
  { path: 'booking/:roomId', loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule), 
    // canActivate: [LoginGuard] 
  },
  { path: 'comments', loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule) },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
