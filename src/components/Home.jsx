import React, {useState} from 'react'
import { Outlet } from 'react-router-dom'
import SearchAndFilter from './SearchAndFilter'
import EmployeeTable from './EmployeeTable'
import EmployeeForm from './EmployeeForm'

export default function Home({employees, setEmployees}) {

   const [isShowAddEmployeeForm, setIsShowAddEmployeeForm] = useState(false);

   return (
      <div className="home">
         <h1>Welcome to Employee Management System</h1>
         <p>This is a simple employee management system built with React.</p>

         <SearchAndFilter employees={employees} setEmployees={setEmployees}/>

         <button onClick={() => setIsShowAddEmployeeForm(!isShowAddEmployeeForm)}> Add Employee</button>

         {isShowAddEmployeeForm && <EmployeeForm employees={employees} setEmployees={setEmployees} setIsShowAddEmployeeForm={setIsShowAddEmployeeForm}   />}


         <EmployeeTable employees={employees} setEmployees={setEmployees}/>
      </div>
   )

}