import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { TableusersComponent } from './tableusers/tableusers.component';
import { TableprojetComponent } from './tableprojet/tableprojet.component';
import { TablecontratComponent } from './tablecontrat/tablecontrat.component';
import { TablereservationComponent } from './tablereservation/tablereservation.component';
import { AddprojetComponent } from './addprojet/addprojet.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import {MatCardModule} from"@angular/material/card";
import { PatternComponent } from './pattern/pattern.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    TableusersComponent,
    TableprojetComponent,
    TablecontratComponent,
    TablereservationComponent,
    AddprojetComponent,
    
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
