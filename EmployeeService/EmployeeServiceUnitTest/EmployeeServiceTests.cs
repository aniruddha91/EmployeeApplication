using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;
using Moq;
using Ploeh.AutoFixture;
using Ploeh.AutoFixture.AutoMoq;
using EmployeeService.Models;
using EmployeeService.Service;

namespace EmployeeServiceUnitTest
{
    public class EmployeeServiceTests
    {
        private readonly Fixture _fixture;
        public EmployeeServiceTests()
        {
            _fixture = new Fixture();
            _fixture.Customize(new AutoMoqCustomization());
        }
        [Fact]
        public void EmployeeService_FetchesData()
        {
            //Arrange
            var service = _fixture.Create<GetEmpService>();
            //Act
            var result = service.GetEmployees();
            //Assert
            Assert.NotNull(result);
        }
        [Fact]
        public void EmployeeService_ReturnsEmployeeNameAsExpected()
        {
            //Arrange
            var empName = "Test EMPLOYEE1";
            var empDetails = new EmployeeDetails {EmployeeName = empName, EmployeeDesignation = "",EmployeeType = ""};
            var listEmpDetails = new List<EmployeeDetails>();
            listEmpDetails.Add(empDetails);
            var service = _fixture.Freeze<Mock<IGetEmpService>>();
            service.Setup(x => x.GetEmployees()).Returns(listEmpDetails);
            //Act
            var result = service.Object.GetEmployees();
            //Assert
            Assert.Equal(empName,result.Select(x => x.EmployeeName).FirstOrDefault());
        }
    }
}
