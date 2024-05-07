import React, { useState, useEffect } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Dropdown, DropdownButton } from "react-bootstrap";

function EmployeeRoleDropdown({ setEmployeeRole }) {
  const roles = [
    { value: "Administrator", icon: "user-tie" },
    { value: "Technical Staff", icon: "cogs" },
    { value: "Support Staff", icon: "headset" },
  ];

  const handleSelect = (role) => {
    if (typeof setEmployeeRole === "function") {
      // Verifica si es función
      setEmployeeRole(role);
    }
  };

  return (
    <DropdownButton
      id="employee-role-dropdown"
      title="Select Role"
      variant="success"
    >
      {roles.map((role) => (
        <Dropdown.Item
          key={role.value}
          onClick={() => handleSelect(role.value)}
        >
          <i className={`fas fa-${role.icon}`} /> {role.value}
        </Dropdown.Item>
      ))}
    </DropdownButton>
  );
}

function Register() {
  const [userType, setUserType] = useState(null);
  const [employeeRole, setEmployeeRole] = useState(null);

  // Cambia el color del fondo del body según el tipo de usuario
  useEffect(() => {
    const body = document.body;

    switch (userType) {
      case "customer":
        body.style.backgroundColor = "#f0f8ff"; // AliceBlue
        break;
      case "employee":
        body.style.backgroundColor = "#d4edda"; // LightGreen
        break;
      case "admin":
        body.style.backgroundColor = "#f8d7da"; // LightPink
        break;
      default:
        body.style.backgroundColor = "#ffffff"; // Blanco por defecto
        break;
    }

    return () => {
      // Restaura el color del body si el componente se desmonta
      body.style.backgroundColor = "#ffffff";
    };
  }, [userType]); // Ejecuta cada vez que cambia el tipo de usuario

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    setUserType(userType === value ? null : value); // Alternar selección
  };

  return (
    <MDBContainer fluid className="my-5">
      <MDBRow className="g-0 align-items-center">
        <MDBCol md="6">
          <MDBCard
            className="my-5 col-md-7 offset-md-5 cascading-right"
            style={{ backdropFilter: "blur(30px)" }}
          >
            <MDBCardBody className="p-md-5 p-3 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    type="text"
                  />
                </MDBCol>
                <MDBCol col="6">
                  <MDBInput wrapperClass="mb-4" label="Last name" type="text" />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass="mb-4" label="Email" type="email" />
              <MDBInput wrapperClass="mb-4" label="Password" type="password" />

              <div className="mb-4">
                <label>Choose user type:</label>
                <div className="d-flex justify-content-center">
                  <MDBCheckbox
                    name="userType"
                    value="customer"
                    id="customer"
                    label="Customer"
                    onChange={handleCheckboxChange}
                    checked={userType === "customer"}
                  />
                  <MDBCheckbox
                    name="userType"
                    value="employee"
                    id="employee"
                    label="Employee"
                    onChange={handleCheckboxChange}
                    checked={userType === "employee"}
                  />
                  <MDBCheckbox
                    name="userType"
                    value="admin"
                    id="admin"
                    label="Admin"
                    onChange={handleCheckboxChange}
                    checked={userType === "admin"}
                  />
                </div>
              </div>

              {userType === "employee" && (
                <EmployeeRoleDropdown setEmployeeRole={setEmployeeRole} />
              )}

              {userType === "customer" && (
                <MDBRow>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Company Name"
                      type="text"
                    />
                  </MDBCol>
                  <MDBCol>
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Primary Contact Name"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>
              )}

              <MDBBtn className="w-100 mb-4" size="md" disabled={!userType}>
                Sign Up
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol col="6">
          <img
            src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
            className="w-70 rounded-4 shadow-4"
            alt="Signup Image"
          />
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Register;
