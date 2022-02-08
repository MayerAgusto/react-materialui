import {
  Box,
  Paper,
  Stepper,
  Step,
  StepLabel,
  TextField,
  Button
} from "@mui/material";
import React from "react";
const acciones = [
  "Ingresar Datos",
  "Agregar Cliente",
  "Agregar Insumos",
  "Agregar Cliente"
];
export default function Trabajo() {
  const [accion, setAccion] = React.useState(0);
  const [disabled, setDisabled] = React.useState(false);
  const [preDisabled, setPreDisabled] = React.useState(true);
  const goNext = () => {
    setAccion(accion + 1);
    setPreDisabled(false);
    accion === acciones.length - 2 ? setDisabled(true) : setDisabled(false);
  };
  const goPrevious = () => {
    setAccion(accion - 1);
    setDisabled(false);
    accion === 1 ? setPreDisabled(true) : setPreDisabled(false);
  };
  const getContent = (accion) => {
    switch (accion) {
      case 0:
        return (
          <>
            <TextField></TextField>
          </>
        );
      case 1:
        return <Button>Add</Button>;
      case 2:
        return <Button>Delete</Button>;
      case 3:
        return <Button>Final</Button>;
      default:
        throw new Error("Unknown step");
    }
  };
  return (
    <Paper>
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={accion} sx={{ padding: 2 }}>
          {acciones.map((item, key) => (
            <Step key={key}>
              <StepLabel> {item}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box sx={{ padding: 2 }}>{getContent(accion)}</Box>

        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ padding: 2 }}
        >
          <Button disabled={preDisabled} onClick={() => goPrevious()}>
            Anterior
          </Button>
          <Button disabled={disabled} onClick={() => goNext()}>
            Siguiente
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
