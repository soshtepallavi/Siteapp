import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {RouterModule,Routes} from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {MatFormFieldModule,MatSelectModule,MatSlideToggleModule,MatDividerModule,MatTooltipModule,
        MatBadgeModule,MatTabsModule, MatButtonModule, MatCardModule,MatCheckboxModule, MatDialogModule, MatInputModule, MatTableModule,
        MatToolbarModule,MatGridListModule,MatExpansionModule, MatMenuModule,MatIconModule, MatProgressSpinnerModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ContentComponent } from './dashboard/content/content.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartsModule } from 'ng4-charts/ng4-charts';
import { BarchartComponent } from './dashboard/content/barchart/barchart.component';
import { PiechartComponent } from './dashboard/content/piechart/piechart.component';
import { ChartComponent } from './dashboard/content/chart/chart.component';
import { LinechartComponent } from './dashboard/content/linechart/linechart.component';
import { SettingbarComponent } from './dashboard/settingbar/settingbar.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { NgStickyDirective } from 'ng-sticky';
import { ScrollbarModule } from 'ngx-scrollbar';
import { OverlayModule } from '@angular/cdk/overlay';
import { FormsModule } from '@angular/forms';
import { ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const appRoutes:Routes = [{
  path: '',
  component: LoginComponent
},
{
 path:'dashboard',
 component:DashboardComponent
}]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    ContentComponent,
    BarchartComponent,
    PiechartComponent,
    ChartComponent,
    LinechartComponent,
    SettingbarComponent,
    HeaderComponent,
    NgStickyDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatButtonModule, 
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatGridListModule,
    MatExpansionModule,
    FlexLayoutModule,
    MatBadgeModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    ChartsModule,
    MatSlideToggleModule,
    MatDividerModule,
    ScrollbarModule,
    OverlayModule,
    ToastrModule.forRoot()
    

  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
