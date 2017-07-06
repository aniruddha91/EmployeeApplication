import { Employee } from '../Models/Employee';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

export abstract class EmployeeLogic {

	abstract GetEmployees(): Observable<Array<Employee>>;

}
@Injectable()
export class EmployeeRealLogic extends EmployeeLogic {
	private Employees: Array<Employee>;
	constructor(private http:Http) {
		super();
		
	}
	GetEmployees(): Observable<Array<Employee>> {
        return this.http.get("http://localhost:43503/Service/GetEmpService.svc/GetEmployees")
			.map((r) => {
				let x:any = r.json();
				let Employees: Array<Employee> = new Array<Employee>();
				
				for (let i = 0; i < x.length; i++){
					let e: Employee = new Employee(
                        x[i].EmployeeName,
                        x[i].EmployeeType,
                        x[i].EmployeeDesignation
					);
					Employees.push(e);
				}
				return Employees;
			});		
	}
		
}