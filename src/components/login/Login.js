import * as React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  TextField,
} from "@mui/material";

const form = () => {
  <div>
    <TextField id="standard-basic" label="Mobile No." variant="standard" />
    <TextField id="standard-basic" label="Password" variant="standard" />
  </div>;
};

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
          <TextField
            id="standard-basic"
            label="Mobile No."
            variant="standard"
          />{" "}
          <br></br>
          <TextField
            type="password"
            id="standard-basic"
            label="Password"
            variant="standard"
          />
        </CardContent>
        <CardActions>
          <Button variant="contained">Login</Button>
          <Button variant="contained" sx={{ justifyContent: "right" }}>
            Signup
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
