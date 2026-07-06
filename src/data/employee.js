import React from "react";

export const employee = {
    data: [
        {
            id: 1,
            name: "John Doe",
            email: "john.doe@example.com",
            age: 28,
            salary: 50000,
            isActive: true,
        },
        {
            id: 2,
            name: "Jane Doe",
            email: "john.doe@example.com",
            age: 28,
            salary: 50000,
            isActive: true,
        },
        {
            id: 3,
            name: "himani Doe",
            email: "john.vysgd.doe@example.com",
            age: 28,
            salary: 50000,
            isActive: false,
        },
        {
            id: 4,
            name: "nidhi Doe",
            email: "john.sdsd.doe@example.com",
            age: 28,
            salary: 50000,
            isActive: true,
        }
    ],

    addEmployee: function (newEmployee) {
        this.data.push(newEmployee);
    }
}

