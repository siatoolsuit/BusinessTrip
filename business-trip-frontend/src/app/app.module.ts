import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { TravelDestinationsComponent } from './travel-destinations/travel-destinations.component';
import { HomeComponent } from './home/home.component';
import { BusinessTripComponent } from './business-trip/business-trip.component';
import { BusinessTripService } from './services/businessTrip/business-trip.service';
import { UserService } from './services/user/user.service';
import { UsersComponent } from './users/users.component';
import { ApiService } from './services/api/api.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    TravelDestinationsComponent,
    HomeComponent,
    BusinessTripComponent,
    UsersComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BusinessTripService, UserService, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
