import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import VpnKeyIcon from "@mui/icons-material/VpnKey";

export default function MediaCard(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Card sx={{ justifyContent: "center" }}>
        <CardContent>
          <PhoneAndroidIcon sx={{ marginTop: "10%" }} />
          <TextField
            id="standard-basic"
            label="Mobile No."
            variant="standard"
          />{" "}
          <br></br>
          <VpnKeyIcon sx={{ marginTop: "10%" }} />
          <TextField
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained">Login</Button>
          <Button variant="contained">Signup</Button>
        </CardActions>
      </Card>
    </div>
  );
}
