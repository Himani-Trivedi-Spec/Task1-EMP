import React from "react";

export default function EmployeeForm({ addNewEmployee, setIsShowAddEmployeeForm }) {

    const addEmployee = (e) => {
        e.preventDefault();

        const newEmployee = {
            id: e.target.id.value,
            name: e.target.name.value,
            email: e.target.email.value,
            age: e.target.age.value,
            salary: e.target.salary.value,
            isActive: e.target.status.value === "active" ? true : false,
        };
        addNewEmployee(newEmployee);
        setIsShowAddEmployeeForm(false);
    }


    return (
        <div className="employee-form">
            <h2>Add Employee</h2>
            <form onSubmit={addEmployee} id="form">

                <label htmlFor="name">Employee ID:</label>
                <input type="text" id="emp_id" name="id" required />
                <br/>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br/>

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br/>


                <label htmlFor="age">Age:</label>
                <input type="number" id="age" name="age" required />
                <br/>


                <label htmlFor="salary">Salary:</label>
                <input type="number" id="salary" name="salary" required />
                <br/>

                <label htmlFor="salary">Status:</label>
                <input type="radio" id="status-active" name="status" value="active" required />
                <label htmlFor="status-active">Active</label>
                <input type="radio" id="status-inactive" name="status" value="inactive" required />
                <label htmlFor="status-inactive">Inactive</label>
                <br/>


                <button type="submit">Add Employee</button>
            </form>


        </div>
    )
}