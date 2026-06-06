import type { Employee } from "../types/employee";

type EmployeeCardProps = {
  employee: Employee;
};

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div className="employee-card">
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>{employee.department}</p>

      <span
        className={
          employee.status === "Active"
            ? "status active"
            : "status inactive"
        }
      >
        {employee.status}
      </span>
    </div>
  );
}

export default EmployeeCard;