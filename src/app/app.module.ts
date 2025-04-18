import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuyComponent } from './buy/buy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FleetpointComponent } from './fleetpoint/fleetpoint.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { FleetpointSidebarComponent } from './fleetpoint-sidebar/fleetpoint-sidebar.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { DashcamsComponent } from './dashcams/dashcams.component';
import { FleetsComponent } from './fleets/fleets.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RoutesComponent } from './routes/routes.component';
import { JobsComponent } from './jobs/jobs.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { ReportsComponent } from './reports/reports.component';
import { FuelTrackingComponent } from './fuel-tracking/fuel-tracking.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { MeasuresComponent } from './measures/measures.component';
import { CountriesComponent } from './countries/countries.component';
import { SettingsAndPrivacyComponent } from './settings-and-privacy/settings-and-privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    DashboardComponent,
    WelcomeComponent,
    BuyComponent,
    SidebarComponent,
    NavbarComponent,
    FleetpointComponent,
    HomeComponent,
    UsersComponent,
    SettingsComponent,
    BillingComponent,
    FleetpointSidebarComponent,
    ThankyouComponent,
    DashcamsComponent,
    FleetsComponent,
    DriversComponent,
    VehiclesComponent,
    RoutesComponent,
    JobsComponent,
    MaintainanceComponent,
    ReportsComponent,
    FuelTrackingComponent,
    DashboardsComponent,
    SettingsSidebarComponent,
    NotificationsComponent,
    AccountSettingsComponent,
    MeasuresComponent,
    CountriesComponent,
    SettingsAndPrivacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
