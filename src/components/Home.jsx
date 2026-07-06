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

   const applyFilters = (search , status ) => {
      let result = employeeList

      if (status === "active") {
         result = result.filter(employee => employee.isActive === true);
      }
      else if (status === "inactive") {
         result = result.filter(employee => employee.isActive === false);
      }

      const s = (search || '').trim().toLowerCase()
      if (s) result = result.filter(employee => employee.name.toLowerCase().includes(s))

      setEmployees(result)

      console.log(result, status, search)
   }

   const searchEmployeeByName = (e) => {
      const search = e.target.value.toLowerCase()
      setSearchValue(search)
      applyFilters(search, selectStatus)
   }

   const filterEmployee = (e) => {
      const status = e.target.value;
      setSelectStatus(status)
      applyFilters(searchValue, status)
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


   const showAddEmployeeButton = () => {
      setIsShowAddEmployeeForm(!isShowAddEmployeeForm)
      setSelectStatus('')
      setSearchValue('')
      setEmployees(employeeList)
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
            disabled={isShowAddEmployeeForm}
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