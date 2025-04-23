import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { BuyComponent } from './buy/buy.component';
import { FleetpointComponent } from './fleetpoint/fleetpoint.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { BillingComponent } from './billing/billing.component';
import { FleetpointSidebarComponent } from './fleetpoint-sidebar/fleetpoint-sidebar.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { DashboardsComponent } from './dashboards/dashboards.component';
import { DashcamsComponent } from './dashcams/dashcams.component';
import { FleetsComponent } from './fleets/fleets.component';
import { DriversComponent } from './drivers/drivers.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { RoutesComponent } from './routes/routes.component';
import { JobsComponent } from './jobs/jobs.component';
import { MaintainanceComponent } from './maintainance/maintainance.component';
import { ReportsComponent } from './reports/reports.component';
import { FuelTrackingComponent } from './fuel-tracking/fuel-tracking.component';
import { SettingsSidebarComponent } from './settings-sidebar/settings-sidebar.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { SettingsAndPrivacyComponent } from './settings-and-privacy/settings-and-privacy.component';
import { MeasuresComponent } from './measures/measures.component';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [
  // Authentication Routes
  {
    path: 'auth',
    component: AuthenticationComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent },
      { path: 'reset-password', component: ResetPasswordComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  // Dashboard Routes
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'welcome', component: WelcomeComponent },
      { path: 'buy', component: BuyComponent },
      { path: 'home', component: HomeComponent },
      { path: 'users', component: UsersComponent },

      // Settings Routes
      {
        path: 'settings',
        component: SettingsComponent,
        children: [
          { path: '', component: SettingsSidebarComponent },
          { path: 'notifications', component: NotificationsComponent },
          { path: 'account-settings', component: AccountSettingsComponent },
          { path: 'security-and-privacy', component: SettingsAndPrivacyComponent },
          { path: 'measures', component: MeasuresComponent },
          { path: 'countries', component: CountriesComponent },
        ],
      },

      { path: 'billing', component: BillingComponent },

      // Fleetpoint Routes
      {
        path: 'fleetpoint',
        component: FleetpointComponent,
        children: [
          { path: '', component: FleetpointSidebarComponent },
          { path: 'thankyou', component: ThankyouComponent },
          { path: 'dashboards', component: DashboardsComponent },
          { path: 'dashcams', component: DashcamsComponent },
          { path: 'fleets', component: FleetsComponent },
          { path: 'drivers', component: DriversComponent },
          { path: 'vehicles', component: VehiclesComponent },
          { path: 'routes', component: RoutesComponent },
          { path: 'jobs', component: JobsComponent },
          { path: 'maintainance', component: MaintainanceComponent },
          { path: 'reports', component: ReportsComponent },
          { path: 'fuel-tracking', component: FuelTrackingComponent },
        ],
      },

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    ],
  },

  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: '**', redirectTo: 'auth/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
