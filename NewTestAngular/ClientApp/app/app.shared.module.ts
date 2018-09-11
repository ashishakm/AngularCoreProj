import { NgModule } from '@angular/core';
import { EmployeeService } from './Services/empservice';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import {FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee';
import { CounterComponent } from './components/counter/counter.component';
import { createemployee } from './components/addemployee/Addemployee';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        FetchEmployeeComponent,
        createemployee,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,  
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-employee', component: FetchEmployeeComponent },
            { path: 'register-employee', component: createemployee },
            { path: 'employee/edit/:id', component: FetchEmployeeComponent },  
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService]  
})
export class AppModuleShared {
}
    