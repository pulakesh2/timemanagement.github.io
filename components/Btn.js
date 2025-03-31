import { Button } from "@mui/material";

const Btn = function ({ children, onClick }) {
  return (
    <Button sx={{ mr: 2, mt: 1 }} variant="contained" onClick={onClick}>
      {children}
    </Button>
  );
};

export default Btn;
