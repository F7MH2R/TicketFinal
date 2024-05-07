import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

const EmployeeTable = ({ employees = [] }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [password, setPassword] = useState("");
  const [permissions, setPermissions] = useState("");

  const handleOpenDialog = (type, employee) => {
    setDialogType(type);
    setSelectedEmployee(employee);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setPassword("");
    setPermissions("");
  };

  const handleChangePassword = () => {
    console.log(
      `Cambiar contraseña para ${selectedEmployee.name} a ${password}`
    );
    handleCloseDialog();
  };

  const handleAssignPermissions = () => {
    console.log(
      `Asignar permisos para ${selectedEmployee.name}: ${permissions}`
    );
    handleCloseDialog();
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Cargo</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.length === 0 ? (
            <TableRow>
              <TableCell colSpan={3}>No hay empleados disponibles</TableCell>
            </TableRow>
          ) : (
            employees.map((employee) => (
              <TableRow key={employee.id}>
                <TableCell>{employee.name}</TableCell>
                <TableCell>{employee.position}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleOpenDialog("password", employee)}
                  >
                    Cambiar Contraseña
                  </Button>
                  <Button
                    onClick={() => handleOpenDialog("permissions", employee)}
                  >
                    Asignar Permisos
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        {dialogType === "password" ? (
          <>
            <DialogTitle>Cambiar Contraseña</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Nueva Contraseña"
                type="password"
                fullWidth
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancelar</Button>
              <Button onClick={handleChangePassword}>Aceptar</Button>
            </DialogActions>
          </>
        ) : (
          <>
            <DialogTitle>Asignar Permisos</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                label="Permisos (Solo Lectura / Edición)"
                fullWidth
                variant="outlined"
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Cancelar</Button>
              <Button onClick={handleAssignPermissions}>Aceptar</Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </TableContainer>
  );
};

export default EmployeeTable;
