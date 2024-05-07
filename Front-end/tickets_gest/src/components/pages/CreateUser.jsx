import React, { useState } from "react";
import UserForm from "./UserForm";
import NotificationService from "./NotificationService";
import { createUser } from "./api"; // Suponiendo una función de API para crear usuarios

const CreateUser = () => {
  const [userType, setUserType] = useState("internal"); // Puede ser 'internal' o 'external'
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    companyName: "",
    contactName: "",
    contactDetails: "",
  });

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleFormChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await createUser(formData);
      await NotificationService.sendEmail(
        user.email,
        "User Created",
        "Welcome to the system!"
      );
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  return (
    <div>
      <h2>Create User</h2>
      <label>
        User Type:
        <select value={userType} onChange={handleUserTypeChange}>
          <option value="internal">Internal</option>
          <option value="external">External</option>
        </select>
      </label>
      <UserForm
        userType={userType}
        formData={formData}
        onFormChange={handleFormChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default CreateUser;
