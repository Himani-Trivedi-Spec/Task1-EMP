import React from "react";

export default function EmployeeForm({ employees, setEmployees, setIsShowAddEmployeeForm }) {

    const addEmployee = (e) => {
        e.preventDefault();

        const newEmployee = {
            id: e.target.id.value,
            name: e.target.name.value,
            email: e.target.email.value,
            age: e.target.age.value,
            salary: e.target.salary.value,
            isActive: true,
        };
        setEmployees([...employees, newEmployee]);
        setIsShowAddEmployeeForm(false);
    }


    return (
        <div className="employee-form">
            <h2>Add Employee</h2>
            <form onSubmit={addEmployee} id="form">

                <label htmlFor="name">Employee ID:</label>
                <input type="text" id="emp_id" name="id" required />

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />

                <label htmlFor="salary">Salary:</label>
                <input type="number" id="salary" name="salary" required />

                <button type="submit">Add Employee</button>
            </form>


        </div>
    )
}