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
import { HelpSectionComponent } from './help-section/help-section.component';
import { BillingInvoicesTableComponent } from './billing-invoices-table/billing-invoices-table.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { PayComponent } from './pay/pay.component';
import { HelpQuestionsComponent } from './help-questions/help-questions.component';
import { HelpTopicsComponent } from './help-topics/help-topics.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AllComponent } from './users/all/all.component';
import { OverviewComponent } from './users/overview/overview.component';
import { CreateNewRoleComponent } from './users/create-new-role/create-new-role.component';
import { DashboardsRealtimeTrackingComponent } from './dashboards/dashboards-realtime-tracking/dashboards-realtime-tracking.component';
import { DashboardsOverviewComponent } from './dashboards/dashboards-overview/dashboards-overview.component';
import { DashboardsVehiclesComponent } from './dashboards/dashboards-vehicles/dashboards-vehicles.component';
import { DashboardsDriversComponent } from './dashboards/dashboards-drivers/dashboards-drivers.component';
import { DashboardsJobsComponent } from './dashboards/dashboards-jobs/dashboards-jobs.component';
import { DashboardsMaintainanceComponent } from './dashboards/dashboards-maintainance/dashboards-maintainance.component';
import { ManageShiftsComponent } from './drivers/manage-shifts/manage-shifts.component';
import { DriversOverviewComponent } from './drivers/drivers-overview/drivers-overview.component';
import { RoutesOverviewComponent } from './routes/routes-overview/routes-overview.component';
import { VehiclesOverviewComponent } from './vehicles/vehicles-overview/vehicles-overview.component';
import { ManageGeoZonesComponent } from './vehicles/manage-geo-zones/manage-geo-zones.component';

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

      // Users Routes
      {
        path: 'users',
        component: UsersComponent,
        children: [
          { path: '', component: OverviewComponent },
          { path: 'all', component: AllComponent },
          { path: 'new-role', component: CreateNewRoleComponent },
        ],
      },

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

      // Billing Routes
      {
        path: 'billing',
        component: BillingComponent,
        children: [
          { path: '', component: BillingInvoicesTableComponent },
          { path: 'invoice', component: InvoiceComponent },
          { path: 'pay', component: PayComponent },
        ],
      },

      // Help Section Routes
      {
        path: 'help',
        component: HelpSectionComponent,
        children: [
          { path: '', component: HelpTopicsComponent },
          { path: 'faq', component: HelpQuestionsComponent },
          { path: 'faq/article', component: ArticleDetailsComponent },
        ]
      },

      // Fleetpoint Routes
      {
        path: 'fleetpoint',
        component: FleetpointComponent,
        children: [
          { path: '', component: FleetpointSidebarComponent },
          { path: 'thankyou', component: ThankyouComponent },
          {
            path: 'dashboards',
            component: DashboardsComponent,
            children: [
              { path: '', redirectTo: 'realtime-tracking', pathMatch: 'full' },
              { path: 'realtime-tracking', component: DashboardsRealtimeTrackingComponent },
              { path: 'overview', component: DashboardsOverviewComponent },
              { path: 'vehicles', component: DashboardsVehiclesComponent },
              {
                path: 'drivers', component: DashboardsDriversComponent,

              },
              { path: 'jobs', component: DashboardsJobsComponent },
              { path: 'maintainance', component: DashboardsMaintainanceComponent },
            ]
          },
          { path: 'dashcams', component: DashcamsComponent },
          { path: 'fleets', component: FleetsComponent },
          {
            path: 'drivers',
            component: DriversComponent,
            children: [
              { path: '', component: DriversOverviewComponent },
              { path: 'manage-shifts', component: ManageShiftsComponent },
            ],
          },
          {
            path: 'vehicles',
            component: VehiclesComponent,
            children: [
              { path: '', component: VehiclesOverviewComponent },
              { path: 'manage-geo-zones', component: ManageGeoZonesComponent },
            ],
          },
          {
            path: 'routes',
            component: RoutesComponent,
            children: [
              { path: '', component: RoutesOverviewComponent },
            ],
          },
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
