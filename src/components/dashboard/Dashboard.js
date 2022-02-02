import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import { Grid } from "@material-ui/core";
import "./DashBoard.css";
import Sidebar from "../sideBar/Sidebar";
export default function StaticDatePickerLandscape() {
  const [value, setValue] = React.useState(new Date());

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={4} style={{ marginLeft: "2%" }}>
          <Sidebar />
        </Grid>
        {/* <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          justify="flex-end"
        > */}
        <Grid
          item
          xs={8}
          sm={8}
          md={7}
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <StaticDatePicker
              orientation="landscape"
              openTo="day"
              value={value}
              shouldDisableDate={isWeekend}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              onClick={console.log(value)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </Grid>
      {/* </Grid> */}
    </div>
  );
}
