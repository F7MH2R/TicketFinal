import React, { useState } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit"; // Si todavía usas MDBIcon, aunque es opcional

function EmployeeRoleDropdown({ setEmployeeRole }) {
  const roles = [
    { value: "Administrator", icon: "user-tie" },
    { value: "Technical Staff", icon: "cogs" },
    { value: "Support Staff", icon: "headset" },
  ];

  const [selectedRole, setSelectedRole] = useState(null);

  const handleSelect = (role) => {
    setEmployeeRole(role);
    setSelectedRole(role);
  };

  return (
    <div className="mb-4">
      <label>Select employee role:</label>
      <DropdownButton
        id="employee-role-dropdown"
        title={selectedRole ? `Role: ${selectedRole}` : "Select Role"}
        variant="outline-warning"
      >
        {roles.map((role, index) => (
          <Dropdown.Item key={index} onClick={() => handleSelect(role.value)}>
            {role.icon && <MDBIcon fas icon={role.icon} />} {role.value}
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </div>
  );
}

export default EmployeeRoleDropdown;
