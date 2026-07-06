import { useState } from 'react';

export default function EmployeeTable({ employees, setEmployees }) {

    return (
        <div className="employee-table">
            <table>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.age}</td>
                            <td>{employee.salary}</td>
                            <td>{employee.isActive ? 'Active' : 'Inactive'}</td>
                            <td><button onClick={() => {
                                const updatedEmployess = employees.filter(
                                    (emp) => emp.id !== employee.id
                                )
                                setEmployees(updatedEmployess);
                            }}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}