import type { Employee } from "../types/employee";

type EmployeeCardProps = {
  employee: Employee;
};

function EmployeeCard({ employee }: EmployeeCardProps) {
  return (
    <div>
      <h2>{employee.name}</h2>
      <p>{employee.role}</p>
      <p>{employee.department}</p>

      {employee.status === "Active" ? (
        <p>Active</p>
      ) : (
        <p>Inactive</p>
      )}
    </div>
  );
}

export default EmployeeCard;