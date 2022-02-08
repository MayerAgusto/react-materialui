import { Box, Button, Grid, Modal, Paper, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import ClienteForm from "./ClienteForm";
import React from "react";

export default function Cliente() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Paper>
        <Grid container>
          <Grid item xs={12} margin={1}>
            <Box display="flex" alignItems="center">
              <PersonIcon sx={{ fontSize: 65 }} color="primary" />
              <Typography variant="h4" component="h1" color="primary">
                Clientes
              </Typography>
              <Button onClick={handleOpen}> Agregar usuario</Button>
            </Box>
          </Grid>
          <Grid item xs={12} margin={2}></Grid>
          <Grid item xs={12} margin={2}>
            Hola
          </Grid>
        </Grid>
      </Paper>
      <Modal open={open} onClose={handleClose}>
        <Box
          xs={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "#fff",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4
          }}
        >
          <ClienteForm />
        </Box>
      </Modal>
    </>
  );
}
