using System.Runtime.Serialization;

namespace EmployeeService.Models
{
    public class EmployeeDetails
    {
        [DataMember]
        public string EmployeeName { get; set; }
        [DataMember]
        public string EmployeeType { get; set; }
        [DataMember]
        public string EmployeeDesignation { get; set; }
    }
}