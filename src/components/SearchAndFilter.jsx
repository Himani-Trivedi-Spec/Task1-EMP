export default function SearchAndFilter({ employees, setEmployees }) {

    return (
        <div className="search-and-filter">
            <input type="text" placeholder="Search by name" onChange={(e) => {
                const searchTerm = e.target.value.toLowerCase();
                const filteredEmployees = employees.filter((employee) =>
                    employee.name.toLowerCase().includes(searchTerm)
                );
                setEmployees(filteredEmployees);
            }} />
        </div>
    )
}