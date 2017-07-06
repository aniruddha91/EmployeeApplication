import { Component,EventEmitter ,Output} from '@angular/core';
import { Employee } from '../Models/Employee';
import { EmployeeLogic } from '../logics/employeelogic'
import { EmployeeRealLogic } from '../logics/employeelogic'
import { FilterPipe, SortByPipe } from '../Logics/category.pipe'


@Component({

	moduleId: module.id,
	selector: 'employee-list',
    templateUrl: './emplist.component.html'
   })

export class EmployeeComponentList {
    Employees: Array<Employee>;
    isDesc: boolean = false;
    column: string = 'employeeName';
    direction: number;
	@Output() OnAddNewClick: EventEmitter<void> = new EventEmitter<void>();
	constructor(private EmpLogic: EmployeeLogic) {
		this.EmpLogic.GetEmployees().subscribe((r) => {
			this.Employees = r;
		});

    }

    sort(property : string) {
        this.isDesc = !this.isDesc; //change the direction    
        this.column = property;
        this.direction = this.isDesc ? 1 : -1;
    };
}
