import React from "react";
import ErrorImg from "../../Assets/images/404Error.png";
import { Grid } from "@material-ui/core";
import "./404.css";
const ErroPage = () => {
  return (
    <div className="notfound">
      <img src={ErrorImg} alt="404, Not Found" width="35%" height="10%" />
    </div>
  );
};

export default ErroPage;
