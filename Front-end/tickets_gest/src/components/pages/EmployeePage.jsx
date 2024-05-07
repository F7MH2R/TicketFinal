import React, { useEffect, useState } from "react";
import EmployeeTable from "./EmployeeTable";

const EmployeePage = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula una llamada a la API para obtener empleados
    setTimeout(() => {
      setEmployees([
        { id: 1, name: "Juan", position: "Gerente" },
        { id: 2, name: "Ana", position: "Desarrolladora" },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Cargando empleados...</p>
      ) : (
        <EmployeeTable employees={employees} />
      )}
    </div>
  );
};

export default EmployeePage;
