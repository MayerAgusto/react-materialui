import { Box, Button, Grid, TextField } from "@mui/material";
import React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import InputAdornment from "@mui/material/InputAdornment";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import NumbersIcon from "@mui/icons-material/Numbers";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { validateUser, isNotNull } from "./functions/function";
const client = {
  name: "",
  email: "",
  address: "",
  ruc: "",
  phone: ""
};
const clientError = {
  name: false,
  email: false,
  address: false,
  ruc: false,
  phone: false
};
export default function ClienteForm() {
  const [addClient, setClient] = React.useState(client);
  const [error, setError] = React.useState(clientError);
  const [empty, setEmpty] = React.useState(true);

  const handleEvent = (e) => {
    setClient({
      ...addClient,
      [e.target.name]: e.target.value
    });
    setError(validateUser(e.target.name, e.target.value, error));
  };
  const handleSendData = () => {
    console.log(addClient);
    console.log(error);
    let item = "";
    for (item in error) {
      if (error[item]) console.log("falta cooregir los datos");
    }
  };

  React.useEffect(() => {
    isNotNull(addClient.name) ? setEmpty(false) : setEmpty(true);
    isNotNull(addClient.email) ? setEmpty(false) : setEmpty(true);
    isNotNull(addClient.address) ? setEmpty(false) : setEmpty(true);
    isNotNull(addClient.ruc) ? setEmpty(false) : setEmpty(true);
  }, [addClient]);

  return (
    <form>
      <Grid container>
        <Grid item xs={12} md={4} padding={1}>
          <TextField
            required
            fullWidth
            name="name"
            value={addClient.name}
            error={error.name}
            label="Nombre del cliente"
            onChange={handleEvent}
            helperText="Campo obligatorio"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} padding={1}>
          <TextField
            required
            fullWidth
            name="email"
            value={addClient.email}
            label="Correo electronico"
            type="email"
            onChange={handleEvent}
            error={error.email}
            helperText="Debe contener un @"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} padding={1}>
          <TextField
            required
            fullWidth
            name="address"
            value={addClient.address}
            label="Direccion "
            onChange={handleEvent}
            error={error.address}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AddLocationIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} padding={1}>
          <TextField
            required
            fullWidth
            error={error.ruc}
            value={addClient.ruc}
            label="Ruc "
            name="ruc"
            onChange={handleEvent}
            helperText="Minimo 11 digitos"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <NumbersIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={4} padding={1}>
          <TextField
            fullWidth
            value={addClient.phone}
            label="Número telefonico"
            name="phone"
            error={error.phone}
            onChange={handleEvent}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneIphoneIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            marginTop={1}
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
          >
            <Button disabled={empty} onClick={handleSendData}>
              Agregar ususario
            </Button>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
}
