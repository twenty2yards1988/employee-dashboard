import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeCard from "./components/EmployeeCard";
import { employeeData } from "./data/employees";
import type { Employee } from "./types/employee";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees(employeeData);
  }, []);

  return (
    <div>
      <Navbar />

      <div>
        <Sidebar />

        <main>
          <h1>Employees</h1>

          {employees.map((employee) => (
            <EmployeeCard key={employee.id} employee={employee} />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
