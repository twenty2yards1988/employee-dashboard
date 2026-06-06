import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import EmployeeCard from "./components/EmployeeCard";
import { employeeData } from "./data/employees";
import type { Employee } from "./types/employee";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);

  useEffect(() => {
    setEmployees(employeeData);
  }, []);

  return (
    <div className="app">
      <Navbar />

      <div className="layout">
        <Sidebar />

        <main className="main-content">
          <h1>Employees</h1>

          <div className="employee-grid">
            {employees.map((employee) => (
              <EmployeeCard key={employee.id} employee={employee} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;