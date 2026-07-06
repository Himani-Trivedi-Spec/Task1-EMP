import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'
import { useEffect, useState } from 'react'

export default function Home({ employees, setEmployees }) {

   const [isShowAddEmployeeForm, setIsShowAddEmployeeForm] = useState(false);
   const [employeeList, setEmployeeList] = useState(employees);
   const [selectStatus, setSelectStatus] = useState("");
   const [searchValue, setSearchValue] = useState("");

   useEffect(() => {
      console.log("Restored Employees in Home.jsx:", employeeList);
   }, [employees]);

   const showAddEmployeeButton = () => {
      setIsShowAddEmployeeForm(!isShowAddEmployeeForm)
      setSelectStatus('')
      setSearchValue('')
      setEmployees(employeeList)

      //clear inputs of select and input
   }

   const filterEmployee = (e) => {
      const status = e.target.value;
      setSelectStatus(status)

      let updatedEmployees = employeeList;
      if (status === "active") {
         updatedEmployees = employeeList.filter(employee => employee.isActive === true);
      }
      else if (status === "inactive") {
         updatedEmployees = employeeList.filter(employee => employee.isActive === false);
      }

      setEmployees(updatedEmployees);
   }

   const deleteEmployeeById = (id) => {
      const updatedList = employeeList.filter((emp) => emp.id != id)

      setEmployees(updatedList)
      setEmployeeList(updatedList)
      console.log("employee to delete :" + id);
   }

   const addNewEmployee = (newEmployee) => {
      const updatedList = [...employeeList, newEmployee]

      setEmployees(updatedList)
      setEmployeeList(updatedList)
   }

   const searchEmployeeByName = (e) => {
      const searchTerm = e.target.value.toLowerCase();
      setSearchValue(searchTerm)
      let updatedEmployees = employees.filter((emp) => emp.name.toLowerCase().includes(searchTerm))
      setEmployees(updatedEmployees);
   }

   const calculateTotalSalary = () => {
      let sum = employeeList.map((emp) => parseInt(emp.salary))
         .reduce((a, b) => a + b, 0)

      alert('Total sum :' + sum)
   }

   return (
      <div className="home">
         <h1>Welcome to Employee Management System</h1>
         <p>This is a simple employee management system built with React.</p>

         <input type="text" placeholder="Search by name" onChange={searchEmployeeByName} value={searchValue}
            disabled = {isShowAddEmployeeForm}
            id='search'
            name='search'
         />

         <select name="status" onChange={filterEmployee} id='status' value={selectStatus}
            disabled={isShowAddEmployeeForm}
         >
            <option value="">Filter by status</option>
            <option value='active'>Active</option>
            <option value='inactive'>Inactive</option>
         </select>

         <button onClick={showAddEmployeeButton}>
            {
               !isShowAddEmployeeForm ? 'Add Employee' : 'Show Employees'
            }
         </button>
         <button onClick={calculateTotalSalary}> Total Salary</button>

         {isShowAddEmployeeForm ?
            <EmployeeForm addNewEmployee={addNewEmployee}
               setIsShowAddEmployeeForm={setIsShowAddEmployeeForm} /> :
            <EmployeeTable employees={employees} deleteEmployee={deleteEmployeeById} />
         }

      </div>
   )

}