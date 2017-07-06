using EmployeeService.Models;
using System.Collections.Generic;


namespace EmployeeService.Service
{
    // NOTE: You can use the "Rename" command on the "Refactor" menu to change the class name "Service1" in code, svc and config file together.
    // NOTE: In order to launch WCF Test Client for testing this service, please select Service1.svc or Service1.svc.cs at the Solution Explorer and start debugging.
    public class GetEmpService : IGetEmpService
    {
        public List<EmployeeDetails> GetEmployees()
        {
            var empDetails = new List<EmployeeDetails>
            {
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE1", EmployeeType = "IT", EmployeeDesignation = "Software Engineer"},
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE2", EmployeeType = "HR", EmployeeDesignation = "HR Specialist"},
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE3", EmployeeType = "IT", EmployeeDesignation = "Software Engineer"},
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE4", EmployeeType = "HR", EmployeeDesignation = "HR Specialist"},
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE5", EmployeeType = "IT", EmployeeDesignation = "Software Engineer"},
                new EmployeeDetails {EmployeeName = "TEST EMPLOYEE6", EmployeeType = "HR", EmployeeDesignation = "HR Specialist"}
            };
            return empDetails;

        }
    }
}
