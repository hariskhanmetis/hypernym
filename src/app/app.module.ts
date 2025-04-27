import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';
import { environment } from 'src/environments/environment';
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
import { HelpSectionComponent } from './help-section/help-section.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BillingInvoicesTableComponent } from './billing-invoices-table/billing-invoices-table.component';
import { PayComponent } from './pay/pay.component';
import { HelpQuestionsComponent } from './help-questions/help-questions.component';
import { AnswerQuestionsHeaderComponent } from './answer-questions-header/answer-questions-header.component';
import { HelpTopicsComponent } from './help-topics/help-topics.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { AllComponent } from './users/all/all.component';
import { UsersRolesCardsComponent } from './users/users-roles-cards/users-roles-cards.component';
import { UsersListTableComponent } from './users/users-list-table/users-list-table.component';
import { OverviewComponent } from './users/overview/overview.component';
import { CreateNewRoleComponent } from './users/create-new-role/create-new-role.component';

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
    SettingsAndPrivacyComponent,
    HelpSectionComponent,
    InvoiceComponent,
    BillingInvoicesTableComponent,
    PayComponent,
    HelpQuestionsComponent,
    AnswerQuestionsHeaderComponent,
    HelpTopicsComponent,
    ArticleDetailsComponent,
    AllComponent,
    UsersRolesCardsComponent,
    UsersListTableComponent,
    OverviewComponent,
    CreateNewRoleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  providers: [
    { provide: 'googleMapsApiKey', useValue: environment.googleMapsApiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
