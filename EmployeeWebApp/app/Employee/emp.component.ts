
import { Component, ViewChild } from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmployeeLogic } from '../logics/employeelogic';
import { EmployeeRealLogic } from '../logics/employeelogic';
import { EmployeeComponentList } from './emplist.component';

@Component({

	moduleId: module.id,
	selector: 'employee-component',
	templateUrl: './emp.component.html'
})

export class EmpComponent {
	
	IsAddnew: boolean = false;
	@ViewChild("Emplist") eList: EmployeeComponentList; 
	AddFuntion(): void {
		this.IsAddnew = true;
	}
	CancelFunction(): void {
		this.IsAddnew = false;
	}
	AfterSave(): void {
		this.IsAddnew = false;
		//this.eList.RefreshGrid();
	}
	//Employees: Array<Employee>;
	//constructor(private EmpLogic: EmployeeLogic) {
	//	this.Employees = this.EmpLogic.GetEmployees();
	//}
	//Save(fName: string, lName: string, salary: number): void {
	//	let e: Employee = new Employee(fName, lName, salary);
	//	this.Employees = this.EmpLogic.Save(e);
	//	this.IsAddnew = false;	
}