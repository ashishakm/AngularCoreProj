import { Component, OnInit,Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../Services/empservice';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
    selector: 'fetchemployee',
    templateUrl: './fetchemployee.component.html'
})

export class FetchEmployeeComponent  {
    public empList: EmployeeData[];
    employeeForm: FormGroup;
    title: string = "Create";
    id: number;
    errorMessage: any;

    constructor(public http: Http, private _router: Router, private _avRoute: ActivatedRoute, private _employeeService: EmployeeService) {
        this.getEmployees();
        if (this._avRoute.snapshot.params["id"]) {
            this.id = this._avRoute.snapshot.params["id"];
        }
    }

    getEmployees() {
        this._employeeService.getEmployees().subscribe(
            data => this.empList = data
        )
    }
    ngOnInit() {
        if (this.id > 0) {
            this.title = "Edit";
            this._employeeService.getEmployeeById(this.id)
                .subscribe(resp => this.employeeForm.setValue(resp)
                , error => this.errorMessage = error);
        }
    }
    delete(employeeID) {
        var ans = confirm("Do you want to delete customer with Id: " + employeeID);
        if (ans) {
            this._employeeService.deleteEmployee(employeeID).subscribe((data) => {
                this.getEmployees();
            }, error => console.error(error))
        }
    }
}

interface EmployeeData {
    id: number;
    name: string;
    gender: string;
    department: string;
    city: string;
}  