import { Divider, Toolbar } from "@mui/material";

const Header = function () {
  return (
    <div className="header">
      <Toolbar sx={{ fontSize: "25px" }}>Task Management App</Toolbar>
      <Divider></Divider>
    </div>
  );
};

export default Header;
