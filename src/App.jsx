import { useState } from 'react'
import Home from './components/Home.jsx'
import { employee } from './data/employee.js'
import { Routes, Route } from 'react-router-dom'

function App() {

  const [employees, setEmployees] = useState(employee.data);

  return (
    <Routes>
      <Route path="/" element={<Home employees={employees} setEmployees={setEmployees} />}>
        {/* <Route path="/add-employee" element={<EmployeeForm employees={employees} setEmployees={setEmployees} />} /> */}
      </Route>
    </Routes>
  )

}

export default App
