import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { RoomsComponent } from './Pages/rooms/rooms.component';
import { NewbookingComponent } from './Pages/newbooking/newbooking.component';
import { BookinglistComponent } from './Pages/bookinglist/bookinglist.component';
import { UsersComponent } from './Pages/users/users.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { BookingcalenderComponent } from './Pages/bookingcalender/bookingcalender.component';

const routes: Routes = [
  {
   path:'',
   redirectTo:'login',
   pathMatch:'full'
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:'',component:LayoutComponent,
    children:[
      {
        path:'rooms',component:RoomsComponent
      },
      {
        path:'newbooking',component:NewbookingComponent
      },
      {
        path:'bookinglist',component:BookinglistComponent
      },
      {
        path:'users',component:UsersComponent
      },
      {
        path:'dashboard',component:DashboardComponent
      },
      {
        path:'bookingcalender',component:BookingcalenderComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
