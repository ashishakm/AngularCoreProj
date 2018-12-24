import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
//import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { EmployeeService } from './Services/empservice';
import { FetchEmployeeComponent } from './components/fetchemployee/fetchemployee';
import { CounterComponent } from './components/counter/counter.component';
import { Addemployee } from './components/addemployee/Addemployee';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        FetchEmployeeComponent,
        Addemployee,
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
            { path: 'register-employee', component: Addemployee },
            { path: 'employee/edit/:id', component: Addemployee },  
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [EmployeeService]  
})
export class AppModuleShared {
}
    