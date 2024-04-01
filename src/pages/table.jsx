import React from "react";
import { Button } from "@mui/material";
import { data1 } from "../data/data";

const Demo2 = () => {
  const getColor = (index) => {
    const colors = ["#FFEDD5", "#FEE2E2", "#DCFCE7"];
    return colors[index % colors.length];
  };

  const getFontColor = (index) => {
    const fontColors = ["#9A3412", "#991B1B", "#166534"];
    return fontColors[index % fontColors.length];
  };

  const getChkBoxColor = (index) => {
    const ChkBoxColor = ["#FFFFFF", "FFFFFF", "#DDE0E5"];
    console.log(ChkBoxColor[index % ChkBoxColor.length]);
    return ChkBoxColor[index % ChkBoxColor.length];
  };

  const handleCheckboxChange = (e) => {
    // Handle checkbox change here
    console.log("Checkbox checked:", e.target.checked);
  };

  return (
    <div className="container">
      <table style={{ width: "100%" }}>
        <thead>
          <tr style={{ backgroundColor: "#EEF0F4", height: "68px" }}>
            <th>
              <input
                className="m-0 w-4 h-4 relative box-border overflow-hidden shrink-0 border-[0.5px] border-solid border-gainsboro text-gray-500"
                style={{
                  boxShadow: "0px 2px 4px rgba(0.0, 0.0, 0.0, 0.2)",
                  marginTop: "7px",
                      borderRadius: '4px',
                }}
                type="checkbox"
              />
            </th>
            <th>No</th>
            <th>기존유형</th>
            <th>신청유형</th>
            <th>제출서류</th>
            <th>신청일시</th>
            <th>승인여부</th>
            <th>승인거부 사유</th>
            <th>승인일시</th>
            <th>관리자</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr
              key={index}
              className={`row ${index % 2 === 0 ? "even-row" : "odd-row"}`}
              style={{
                textAlign: "center",
                backgroundColor: index % 2 === 0 ? "white" : "#F9F9FB",
                height: "44px",
                border: "collapse",
              }}
            >
              <td>
                <label
                  className="checkbox-container"
                  style={{
                    display: "block",
                    position: "relative",
                    cursor: "pointer",
                    borderRadius: '50%',
                  }}
                >
                  <input
                    className="checkbox-input"
                    style={{
                      position: "absolute",
                      opacity: 0,
                      cursor: "pointer",
                      height: "16px",
                      width: "16px",
                      borderRadius: '50%',
                    }}
                    type="checkbox"
                    onChange={handleCheckboxChange}
                  />
                  <span
                    className="checkmark"
                    style={{
                      position: "absolute",
                      top: -15,
                      left: 2,
                      height: "16px",
                      width: "16px",
                      backgroundColor: getChkBoxColor(index),
                      boxShadow: "0px 2px 4px rgba(0.0, 0.0, 0.0, 0.2)",
                      marginTop: "7px",
                      borderRadius: '4px',
                    }}
                  ></span>
                </label>
              </td>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.topic}</td>
              <td>
                <Button
                  className="h-[29px] w-[61px]"
                  disableElevation={true}
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#222",
                    fontSize: "14",
                    background: "#ebeef3",
                    borderRadius: "8px",
                    "&:hover": { background: "#ebeef3" },
                    width: 61,
                    height: 29,
                  }}
                >
                  보기
                </Button>
              </td>
              <td>{item.date}</td>
              <td>
                <div
                  className="rounded-3xs bg-status-text-bg3 overflow-hidden inline-flex items-center py-0.5 px-2 gap-[6px]"
                  style={{ backgroundColor: getColor(index) }}
                >
                  <div
                    className="relative text-sm leading-[16px] font-medium font-pretendard text-status-text-waiting whitespace-nowrap"
                    style={{ color: getFontColor(index) }}
                  >
                    <strong>승인대기</strong>
                  </div>
                </div>
              </td>
              <td>{item.reason}</td>
              <td>{item.approvaldate}</td>
              <td>{item.manager}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Demo2;
