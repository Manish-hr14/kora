import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material"; // Import necessary components from Material-UI

function YourComponent() {
  const [selectedItem, setSelectedItem] = useState("");

  const handleApprovalStatusClick = (event) => {
    setSelectedItem(event.target.value);
    // Add your functionality here for when an item is clicked
    console.log(event.target.value + " is clicked");
    // Add any other logic or actions you want to perform here
  };

  return (
    <FormControl
      className="h-[39px] flex-1 font-pretendard text-base text-dark-11 min-w-[112px] w-auto"
      variant="standard"
      sx={{
        borderColor: "#b1b4bb",
        borderStyle: "SOLID",
        borderTopWidth: "1px",
        borderRightWidth: "1px",
        borderBottomWidth: "1px",
        borderLeftWidth: "1px",
        backgroundColor: "#fff",
        borderRadius: "8px",
        width: "32.74432809773124%",
        height: "39px",
        m: 0,
        p: 0,
        "& .MuiInputBase-root": {
          m: 0,
          p: 0,
          minHeight: "39px",
          justifyContent: "center",
          display: "inline-flex",
        },
        "& .MuiInputLabel-root": {
          m: 0,
          p: 0,
          minHeight: "39px",
          display: "inline-flex",
        },
        "& .MuiMenuItem-root": {
          m: 0,
          p: 0,
          height: "39px",
          display: "flex", // Make the menu items flex to align text and arrow
          alignItems: "center", // Center the content vertically
        },
        "& .MuiSelect-select": {
          m: 0,
          p: 0,
          height: "39px",
          alignItems: "center",
          display: "inline-flex",
        },
        "& .MuiInput-input": { m: 0, p: 0 },
        "& .MuiInputBase-input": {
          color: "#0b101a",
          fontSize: 16,
          fontWeight: "Regular",
          fontFamily: "Pretendard",
          textAlign: "left",
          p: "0 !important",
          marginLeft: "12px",
        },
      }}
    >
      <InputLabel color="secondary" />
      <Select
        value={selectedItem}
        onChange={handleApprovalStatusClick}
        color="secondary"
        disableUnderline
        displayEmpty
        IconComponent={() => (
          <img
            width="11.2px"
            height="6.6px"
            src="/vector-1.svg"
            style={{ marginRight: "11.89999999999991px" }}
          />
        )}
      >
        <MenuItem value="">승인여부 전체</MenuItem>
        <MenuItem value="pending">승인대기</MenuItem>
        <MenuItem value="approved">승인완료</MenuItem>
        <MenuItem value="rejected">승인거부</MenuItem>
      </Select>
      <FormHelperText />
    </FormControl>
  );
}

export default YourComponent;
