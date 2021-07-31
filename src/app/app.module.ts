import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { MatCardModule, MatMenuModule, MatIconModule, MatTabsModule, MatSidenavModule, MatToolbarModule, MatListModule,MatDatepickerModule,
  MatButtonModule, MatProgressSpinnerModule, MatInputModule, MatExpansionModule, MatGridListModule, MatDialogModule, MatSelectModule,MatSliderModule, MatSlideToggleModule } from '@angular/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FlexLayoutModule} from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberComponent } from './member/member.component';
import { LoginComponent } from './login/login.component';
import { BooklendComponent } from './booklend/booklend.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { GeneralDashboardComponent } from './general-dashboard/general-dashboard.component';
import { AreaComponent } from './general-dashboard/area/area.component';
import { CardComponent } from './general-dashboard/card/card.component';
import { PieComponent } from './general-dashboard/pie/pie.component';
import {DoughnutComponent} from './shared/doughnut/doughnut.component';
import {GaugeComponent} from './shared/gauge/gauge.component';
import {SemiGaugeComponent} from './shared/semigauge/semigauge.component';
import {ColumnComponent} from './shared/column/column.component';
import {StackedColumnComponent} from './shared/stacked-column/stacked-column.component';
import { UserComponent } from './user/user.component'
import { DynamiclineComponent } from './shared/dynamic-line/dynamic-line.component';
import { CounterComponent } from './counter/counter.component';
import { BookusageComponent } from './bookusage/bookusage.component';
import {DualaxisComponent} from './shared/dual-axis/dual-axis.component';
import { CreateComponent } from './create/create.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ResizableModule } from 'angular-resizable-element';
import { CustomComponent } from './custom/custom.component';
import { ChartDialogComponent } from './chartdialog/chartdialog.component';
import { AuthhomeComponent } from './authhome/authhome.component';
import {FunnelComponent} from './shared/funnel/funnel.component';
import { TilemapComponent } from './shared/Tilemap/tilemap.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);
@NgModule({
  declarations: [
    HighchartsChartComponent,
    AppComponent,
    MemberComponent,
    LoginComponent,
    BooklendComponent,
    ChartDialogComponent,
    GeneralDashboardComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    DoughnutComponent,
    GaugeComponent,
    SemiGaugeComponent,
    ColumnComponent,
    StackedColumnComponent,
    DynamiclineComponent,
    UserComponent,
    CounterComponent,
    BookusageComponent,
    DualaxisComponent,
    CreateComponent,
    CustomComponent,
    AuthhomeComponent,
    FunnelComponent,
    TilemapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    MatSidenavModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatGridListModule,
    MatButtonModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule ,
    MatDatepickerModule,   
    MatMenuModule,MatIconModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AppRoutingModule,
    FusionChartsModule,
    DragDropModule,
    ResizableModule
  ],
  providers: [
  ],
  entryComponents: [
    LoginComponent,
    BooklendComponent,
    ChartDialogComponent
],
  bootstrap: [AppComponent]
})
export class AppModule { }
