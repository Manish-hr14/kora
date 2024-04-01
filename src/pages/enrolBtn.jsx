import React from "react";
import { Button } from "@mui/material";

const CustomButton = () => {
  return (
    <Button
      className="mt-[-48px] w-[100px] h-[39px] shrink-0 [debug_commit:f6aba90]" // Adjusted margin-top to move the button downwards
      disableElevation={true}
      variant="contained"
      sx={{
        textTransform: "none",
        color: "#fff",
        fontSize: "16px",
        background: "#2a3958",
        borderRadius: "10px",
        "&:hover": { background: "#2a3958" },
        width: "100px",
        height: "39px",
      }}
    >
      등록
    </Button>
  );
};

export default CustomButton;
