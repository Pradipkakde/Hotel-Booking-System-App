import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { LayoutComponent } from './Pages/layout/layout.component';
import { DashboardComponent } from './Pages/dashboard/dashboard.component';
import { RoomsComponent } from './Pages/rooms/rooms.component';
import { NewbookingComponent } from './Pages/newbooking/newbooking.component';
import { BookinglistComponent } from './Pages/bookinglist/bookinglist.component';
import { UsersComponent } from './Pages/users/users.component';
import { BookingcalenderComponent } from './Pages/bookingcalender/bookingcalender.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    DashboardComponent,
    RoomsComponent,
    NewbookingComponent,
    BookinglistComponent,
    UsersComponent,
    BookingcalenderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
