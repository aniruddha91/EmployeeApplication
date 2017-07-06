import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmployeeLogic, EmployeeRealLogic } from '../logics/employeelogic';
import { EmpComponent } from '../employee/emp.component';
import { EmployeeComponentList } from '../employee/emplist.component';
import { HttpModule } from '@angular/http';
import { FilterPipe, SortByPipe} from "../Logics/category.pipe";

@NgModule({
	imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [AppComponent, EmpComponent, EmployeeComponentList, FilterPipe, SortByPipe],
	bootstrap: [AppComponent],
	providers: [{ provide: EmployeeLogic, useClass: EmployeeRealLogic}]
})
export class AppModule {}