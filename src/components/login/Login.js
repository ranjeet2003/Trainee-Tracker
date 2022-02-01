import * as React from "react";
import "./Login.css";
import { Box, Card, Button, Grid, TextField } from "@material-ui/core";
import AccountCircle from "@mui/icons-material/AccountCircle";
// import { LocalPhoneIcon, VpnKeyIcon } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

const form = (
  <div className="form">
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <Box sx={{ display: "flex", alignItems: "center", margin: "2%" }}>
        <LocalPhoneIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Mobile No." variant="standard" />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", margin: "2%" }}>
        <VpnKeyIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
      </Box>
      <div className="btn-align">
        <Button variant="contained">Login</Button>
      </div>
    </Box>
  </div>
);

export default function Login() {
  return (
    <>
      <Grid className="Login" container spacing={2}>
        <Grid item xs={4}>
          <Box>
            <Card variant="outlined">{form}</Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
